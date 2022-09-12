import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";

import Garmin from "@prifina/garmin";

import { Flex, Text, Box, Image, IconButton, Icon } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import GarminIcon from "./assets/garmin.svg";

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

// unique appID for the widget....
const appID = "uM4yKhpTFMiy74W57LHW4N";

const GarminActivity = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  // const stage = "dev";

  const [displayData, setDisplayData] = useState([]);

  const [processedData, setProcessedData] = useState();

  const [distance, setDistance] = useState();

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
      //   payload.data.dataconnector === "Garmin/queryActivitySummariesAsync" &&
      //   payload.data.content.length > 1
      // ) {
      //   processData(payload.data.content);
      // }
      console.log("PAYLOAD DATA", payload);
    }
  };

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();

  useEffect(async () => {
    onUpdate(appID, dataUpdate);

    registerHooks(appID, [Garmin]);

    let d = new Date();

    const dd = d.setDate(d.getDate() - day);

    const dateStr = new Date(dd).toISOString().split("T")[0];

    setDate(dateStr);

    console.log("datestr", dateStr);

    const filter = {
      ["s3::date"]: {
        [Op.gte]: dateStr,
      },
    };

    console.log("FILTER", filter);

    const result = await API[appID].Garmin.queryDailiesDataAsync({
      filter: filter,
    });

    console.log("RESULT", result);

    processData(result.data.getDataObject.content[0]);
  }, [day]);

  console.log("day", day);

  console.log("day", displayData);

  return (
    <Container>
      <Flex alignItems="center" mb={21}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={95}>
          Activity widget
        </Text>
        <Image src={GarminIcon} />
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

GarminActivity.displayName = "GarminActivity";

export default GarminActivity;
