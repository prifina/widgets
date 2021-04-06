import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePrifina, Op, _fn, buildFilter } from "@prifina/hooks";
import GoogleTimeline from "@prifina/google-timeline/";

const Container = styled.div`
  height: 200px;
  font-size: 14px;
  width: 200px;
  padding: 5px;
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
`;

// unique appID for the widget....
const appID = "timelineWidget";

const TimeLine = (props) => {
  // init hook and get provider api services...
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  // init provider api with your appID
  const prifina = new Prifina({ appId: appID });

  const [timelineData, setTimeLineData] = useState({});

  const processData = (data) => {
    let activities = {};
    data.forEach((d) => {
      if (parseInt(d.p_confidence) === 100) {
        if (!activities.hasOwnProperty(d.p_type)) {
          activities[d.p_type] = 0;
        }
        activities[d.p_type] += 1;
      }
    });
    const sortedKeys = Object.keys(activities).sort((a, b) =>
      activities[a] > activities[b] ? -1 : activities[b] > activities[a] ? 1 : 0
    );
    //console.log(activities);
    //console.log(sortedKeys);
    let sorted = {};
    for (let i = 0; i < Math.min(5, sortedKeys.length); i++) {
      sorted[sortedKeys[i]] = activities[sortedKeys[i]];
    }

    setTimeLineData(sorted);
  };
  const dataUpdate = (data) => {
    // should check the data payload... :)

    if (
      data.hasOwnProperty("settings") &&
      typeof data.settings === "object" &&
      data.settings.length === 2
    ) {
      console.log("TIMELINE ", data.settings);
    }
    /*
    console.log("UPDATE ", data.data.queryActivities.data);
    let activities = {};
    for (let i = 0; i < data.data.queryActivities.data.length; i++) {
      const a = data.data.queryActivities.data[i];
      if (!activities.hasOwnProperty(a.type)) {
        activities[a.type] = 0;
      }
      activities[a.type] += a.cnt;
    }
    const sortedKeys = Object.keys(activities).sort((a, b) =>
      activities[a] > activities[b] ? 1 : activities[b] > activities[a] ? -1 : 0
    );
    console.log(sortedKeys);
    let sorted = {};
    for (let i = sortedKeys.length - 1; i > sortedKeys.length - 6; i--) {
      //console.log(sortedKeys[i]);
      sorted[sortedKeys[i]] = activities[sortedKeys[i]];
    }
    //console.log(sorted);
    setTimeLineData(sorted);
    */
  };

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [GoogleTimeline]);
    // get

    const filter = {
      [Op.and]: {
        2021: {
          [Op.eq]: _fn("YEAR", "p_datetime"),
        },
        2: {
          [Op.eq]: _fn("MONTH", "p_datetime"),
        },
        100: { [Op.eq]: _fn("CAST", "p_confidence", "int") },
      },
    };

    const data = await API[appID].GoogleTimeline.queryActivities({
      filter: buildFilter(filter),
    });
    console.log("DATA ", data.data.getS3Object.content);
    if (data.data.getS3Object.content.length > 0) {
      processData(data.data.getS3Object.content);
    }
  }, []);

  return (
    <Container>
      <div>
        <div>TOP 5 activities</div>
        {Object.keys(timelineData).length > 0 && (
          <ol>
            {Object.keys(timelineData).map((t, k) => {
              return (
                <li key={"act-" + k}>
                  {t}={timelineData[t]}
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </Container>
  );
};
TimeLine.displayName = "TimeLine";

export default TimeLine;