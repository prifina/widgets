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

const asyncFalseData = [
  "summary_date,score_resting_hr",
  "2022-09-04,98",
  "2022-09-05,98",
  "2022-09-06,98",
  "2022-09-07,98",
  "2022-09-08,98",
  "2022-09-09,98",
  "2022-09-10,78",
  "2022-09-04,98",
  "2022-09-05,38",
  "2022-09-06,68",
  "2022-09-07,58",
  "2022-09-08,34",
  "2022-09-09,98",
  "2022-09-10,98",
  "2022-09-04,57",
  "2022-09-05,98",
  "2022-09-06,88",
  "2022-09-07,93",
  "2022-09-08,98",
  "2022-09-09,92",
  "2022-09-10,95",
];

const OuraHeart = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  const stage = "dev";

  const [processedAsyncData, setProcessedAsyncData] = useState([]);
  const [period, setPeriod] = useState(6);
  const [avg, setAvg] = useState();

  const processAsyncData = (data) => {
    console.log("ORIGINAL PROCESS ASYNC DATA", data);

    let filterData = data;

    const keys = filterData[0].split(",");

    console.log("hehe keys", keys);
    filterData.shift();

    filterData = filterData.map((dataLine) => dataLine.split(",")).flat();

    const chunkSize = 2;
    const dataChunks = [];
    for (let i = 0; i < filterData.length; i += chunkSize) {
      const chunk = filterData.slice(i, i + chunkSize);
      dataChunks.push(chunk);
    }

    const result = [];
    dataChunks.forEach((dataChunk) => {
      result.push({
        [keys[0]]: dataChunk[0],
        [keys[1]]: Number(dataChunk[1]),
      });
    });
    setProcessedAsyncData(result);

    console.log("process result", result);

    let avg = result.reduce((acc, val) => {
      return acc + val.score_resting_hr / result.length;
    }, 0);

    setAvg(Math.ceil(avg));
  };

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

  useEffect(async () => {
    onUpdate(appID, dataUpdate);
    registerHooks(appID, [Oura]);

    let d = new Date();

    const ddd = d.setDate(d.getDate() - period);

    const asyncDateStr = new Date(ddd).toISOString().split("T")[0];

    const asyncFilter = {
      ["s3::date"]: {
        [Op.gte]: asyncDateStr,
      },
    };

    console.log("ASYNC FILTER", asyncFilter);

    const asyncResult = await API[appID].Oura.queryReadinessSummariesAsync({
      filter: asyncFilter,
      fields: "summary_date,score_resting_hr",
    });

    console.log("async result", asyncResult);

    if (stage === "dev") {
      processAsyncData(asyncFalseData);
    }
  }, [period]);

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
              <option value={6}>Last week</option>
              <option value={14}>Last 15 days</option>
              <option value={28}>Last Month</option>
              <option value={89}>Last 3 Months</option>
            </select>
          </>
          <Box bg="#FFF500" borderRadius={4} width={50} textAlign="center">
            RHR
          </Box>
        </Flex>
        <Box
          height={210}
          style={{
            background: "rgba(251, 242, 242, 0.3)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            paddingTop: 10,
          }}
        >
          <Flex
            width="100%"
            justifyContent="center"
            style={{ paddingRight: 55, paddingLeft: 55 }}
          >
            <Box
              width={71}
              height={75}
              bg="rgba(118, 110, 86, 0.44)"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 8,
                position: "relative",
              }}
            >
              <Text as="b" fontSize={48} color="#FFF500" lineHeight={1.1}>
                {avg}
              </Text>
              <Text
                fontSize={12}
                color="white"
                position="absolute"
                bottom="5px"
              >
                AVG RHR
              </Text>
            </Box>
          </Flex>
          <ResponsiveContainer width="100%" height="65%">
            <LineChart
              data={processedAsyncData}
              margin={{
                top: 10,
                right: 25,
                left: -15,
                bottom: 0,
              }}
              style={{ cursor: "pointer" }}
            >
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "#FFA654",
                  padding: 5,
                  border: 0,
                  borderRadius: 8,
                }}
                itemStyle={{ fontSize: 12 }}
              />
              <Line
                type="monotoneX"
                dataKey="score_resting_hr"
                stroke="#FFF500"
                strokeWidth={3}
                activeDot={{ r: 2 }}
              />

              <XAxis
                dataKey="summary_date"
                tickLine={false}
                fontSize={8}
                stroke="white"
              />
              <YAxis
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
        </Box>
      </Box>
    </Container>
  );
};

OuraHeart.displayName = "OuraHeart";

export default OuraHeart;
