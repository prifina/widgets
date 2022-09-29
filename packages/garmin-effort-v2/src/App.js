import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Garmin from "@prifina/garmin";

import { Flex, Text, Box, Image, IconButton } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import GarminIcon from "./assets/garmin.svg";

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
  background: linear-gradient(180deg, #2e302d 0%, #69d3c7 149.83%);

  padding: 11px 8px 0px 8px;
`;

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [processedData, setProcessedData] = useState({});

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
      console.log("PAYLOAD DATA", payload);
    }
  };

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();

  useEffect(() => {
    async function init() {
      onUpdate(APP_ID, dataUpdate);

      registerDataConnector(APP_ID, [Garmin]);

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

      const result = await API[APP_ID].Garmin.queryDailiesData({
        filter: filter,
        fields:
          "sedentaryMinutes,lightlyActiveMinutes,fairlyActiveMinutes,veryActiveMinutes",
      });

      console.log("THE NEW BUILD result", result);

      processData(result.data.getDataObject.content);
    }
    init();
  }, [day]);

  console.log("day", day);

  function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var obj = hours + "h " + minutes + "m";
    return obj;
  }

  return (
    <Container>
      <Flex alignItems="center" mb={8}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={95}>
          Effort widget
        </Text>
        <Image src={GarminIcon} />
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignItems="center"
          bg="#236B5F"
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
            icon={<ChevronLeftIcon color="white" />}
            onClick={async () => {
              setDay(day + 1);
            }}
          />
          <Text color="white">{date}</Text>

          <IconButton
            disabled={day === 1 ? true : false}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              fontSize: 19,
            }}
            aria-label="Search database"
            icon={<ChevronRightIcon color="white" />}
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
                  value: "INTENSITY LEVEL",
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
                  return Math.floor(total / 3600);
                }}
                stroke="white"
                domain={["0", "dataMax+3600"]}
              />

              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.9)",
                  padding: 5,
                  border: 0,
                }}
                itemStyle={{ fontSize: 14 }}
                formatter={(awake) => {
                  return secondsToTime(awake);
                }}
              />
              <Bar
                barSize={45}
                name="Total duration"
                dataKey="durationinseconds"
                fill="#C8FFF5"
              />

              <Bar
                barSize={45}
                name="Goal"
                dataKey="intensitydurationgoalinseconds"
                fill="#54B4A3"
              />
              <Bar
                barSize={45}
                name="Moderate intensity"
                dataKey="moderateintensitydurationinseconds"
                fill="#269582"
              />
              <Bar
                barSize={45}
                name="Vigorous intensity"
                dataKey="vigorousintensitydurationinseconds"
                fill="#23695D"
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
