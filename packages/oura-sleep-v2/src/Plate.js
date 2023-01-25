import React, {useState} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { secondsToTime } from "./functions"

import {
  Flex,
  Spacer,
  Text,
  Box,
  // Select,
  Image,
  IconButton,
  useFocusEffect,
} from "@chakra-ui/react";

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


const Plate = ({ id, date, day, setDay, selectedOption, availableOptions, chnageAvalibleOptions, monthlyProcessedData, yearlyProcessedData, weeklyProcessedData }) => {
  const handleChange = (e) => {
    console.log("change")
    chnageAvalibleOptions(id, e.target.value, selectedOption)
  };
  let processedData = {}

  switch(selectedOption) {
    case "Month":
      processedData = monthlyProcessedData
      break;
    case "Year":
      processedData = yearlyProcessedData
      break;
    case "Week":
      processedData = weeklyProcessedData
      break;
  }

  console.log(processedData)

  return (
    <Box
      style={{
        background: "rgba(251, 242, 242, 0.3)",
        borderRadius: 10,
        minWidth: 284,
        flex: "1 1",
      }}
    >
      <Flex
        h={32}
        justifyContent="space-between"
        alignItems="center"
        bg="none"
        padding="0px 15px 0px 15px"
        borderTopRightRadius={8}
        borderTopLeftRadius={8}
      >
        {
          availableOptions.length === 0 ?
          <></>
          :
          <select
            onChange={handleChange}
            value={selectedOption}
            style={{
              background: "#FFA654",
              border: 0,
              borderRadius: 5,
              padding: 3,
              outline: "none",
            }}
          >
            <option value={selectedOption} disabled >{selectedOption}</option>
          {
            availableOptions.map((item)=>(
              <option value={item}>{item}</option>
              ))
          }
        </select>
        }
        <Flex>
          <IconButton
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              fontSize: 19,
              color: "#fff",
            }}
            aria-label="Search database"
            icon={<ChevronLeftIcon />}
            onClick={async () => {
              setDay(day + 1);
            }}
          />
          <Text color="#fff">{date}</Text>
          <IconButton
            disabled={day === 1 ? true : false}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              fontSize: 19,
              color: "#fff",
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
        height={202}
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
                value: "STAGES",
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

            <Bar barSize={45} stackId="a" name="Awake" dataKey="awake" fill="#f3f3c2" />
            <Bar barSize={45} stackId="a" name="Light" dataKey="light" fill="#FFA654" />
            <Bar barSize={45} stackId="a" name="Deep" dataKey="deep" fill="#B96314" />
            <Bar barSize={45} stackId="a" name="REM" dataKey="rem" fill="#6D3D10" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Plate;
