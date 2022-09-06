import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import Fitbit from "@prifina/fitbit";
import Oura from "@prifina/oura";
import Garmin from "@prifina/garmin";
import GoogleTimeline from "@prifina/google-timeline";

import { Flex, Spacer, Text, Box, Select } from "@chakra-ui/react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    #082673 30.67%,
    #644bd0 75.51%,
    #a56adf 106.47%
  );
  padding: 11px 8px 0px 8px;
`;

// unique appID for the widget....
const appID = "866fscSq5Ae7bPgUtb6ffB";

const OuraSleep = (props) => {
  let stage = "";
  const { data } = props;
  // init hook and get provider api services...
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  function getEveryNth(arr, nth) {
    const result = [];

    for (let i = 0; i < arr.length; i += nth) {
      result.push(arr[i]);
    }

    return result;
  }

  const [processedData, setProcessedData] = useState("");

  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", newData);

    let newData = data;

    console.log("newData", newData);

    const keys = data[0].split(",");

    data.shift();

    data = data.map((dataLine) => dataLine.split(",")).flat();

    const chunkSize = 4;
    const dataChunks = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      dataChunks.push(chunk);
    }

    const result = [];
    dataChunks.forEach((dataChunk) => {
      result.push({
        [keys[0]]: dataChunk[0],
        [keys[1]]: dataChunk[1],
        [keys[2]]: dataChunk[2],
        [keys[3]]: dataChunk[3],
      });
    });
    setProcessedData(result);

    setProcessedData(newData);
  };

  console.log("processed data", processedData);

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/querySleepSummariesAsync"
        // payload.data.content.length > 1
      ) {
        processData(payload.data.content);
      }
      console.log("PAYLOAD DATA", payload);
    }
  };

  const [day, setDay] = useState(1);
  const [date, setDate] = useState("");

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [Oura]);

    const d = new Date();

    const dd = d.setDate(d.getDate() - day);

    const daybefore = d.setDate(d.getDate() - 1);
    const dayafter = d.setDate(d.getDate() + 2);

    const dateStr = new Date(dd).toISOString().split("T")[0];

    const dateStrbefore = new Date(daybefore).toISOString().split("T")[0];
    const dateStrafter = new Date(dayafter).toISOString().split("T")[0];

    console.log("test day before", dateStrbefore);
    console.log("test day after", dateStrafter);

    setDate(dateStr);

    const filter = {
      ["s3::date2"]: {
        [Op.between]: {
          [Op.lt]: dateStrafter,
          [Op.gt]: dateStrbefore,
        },
      },
      ["s3::date"]: {
        [Op.eq]: dateStr,
      },
    };

    console.log("FILTER", filter);

    const activityResult = await API[appID].Oura.querySleepSummariesAsync({
      filter: filter,
      fields: "awake,light,rem,deep",
    });
    console.log("activityResult", activityResult);

    // processData(activityResult.data.getDataObject.content.score);

    if (stage === "dev") {
      processData(activityResult.data.getDataObject.content[1].score[1]);
    }
  }, [day]);

  console.log("day", day);

  return (
    <Container>
      <Flex>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mb={21}>
          Oura Sleep
        </Text>
        <Text color="white">{date}</Text>
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignContent="center"
          bg="#1B1D50"
          padding="4px 8px 4px 8px"
        >
          <Select w={71} background="#000897" color="white">
            <option value="option1">Year</option>
            <option value="option2">Month</option>
            <option value="option3">Day</option>
          </Select>
          <button
            onClick={async () => {
              setDay(day + 1);
            }}
          >
            back
          </button>
          <button
            onClick={async () => {
              setDay(day - 1);
            }}
          >
            forward
          </button>
          {/* <button
            onClick={async () => {
              const filter = {
                ["s3::date"]: {
                  [Op[functionCondition]]: conditionValue,
                },
              };
              console.log("FILTER", filter);

              console.log("DATE ", new Date().getTime(), result);
            }}
          >
            RUN
          </button> */}
        </Flex>
        <Box
          height={202}
          style={{
            background: "#FBF2F2",
            opacity: 0.6,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Box
            height={202}
            style={{
              // background: "#FBF2F2",
              opacity: 1,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={200}
                height={202}
                // data={processedData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="awake" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="awake" stackId="a" fill="#8884d8" />
                <Bar dataKey="light" stackId="a" fill="blue" />
                <Bar dataKey="deep" stackId="a" fill="red" />
                <Bar dataKey="rem" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
OuraSleep.displayName = "OuraSleep";

export default OuraSleep;
