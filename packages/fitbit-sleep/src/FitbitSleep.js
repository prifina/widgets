import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import Fitbit from "@prifina/fitbit";

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

import FitbitLogo from "./assets/fitbit.svg";

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

const appID = "6dyqsLq4MEJC2sT9WNBGUs";

let falseData = [
  {
    summary_date: "2022-09-04",
    total: 16891,
    awake: 1289,
    light: 11655,
    rem: 12876,
    deep: 2722,
  },
];

const FitbitSleep = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  const [processedData, setProcessedData] = useState();

  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", data);

    let newData = [data];

    console.log("newData", newData);

    setProcessedData(newData);
  };

  console.log("processed data", processedData);

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // if (
      //   payload.data.dataconnector === "Fitbit/querySleepSummariesAsync" &&
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

    const result = await API[appID].Fitbit.querySleepSummary({
      filter: filter,
    });

    console.log("THE NEW BUILD result", result);

    processData(result.data.getDataObject.content[0]);

    // if (props.stage === "dev") {
    //   processData(falseData);
    // }
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
      <Flex alignItems="center" mb={11}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Sleep widget
        </Text>
        <Image src={FitbitLogo} />
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignItems="center"
          bg="#D4D7F2"
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
                  return Math.floor(total / 3600);
                }}
                domain={[0, "dataMax + 3600"]}
                stroke="white"
                dataKey="total"
              />

              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "#D4D7F2",
                  padding: 5,
                  border: 0,
                }}
                itemStyle={{ fontSize: 14 }}
                formatter={(awake) => {
                  return secondsToTime(awake);
                }}
              />

              <Bar barSize={45} name="Awake" dataKey="awake" fill="#DDB7F4" />
              <Bar barSize={45} name="Light" dataKey="light" fill="#294BC1" />
              <Bar barSize={45} name="Deep" dataKey="deep" fill="#2A2E9C" />
              <Bar barSize={45} name="REM" dataKey="rem" fill="#222671" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

FitbitSleep.displayName = "FitbitSleep";

export default FitbitSleep;
