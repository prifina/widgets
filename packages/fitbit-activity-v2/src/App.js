import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Fitbit from "@prifina/fitbit";

import { Flex, Text, Box, Image, IconButton, Icon } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import FitbitIcon from "./assets/fitbit.svg";

import { FireIcon } from "./assets/icons";
import { StepsIcon } from "./assets/icons";
import { DistanceIcon } from "./assets/icons";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [displayData, setDisplayData] = useState([]);

  const [processedData, setProcessedData] = useState();

  const [distance, setDistance] = useState();

  const prifinaInit = useRef();
  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", data);

    let newData = data;

    console.log("newData", newData);

    let sumDistance = newData.distances.reduce((acc, val) => {
      return acc + val.distance;
    }, 0);

    setProcessedData(newData);

    setDistance(sumDistance.toFixed(4) * 1000);

    Object.assign(newData, { distance: Number(sumDistance.toFixed(4) * 1000) });

    let arr = [newData];

    setDisplayData(arr);
  };

  console.log("processed display data", displayData);
  console.log("processed data", processedData);

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      // if (
      //   payload.data.dataconnector === "Fitbit/queryActivitySummariesAsync" &&
      //   payload.data.content.length > 1
      // ) {
      //   processData(payload.data.content);
      // }
      console.log("PAYLOAD DATA", payload);
    }
  };

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();

  useEffect(() => {
    async function init() {
      onUpdate(APP_ID, dataUpdate);

      registerDataConnector(APP_ID, [Fitbit]);
      prifinaInit.current = true;
    }
    if (!prifinaInit.current) {
      init();
    }
  }, []);
  useEffect(() => {
    async function getData() {

      let d = new Date();

      const dd = d.setDate(d.getDate() - day);

      const dateStr = new Date(dd).toISOString().split("T")[0];

      setDate(dateStr);

      console.log("datestr", dateStr);

      const filter = {
        ["s3::date"]: {
          [Op.eq]: dateStr,
        },
      };

      console.log("FILTER", filter);

      const result = await API[APP_ID].Fitbit.queryActivitySummary({
        filter: filter,
        fields: "caloriesOut,steps,distances",
      });

      console.log("RESULT", result);

      processData(result.data.getDataObject.content);
    }
    getData();
  }, [day]);

  console.log("day", day);

  console.log("day", displayData);

  return (
    <Container>
      <Flex alignItems="center" mb={21}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={95}>
          Activity widget
        </Text>
        <Image src={FitbitIcon} />
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignItems="center"
          bg="#D4D7F2CC"
          padding="0px 65px 0px 65px"
          borderTopRightRadius={8}
          borderTopLeftRadius={8}
        >
          <IconButton
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              fontSize: 19,
            }}
            aria-label="Search database"
            icon={<ChevronLeftIcon />}
            onClick={async () => {
              setDay(day + 1);
            }}
          />
          <Text>{date}</Text>

          <IconButton
            disabled={day === 1 ? true : false}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              fontSize: 19,
            }}
            aria-label="Search database"
            icon={<ChevronRightIcon />}
            onClick={async () => {
              setDay(day - 1);
            }}
          />
        </Flex>
        <Box
          height={190}
          style={{
            background: "rgba(251, 242, 242, 0.3)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            paddingTop: 10,
          }}
        >
          <Flex
            width="100%"
            justifyContent="space-between"
            style={{ paddingRight: 55, paddingLeft: 55 }}
          >
            <Flex alignItems="center">
              <FireIcon color="#222671" />
              <Text ml={3} color="#222671">
                {processedData === undefined ? 0 : processedData.caloriesOut}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <StepsIcon color="#DDB7F4" />
              <Text ml={3} color="#DDB7F4">
                {processedData === undefined ? 0 : processedData.steps}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <DistanceIcon color="#2A2E9C" />
              <Text ml={3} color="#2A2E9C">
                {processedData === undefined ? 0 : distance}
              </Text>
            </Flex>
          </Flex>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              style={{ cursor: "pointer" }}
              data={displayData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="none" stroke="null" />
              <XAxis hide dataKey="name" />
              <YAxis hide />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.9)",
                  padding: 5,
                  border: 0,
                  borderRadius: 8,
                }}
                itemStyle={{ fontSize: 14 }}
              />
              <Bar
                barSize={45}
                name="Calories"
                dataKey="caloriesOut"
                fill="#222671"
              />
              <Bar barSize={45} name="Steps" dataKey="steps" fill="#DDB7F4" />

              <Bar
                barSize={45}
                name="Distance (m)"
                dataKey="distance"
                fill="#2A2E9C"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

App.displayName = "FitbitActivity";

export default App;
