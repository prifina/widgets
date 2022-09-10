import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";

import Oura from "@prifina/oura";

import {
  Flex,
  Text,
  Box,
  Image,
  IconButton,
  Icon,
  Select,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import OuraIcon from "./assets/oura.svg";

import {
  LineChart,
  Line,
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
    score_resting_hr: 93,
  },
];

let asyncFalseData = [
  "score_resting_hr",
  "98",
  "98",
  "98",
  "98",
  "98",
  "98",
  "25",
  "98",
  "98",
  "98",
  "34",
  "98",
  "98",
  "98",
  "98",
  "98",
];

const OuraHeart = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  const [processedData, setProcessedData] = useState({});

  const [processedAsyncData, setProcessedAsyncData] = useState([]);

  // let stage = "dev";

  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", data);

    let newData = data;

    console.log("newData", newData);

    if (stage === "dev") {
      setProcessedData({
        score_resting_hr: 44,
      });
    } else {
      setProcessedData(newData);
    }
  };

  console.log("newest build");

  const processAsyncData = (data) => {
    console.log("ORIGINAL PROCESS ASYNC DATA", data);

    let newData = data;
    console.log("newData ASYNC", newData);

    newData.shift();

    newData = newData.map((dataLine) => dataLine.split(",")).flat();

    const result = [];
    newData.forEach((item) => {
      result.push({
        score_resting_hr: Number(item),
      });
    });

    setProcessedAsyncData(result);
  };

  console.log("processed data", processedData);
  console.log("processed async data", processedAsyncData);

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/queryReadinessSummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processAsyncData(payload.data.content);
      }
      console.log("PAYLOAD DATA", payload);
    }
  };

  const currentDate = useRef(new Date());

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();
  const [period, setPeriod] = useState(6);

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

    const filter = {
      ["s3::date"]: {
        [Op.eq]: dateStr,
      },
    };

    console.log("FILTER", filter);

    const result = await API[appID].Oura.queryReadinessSummary({
      filter: filter,
    });

    const ddd = d.setDate(d.getDate() - period);

    const asyncDateStr = new Date(ddd).toISOString().split("T")[0];

    const asyncFilter = {
      ["s3::date"]: {
        [Op.gte]: asyncDateStr,
      },
    };

    const asyncResult = await API[appID].Oura.queryReadinessSummariesAsync({
      filter: asyncFilter,
      fields: "summary_date,score_resting_hr",
    });

    console.log("result", result);

    console.log("async result", asyncResult);

    processData(result.data.getDataObject.content[0]);
  }, [day, period]);

  console.log("day", day);

  const handleChange = (e) => {
    setPeriod(e.target.value);
  };

  console.log("period", period);

  return (
    <Container>
      <Flex alignItems="center" mb={21}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Heart widget
        </Text>
        <Image src={OuraIcon} />
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignItems="center"
          bg="#FFA654"
          padding="0px 25px 0px 25px"
          borderTopRightRadius={8}
          borderTopLeftRadius={8}
        >
          <>
            <select
              onChange={handleChange}
              style={{
                background: "#FFF500",
                border: 0,
                borderRadius: 10,
                padding: 3,
              }}
            >
              <option value={6}>Week</option>
              <option value={29}>Month</option>
            </select>
          </>
          <Flex>
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
        </Flex>
        <Box
          height={300}
          style={{
            background: "rgba(251, 242, 242, 0.3)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            paddingTop: 40,
          }}
        >
          <Flex
            width="100%"
            justifyContent="center"
            style={{ paddingRight: 55, paddingLeft: 55 }}
          >
            <Text as="b" fontSize={48} color="#FFF500">
              {processedData.score_resting_hr}
            </Text>
          </Flex>
          <ResponsiveContainer width="100%" height="50%">
            <LineChart
              width={500}
              height={100}
              data={processedAsyncData}
              margin={{
                top: 10,
                right: 15,
                left: -15,
                bottom: 0,
              }}
              style={{ cursor: "pointer" }}
            >
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "transparent",
                  padding: 5,
                  border: 0,
                }}
                itemStyle={{ fontSize: 10 }}
              />
              <Line
                type="monotoneX"
                dataKey="score_resting_hr"
                stroke="#FFF500"
                strokeWidth={3}
                activeDot={{ r: 3 }}
              />

              <XAxis
                dataKey="summary_date"
                tickLine={false}
                fontSize={8}
                stroke="white"
              />
              <YAxis
                // dataKey="score_resting_hr"
                axisLine={false}
                tickLine={false}
                label={{
                  value: "RESTING HR",
                  angle: -90,
                  stroke: "white",
                  fontSize: 10,
                }}
                stroke="white"
                fontSize={10}
              />
            </LineChart>
          </ResponsiveContainer>
          <Flex width="100%" justifyContent="center">
            <Box
              bg="#FFA654"
              p={4}
              borderRadius={4}
              width={50}
              textAlign="center"
            >
              RHR
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

OuraHeart.displayName = "OuraHeart";

export default OuraHeart;
