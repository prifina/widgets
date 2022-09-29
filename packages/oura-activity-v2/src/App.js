import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { usePrifina, Op } from "@prifina/hooks";
import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Oura from "@prifina/oura";

import { Flex, Text, Box, Image, IconButton, Icon } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import OuraIcon from "./assets/oura.svg";

import { FireIcon } from "./assets/icons";
import { StepsIcon } from "./assets/icons";
import { DistanceIcon } from "./assets/icons";

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
  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
  padding: 11px 8px 0px 8px;
`;

// unique appID for the widget....
// const appID = "csd88KWnuft8fHfMrKSBAD";

const App = (props) => {
  // const { onUpdate, Prifina, API, registerHooks } = usePrifina();
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  // const stage = "dev";

  const [displayData, setDisplayData] = useState();

  const [processedData, setProcessedData] = useState();

  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", data);

    let newData = data;

    console.log("newData", newData);

    let arr = [data];

    setDisplayData(arr);
    setProcessedData(newData);
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
      //   payload.data.dataconnector === "Oura/queryActivitySummariesAsync" &&
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

      registerDataConnector(APP_ID, [Oura]);

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

      const result = await API[APP_ID].Oura.queryActivitySummary({
        filter: filter,
        fields: "cal_total,steps,daily_movement"
      });

      console.log("RESULT", result);


      processData(result.data.getDataObject.content);

    }
    init();
  }, [day]);

  console.log("day", day);

  return (
    <Container>
      <Flex alignItems="center" mb={21}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Activity widget
        </Text>
        <Image src={OuraIcon} />
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignItems="center"
          bg="#FFA654"
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
              <FireIcon color="#FFA654" />
              <Text ml={3} color="#FFA654">
                {processedData === undefined ? 0 : processedData.cal_total}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <StepsIcon color="#FFE9D5" />
              <Text ml={3} color="#FFE9D5">
                {processedData === undefined ? 0 : processedData.steps}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <DistanceIcon color="#F8F043" />
              <Text ml={3} color="#F8F043">
                {processedData === undefined ? 0 : processedData.daily_movement}
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
                  background: "rgba(0, 0, 0, 0.9)",
                  padding: 5,
                  border: 0,
                }}
                itemStyle={{ fontSize: 14 }}
              />
              <Bar
                barSize={45}
                name="Calories"
                dataKey="cal_total"
                fill="#FFA654"
              />
              <Bar barSize={45} name="Steps" dataKey="steps" fill="#FFE9D5" />

              <Bar
                barSize={45}
                name="Distance"
                dataKey="daily_movement"
                fill="#F8F043"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

// App.displayName = "OuraActivity";

export default App;
