import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import Fitbit from "@prifina/fitbit";
import Oura from "@prifina/oura";
import Garmin from "@prifina/garmin";
import GoogleTimeline from "@prifina/google-timeline";

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

import OuraIcon from "./assets/oura.svg";

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
const appID = "6dyqsLq4MEJC2sT9WNBGUs";

let falseData = [
  {
    summary_date: "2022-09-04",
    period_id: 0,
    is_longest: 1,
    timezone: 0,
    bedtime_start: "2022-09-04T22:52:00+00:00",
    bedtime_end: "2022-09-05T03:55:00+00:00",
    score: 62,
    score_total: 57,
    score_disturbances: 83,
    score_efficiency: 99,
    score_latency: 88,
    score_rem: 97,
    score_deep: 59,
    score_alignment: 31,
    total: 16891,
    duration: 18180,
    awake: 1289,
    light: 11655,
    rem: 12876,
    deep: 2722,
    onset_latency: 480,
    restless: 39,
    efficiency: 94,
    midpoint_time: 11010,
    hr_lowest: 49,
    hr_average: 56.375,
    rmssd: 54,
    breath_average: 13,
    temperature_delta: -0.06,
    hypnogram_5min:
      "443432222211222333321112222222222111133333322221112233333333332232222334",
  },
];

let newD = {
  summary_date: "2022-09-06",
  period_id: 0,
  is_longest: 1,
  timezone: 0,
  bedtime_start: "2022-09-06T23:02:00+00:00",
  bedtime_end: "2022-09-07T05:32:00+00:00",
  score: 65,
  score_total: 57,
  score_disturbances: 83,
  score_efficiency: 99,
  score_latency: 88,
  score_rem: 97,
  score_deep: 59,
  score_alignment: 31,
  total: 21826,
  duration: 23400,
  awake: 1574,
  light: 10913,
  rem: 4475,
  deep: 6438,
  onset_latency: 480,
  restless: 39,
  efficiency: 94,
  midpoint_time: 11010,
  hr_lowest: 49,
  hr_average: 56.375,
  rmssd: 54,
  breath_average: 13,
  temperature_delta: -0.06,
  hypnogram_5min:
    "443432222211222333321112222222222111133333322221112233333333332232222334",
};

const OuraSleep = (props) => {
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
      if (
        payload.data.dataconnector === "Oura/querySleepSummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processData(payload.data.content);
      }
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
    registerHooks(appID, [Oura]);

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

    const result = await API[appID].Oura.querySleepSummary({
      filter: filter,
      // fields: "awake,light,rem,deep",
    });

    console.log("THE NEW BUILD result", result);

    processData(result.data.getDataObject.content[0]);

    // if (stage === "dev") {
    //   processData(result.data.getDataObject.content[1].score[1]);
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

  // let awake = processedData[0].awake;
  // let light = processedData[0].light;
  // let rem = processedData[0].rem;
  // let deep = processedData[0].deep;

  // let total = processedData[0].total;

  // let displayData = [
  //   {
  //     awake: secondsToTime(awake),
  //     light: secondsToTime(light),
  //     rem: secondsToTime(rem),
  //     deep: secondsToTime(deep),
  //     total: secondsToTime(total),
  //   },
  // ];

  // console.log("total time", total);
  // console.log("display time", displayData);

  return (
    <Container>
      <Flex alignItems="center" mb={21}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Sleep widget
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
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.9)",
                  padding: 5,
                  border: 0,
                  // width: 85,
                }}
                itemStyle={{ fontSize: 14 }}
                formatter={(awake) => {
                  return secondsToTime(awake);
                }}
              />

              <Bar barSize={45} name="Awake" dataKey="awake" fill="#FFE9D5" />
              <Bar barSize={45} name="Light" dataKey="light" fill="#FFA654" />
              <Bar barSize={45} name="Deep" dataKey="deep" fill="#B96314" />
              <Bar barSize={45} name="REM" dataKey="rem" fill="#6D3D10" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

OuraSleep.displayName = "OuraSleep";

export default OuraSleep;
