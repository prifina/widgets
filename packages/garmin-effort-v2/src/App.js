import React, { useState, useEffect, useRef } from "react";
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
  width: ${ props => props.size && props.size.split("x")[0]};
  height: ${ props => props.size &&  props.size.split("x")[1]};
  border-radius: 10px;
  background: linear-gradient(180deg, #2e302d 0%, #69d3c7 149.83%);
  padding: 11px 8px 0px 8px;
  
  display: flex;
  flex-direction: column;
`;

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [numberOfPlate, setNumberOfPlate] = useState(1)
  const [size, setSize] = useState("300x300");

  // Small: "300x300"
  // MediusWide: "600x300"
  // MediumTall: "300x600"
  // Large: "600x600"

  const [processedData, setProcessedData] = useState({});

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
    
    if (
      payload.hasOwnProperty("settings") &&
      typeof data.settings === "object" &&
      payload.settings.hasOwnProperty("size")
    ) {
      setSize(payload.settings.size);
    }
  };

  // garmin has notification, so this can be current day 
  const [day, setDay] = useState(0);
  const [date, setDate] = useState();

  useEffect(() => {
    async function init() {
      onUpdate(APP_ID, dataUpdate);

      registerDataConnector(APP_ID, [Garmin]);
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

      const result = await API[APP_ID].Garmin.queryDailiesData({
        filter: filter,
        fields: "calendardate,durationinseconds,intensitydurationgoalinseconds,moderateintensitydurationinseconds,vigorousintensitydurationinseconds",
      });

      console.log("THE NEW BUILD result", result);

      processData(result.data.getDataObject.content);
    }
    getData();
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
    <Container size={size}>
      <Flex alignItems="center" justify="space-between" mb={9}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9}>
          Effort widget
        </Text>
        <Image src={GarminIcon} style={{marginRight:"30px"}}/>
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
                disabled={day === 0 ? true : false}
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
              style={{
                background: "rgba(251, 242, 242, 0.3)",
    
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                height: 'calc(100% - 32px)',
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
        ))}
      </Flex>
    </Container>
  );
};

App.displayName = "FitbitEffort";

export default App;
