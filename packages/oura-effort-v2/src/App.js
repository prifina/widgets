import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Oura from "@prifina/oura";

import { Flex, Text, Box, Image } from "@chakra-ui/react";

import OuraIcon from "./assets/oura.svg";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
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
//const appID = "vKoEqwhCfHXsEZ5TknbSso";

const asyncFalseData = [
  "summary_date,inactive,low,medium,high,score",
  "2022-09-04,229,224,49,0,87",
  "2022-09-05,329,224,49,0,87",
  "2022-09-06,579,224,49,0,87",
  "2022-09-07,429,224,49,0,87",
  "2022-09-08,429,224,49,0,87",
  "2022-09-09,429,224,49,0,87",
  "2022-09-10,429,224,49,0,87",
];

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [processedAsyncData, setProcessedAsyncData] = useState([]);
  const [period, setPeriod] = useState(6);
  const [avg, setAvg] = useState();

  const prifinaInit = useRef();

  const processAsyncData = (data) => {
    console.log("ORIGINAL PROCESS ASYNC DATA", data);

    let filterData = data;

    //const keys = filterData[0].split("\t");
    const keys = "summary_date,inactive,low,medium,high,score".split(",");
    let newArray = [];
    //console.log("keys", keys);
    if (stage === "dev") {
      const header = filterData[0].split("\t");
      const rowData = filterData[1].split("\t");
      const newData = [];
      keys.forEach(m => {
        const k = header.indexOf(m);
        if (k > -1) {
          newData.push(rowData[k]);
        }

      })
      //console.log(newData)

      const newDataObj = {
        "summary_date": newData[0], "inactive": parseInt(newData[1]),
        "low": parseInt(newData[2]), "medium": parseInt(newData[3]), "high": parseInt(newData[4]), "score": parseInt(newData[5]),
      };

      let newDate = new Date(newDataObj.summary_date);

      newArray.push(newDataObj);
      for (let i = 0; i < period; i++) {
        const yesterdayTS = newDate.setDate(newDate.getDate() - 1);
        let newDayData = Object.assign({}, newDataObj);
        newDayData.summary_date = new Date(yesterdayTS).toISOString().split("T")[0];
        newArray.push(newDayData);
        newDate = new Date(yesterdayTS);
      }
      ;
      console.log("new data", newArray);

    } else {
      filterData.shift();
      filterData.forEach((r) => {
        const row = r.split("\t");
        newArray.push({
          [keys[0]]: row[0],
          [keys[1]]: Number(row[1]),
          [keys[2]]: Number(row[2]),
          [keys[3]]: Number(row[3]),
          [keys[4]]: Number(row[4]),
          [keys[5]]: Number(row[5]),
        });
      });
    }

    setProcessedAsyncData(newArray);

    console.log("process result", newArray);

    let avg = newArray.reduce((acc, val) => {
      return acc + val.score / newArray.length;
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
        payload.data.dataconnector === "Oura/queryActivitySummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processAsyncData(payload.data.content);
      }
      console.log("PAYLOAD DATA", payload);
    }
  };

  useEffect(() => {
    async function init() {
      onUpdate(APP_ID, dataUpdate);

      registerDataConnector(APP_ID, [Oura]);
      prifinaInit.current = true;
    }
    if (!prifinaInit.current) {
      init();
    }
  }, []);
  useEffect(() => {
    async function getData() {

      let d = new Date();

      const ddd = d.setDate(d.getDate() - period);

      const asyncDateStr = new Date(ddd).toISOString().split("T")[0];

      const asyncFilter = {
        ["s3::date"]: {
          [Op.gte]: asyncDateStr,
        },
      };

      console.log("ASYNC FILTER", asyncFilter);


      const asyncResult = await API[APP_ID].Oura.queryActivitySummariesAsync({
        filter: asyncFilter,
        fields: "summary_date,inactive,low,medium,high,score",
      });
      if (stage === "dev") {
        console.log("async result", asyncResult);
        processAsyncData(asyncResult.data.getDataObject.content);
      }
    }
    getData();
  }, [period]);

  const handleChange = (e) => {
    setPeriod(e.target.value);
  };

  console.log("period", period);

  function minutesToTime(min) {
    var hours = Math.floor(min / 60);

    var divisor_for_minutes = min % 60;
    var minutes = Math.floor(divisor_for_minutes);

    var obj = hours + "h " + minutes + "m";
    return obj;
  }

  return (
    <Container>
      <Flex alignItems="center" mb={21}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Effort widget
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
                outline: "none",
              }}
            >
              <option value={6}>Last week</option>
              <option value={14}>Last 15 days</option>
              <option value={28}>Last Month</option>
              <option value={89}>Last 3 Months</option>
            </select>
          </>
        </Flex>
        <Box
          height={200}
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
              width={77}
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
                {isNaN(avg) ? "-" : avg}
              </Text>
              <Text
                fontSize={12}
                color="white"
                position="absolute"
                bottom="5px"
              >
                AVG SCORE
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
                  background: "rgba(0, 0, 0, 0.5)",
                  padding: 5,
                  border: 0,
                  borderRadius: 8,
                }}
                itemStyle={{ fontSize: 12 }}
                formatter={(item) => {
                  return minutesToTime(item);
                }}
              />
              <Line
                name="Inactive"
                type="monotoneX"
                dataKey="inactive"
                stroke="#FFE9D5"
                strokeWidth={2}
                activeDot={{ r: 2 }}
                dot={{
                  stroke: "#FFE9D5",
                  strokeWidth: 1,
                  r: 2,
                }}
              />
              <Line
                name="Low Activity"
                type="monotoneX"
                dataKey="low"
                stroke="#F8F043"
                strokeWidth={2}
                activeDot={{ r: 2 }}
                dot={{
                  stroke: "#F8F043",
                  strokeWidth: 1,
                  r: 2,
                }}
              />
              <Line
                name="Medium Activity"
                type="monotoneX"
                dataKey="medium"
                stroke="#FFA654"
                strokeWidth={2}
                activeDot={{ r: 2 }}
                dot={{
                  stroke: "#FFA654",
                  strokeWidth: 1,
                  r: 2,
                }}
              />
              <Line
                name="High Activity"
                type="monotoneX"
                dataKey="high"
                stroke="#FF5977"
                strokeWidth={2}
                activeDot={{ r: 2 }}
                dot={{
                  stroke: "#FF5977",
                  strokeWidth: 1,
                  r: 2,
                }}
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
                  value: "HOURS",
                  angle: -90,
                  stroke: "white",
                  fontSize: 8,
                }}
                stroke="white"
                fontSize={10}
                tickFormatter={(total) => {
                  return Math.floor(total / 60);
                }}
                domain={[0, "dataMax +60"]}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

App.displayName = "OuraEffort";

export default App;
