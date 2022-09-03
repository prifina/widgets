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

  // //======
  // let data2 = [
  //   "awake,light,rem,deep",
  //   "1754,17958,5325,2743",
  //   "1333,10020,5423,5004",
  //   "1878,15021,9764,5257",
  //   "1589,13214,9082,7735",
  //   "1241,10793,10015,4291",
  //   "1783,9220,6023,2834",
  //   "1370,18793,5183,6334",
  //   "1988,16085,6152,2895",
  //   "1139,14180,6797,4344",
  //   "1170,11207,8844,5419",
  //   "1356,16908,3660,4296",
  //   "1805,15751,5691,5253",
  //   "1832,14427,3371,3110",
  //   "1198,10377,6075,7130",
  //   "1795,15629,4640,6676",
  // ];

  // const keys = data2[0].split(",");

  // data2.shift();

  // data2 = data2.map((dataLine) => dataLine.split(",")).flat();

  // const chunkSize = 4;
  // const dataChunks = [];
  // for (let i = 0; i < data2.length; i += chunkSize) {
  //   const chunk = data2.slice(i, i + chunkSize);
  //   dataChunks.push(chunk);
  // }

  // const result = [];
  // dataChunks.forEach((dataChunk) => {
  //   result.push({
  //     [keys[0]]: dataChunk[0],
  //     [keys[1]]: dataChunk[1],
  //     [keys[2]]: dataChunk[2],
  //     [keys[3]]: dataChunk[3],
  //   });
  // });

  const processData = (data) => {
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
  };

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);

    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/querySleepSummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processData(payload.data.content);
      }
    }
  };
  const appID = "12324194120ksoa";

  const [day, setDay] = useState(0);

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [Oura]);

    const d = new Date();

    const dd = d.setDate(d.getDate() - day);
    const dateStr = new Date(dd).toISOString().split("T")[0];

    console.log("dateStr", dateStr);

    const filter = {
      ["s3::date"]: {
        [Op.eq]: dateStr,
      },
    };

    const activityResult = await API[appID].Oura.querySleepSummariesAsync({
      filter: filter,
      fields: "awake,light,rem,deep",
    });
    console.log("ACTIVITY RESULT", activityResult);

    if (stage === "dev") {
      console.log("STAGE IS DEV");
      processData(activityResult.data.getDataObject.content);
    }
    processData(activityResult.data.getDataObject.content);

    /*
    const result = await API[appID].Oura.queryActivitySummariesAsync({
      filter: filter,
    });

    console.log("RESULT ", result);

    processData(result.data.getDataObject.content[0]);
*/
    //needs solution this doesn't work
    // if (result.data.getDataObject.content.activity.length > 0) {
    //   processData(result.data.getDataObject.content.activity);
    // }
  }, [day]);

  console.log("day", day);

  return (
    <Container>
      <Text fontSize={16} color="white" fontWeight={700} ml={9} mb={21}>
        Oura Sleep
      </Text>
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
            onClick={() => {
              setDay(day + 1);
            }}
          >
            back
          </button>
          <button
            onClick={() => {
              setDay(day - 1);
            }}
          >
            forward
          </button>
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
                // data={result}
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
