import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import Fitbit from "@prifina/fitbit";

// import moment from "moment";

import {
  Flex,
  Spacer,
  Text,
  Box,
  Select,
  Image,
  IconButton,
} from "@chakra-ui/react";

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

// unique appID for the widget....
const appID = "6dyqsLq4MEJC2sT9WNBGUs";

const FitbitEffort = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

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

  const currentDate = useRef(new Date());

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [Fitbit]);

    // const d = currentDate.current;
    let d = new Date();

    // d = currentDate.current;

    const dd = d.setDate(d.getDate() - day);

    currentDate.current = dd;

    const dateStr = new Date(dd).toISOString().split("T")[0];

    setDate(dateStr);

    console.log("datestr", dateStr);

    const dateStr2 = new Date(currentDate.current).toISOString().split("T")[0];
    const dateStr3 = new Date(dd).toISOString().split("T")[0];

    console.log("currendate current", dateStr2);
    console.log("currendate dd", dateStr3);

    const filter = {
      ["s3::date"]: {
        [Op.eq]: dateStr,
      },
    };

    console.log("FILTER", filter);

    const result = await API[appID].Fitbit.queryActivitySummary({
      filter: filter,
    });

    console.log("THE NEW BUILD result", result);

    processData(result.data.getDataObject.content[0]);
  }, [day]);

  console.log("day", day);

  function secondsToTime(min) {
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
                  value: "DAY",
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
                  value: "HOURS ASLEEP",
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
                  return secondsToTime(awake);
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

FitbitEffort.displayName = "FitbitEffort";

export default FitbitEffort;
