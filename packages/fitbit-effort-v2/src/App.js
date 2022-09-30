import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Fitbit from "@prifina/fitbit";

import { Flex, Text, Box, Image, IconButton } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import FitbitIcon from "./assets/fitbit.svg";

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

  const [processedData, setProcessedData] = useState({});

  const prifinaInit = useRef();
  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", data);

    let newData = [data];

    console.log("newData", newData);

    setProcessedData(newData);

    console.log("new 17");
  };

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
        fields:
          "sedentaryMinutes,lightlyActiveMinutes,fairlyActiveMinutes,veryActiveMinutes",
      });

      console.log("THE NEW BUILD result", result);

      processData(result.data.getDataObject.content);
    }
    getData();
  }, [day]);

  console.log("day", day);

  function minutesToTime(min) {
    var hours = Math.floor(min / 60);

    var divisor_for_minutes = min % 60;
    var minutes = Math.floor(divisor_for_minutes);

    var obj = hours + "h " + minutes + "m";
    return obj;
  }

  return (
    <Container>
      <Flex alignItems="center" mb={8}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Effort widget
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
          height={202}
          style={{
            background: "rgba(251, 242, 242, 0.3)",

            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={200}
              height={202}
              data={processedData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              style={{ cursor: "pointer" }}
            >
              <CartesianGrid
                strokeDasharray="none"
                vertical={false}
                stroke="rgba(0, 0, 0, 0.12)"
              />
              <XAxis
                tickLine={false}
                dataKey="0"
                stroke="rgba(0, 0, 0, 0.12)"
                label={{
                  value: "ACTIVITY LEVEL",
                  position: "bottom",
                  offset: -20,
                  stroke: "white",
                  fontSize: 10,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                label={{
                  value: "HOURS",
                  angle: -90,
                  stroke: "white",
                  fontSize: 10,
                }}
                allowDecimals={false}
                type="number"
                tickFormatter={(total) => {
                  return Math.floor(total / 60);
                }}
                stroke="white"
                domain={["0", "dataMax+60"]}
              />

              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "rgba(128, 128, 255, 0.9)",
                  padding: 5,
                  border: "none",
                  borderRadius: 8,
                }}
                itemStyle={{ fontSize: 14 }}
                formatter={(awake) => {
                  return minutesToTime(awake);
                }}
              />
              <Bar
                barSize={45}
                name="Sedentary"
                dataKey="sedentaryMinutes"
                fill="#D4D7F2CC"
              />

              <Bar
                barSize={45}
                name="Light"
                dataKey="lightlyActiveMinutes"
                fill="#DDB7F4"
              />
              <Bar
                barSize={45}
                name="Fairly"
                dataKey="fairlyActiveMinutes"
                fill="#2A2E9C"
              />
              <Bar
                barSize={45}
                name="Very Active"
                dataKey="veryActiveMinutes"
                fill="#222671"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

App.displayName = "FitbitEffort";

export default App;
