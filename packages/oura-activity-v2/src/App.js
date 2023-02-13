import React, { useState, useEffect, useRef } from "react";
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
  width: ${ props => props.size && props.size.split("x")[0]};
  height: ${ props => props.size &&  props.size.split("x")[1]};
  border-radius: 10px;
  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
  padding: 11px 8px 0px 8px;
  
  display: flex;
  flex-direction: column;
`;

// unique appID for the widget....
// const appID = "csd88KWnuft8fHfMrKSBAD";

const App = (props) => {

  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [numberOfPlate, setNumberOfPlate] = useState(1)
  const [size, setSize] = useState("300x300");

  // Small: "300x300"
  // MediusWide: "600x300"
  // MediumTall: "300x600"
  // Large: "600x600"

  // const stage = "dev";

  const [displayData, setDisplayData] = useState();

  const [processedData, setProcessedData] = useState();
  
  useEffect(() => {
    switch(size) {
      case "600x600":
        setNumberOfPlate(3)
        break;
      case "300x300":
        setNumberOfPlate(1)
        break;
      default:
        setNumberOfPlate(2)
    }
  }, [size]);

  const prifinaInit = useRef();
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
    
    if (
      payload.hasOwnProperty("settings") &&
      typeof data.settings === "object" &&
      payload.settings.hasOwnProperty("size")
    ) {
      setSize(payload.settings.size);
    }
  };

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();

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
  const toIsoDate = (date) => {
    return [date.getFullYear(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-")
  }
  useEffect(() => {

    async function getData() {


      let d = new Date();

      const dd = d.setDate(d.getDate() - day);

      //const dateStr = new Date(dd).toISOString().split("T")[0];
      const dateStr = toIsoDate(new Date(dd));

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
        fields: "summary_date,cal_total,steps,daily_movement"
      });

      console.log("RESULT", result);


      processData(result.data.getDataObject.content);

    }
    getData();
  }, [day]);

  console.log("day", day);

  return (
    <Container size={size}>
      <Flex alignItems="center" justify="space-between" mb={9}>
        <Text fontSize={16} color="white" fontWeight={700} ml={2} mr={110}>
          Activity widget
        </Text>
        <Image src={OuraIcon} style={{marginRight:"30px"}}/>
      </Flex>
      <Flex gap={8} wrap="wrap" style={{flex: 1, marginBottom: 10}}>
        {Array.from({ length: numberOfPlate }, (_, i) => (
          <Box
          key={i}
          style={{
            background: "rgba(251, 242, 242, 0.3)",
            borderRadius: 10,
            minWidth: 284,
            maxHeight: 270,
            flex: "1 1",
          }}
        >
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
              style={{
                background: "rgba(251, 242, 242, 0.3)",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                paddingTop: 10,
                height: 'calc(100% - 32px)',
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
              <ResponsiveContainer width="100%" height="90%">
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
        ))}
      </Flex>
    </Container>
  );
};

// App.displayName = "OuraActivity";

export default App;
