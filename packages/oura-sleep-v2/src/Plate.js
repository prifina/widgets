import React, {useState} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { secondsToTime } from "./functions"

import {
  Flex,
  Spacer,
  Text,
  Box,
  Select,
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


const Plate = ({ id, selectedOption, availableOptions, chnageAvalibleOptions, setWidgetsData, widgetsData }) => {
  const handleChange = (e) => {
    chnageAvalibleOptions(id, e.target.value, selectedOption)
  };

  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  let chartData = {}
  let showenDate = []

  switch(selectedOption) {
    case "Week":
      if (widgetsData.week.dates.length > 0){
        chartData = widgetsData.week.processedData
        const startWeek = new Date(widgetsData.week.dates[0]);
        const endWeek = new Date(widgetsData.week.dates[1]);
        showenDate = `${months[startWeek.getMonth()].slice(0,3)} ${startWeek.getDate()} - ${months[endWeek.getMonth()].slice(0,3)} ${endWeek.getDate()} (${startWeek.getFullYear()})`;
      }
      break;
    case "Month":
      if (widgetsData.month.dates.length > 0){
        chartData = widgetsData.month.processedData
        const startMonth = new Date(widgetsData.month.dates[0]);
        const endMonth = new Date(widgetsData.month.dates[1]);

        showenDate = `${months[startMonth.getMonth()]} ${startMonth.getFullYear()}`; 
      }
      break;
    case "Year":
      if (widgetsData.year.dates.length > 0){
        let dataByMonth = {};

        widgetsData.year.processedData.forEach(function(day) {
          var month = day.summary_date.split("-")[1];
          if (month in dataByMonth) {
              dataByMonth[month].awake += day.awake;
              dataByMonth[month].deep += day.deep;
              dataByMonth[month].light += day.light;
              dataByMonth[month].rem += day.rem;
              dataByMonth[month].total += day.total;
              dataByMonth[month].days++;
          } else {
              dataByMonth[month] = {
                  awake: day.awake,
                  deep: day.deep,
                  light: day.light,
                  rem: day.rem,
                  total: day.total,
                  days: 1
              };
          }
        });

        for (let month in dataByMonth) {
          dataByMonth[month].awake = dataByMonth[month].awake / dataByMonth[month].days;
          dataByMonth[month].deep = dataByMonth[month].deep / dataByMonth[month].days;
          dataByMonth[month].light = dataByMonth[month].light / dataByMonth[month].days;
          dataByMonth[month].rem = dataByMonth[month].rem / dataByMonth[month].days;
          dataByMonth[month].total = dataByMonth[month].total / dataByMonth[month].days;
          dataByMonth[month].month = months[month-1];
        }
        var sortedData = Object.keys(dataByMonth).sort().map(function(month) {
          return dataByMonth[month];
        });

        chartData = sortedData
        const startMonth = new Date(widgetsData.year.dates[0])
        showenDate = `${startMonth.getFullYear()}`
      }
      break;
  }

  return (
    <Box
      style={{
        background: "rgba(251, 242, 242, 0.3)",
        borderRadius: 10,
        minWidth: 284,
        maxHeight: 280,
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
          <p
            style={{
              background: "#FFE9D5",
              border: "1px solid #FFA654",
              color: "#6D3D11",
              fontWeight: 700,
              borderRadius: "5px",
              padding: "0px 8px"
            }}
          >{selectedOption}</p>
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
            onClick={() => setWidgetsData(prev => ({
              ...prev,
              [selectedOption.toLowerCase()]: {
                ...prev[selectedOption.toLowerCase()],
                offset: prev[selectedOption.toLowerCase()].offset + 1
              }
            }))}
          />
          <Text color="#fff" fontSize='15px' style={{marginTop:"1px"}}>{showenDate}</Text>
          <IconButton
            disabled={widgetsData[selectedOption.toLowerCase()].offset === 0 ? true : false}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              fontSize: 19,
              color: `${widgetsData[selectedOption.toLowerCase()].offset === 0 ? "#4c4c4c" : "#fff"}`,
            }}
            aria-label="Search database"
            icon={<ChevronRightIcon />}
            onClick={() => setWidgetsData(prev => ({
              ...prev,
              [selectedOption.toLowerCase()]: {
                ...prev[selectedOption.toLowerCase()],
                offset: prev[selectedOption.toLowerCase()].offset - 1
              }
            }))}
          />
        </Flex>
      </Flex>

      <Box
        style={{height: 'calc(100% - 32px)'}}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={200}
            height={202}
            data={chartData}
            margin={{
              top: 20,
              right: 15,
              left: -10,
              bottom: 23,
            }}
            style={{ cursor: "pointer" }}
          >
            <CartesianGrid
              strokeDasharray="none"
              vertical={false}
              stroke="rgba(0, 0, 0, 0.12)"
            />

              {selectedOption === 'Week' &&<>
              <XAxis
                xAxisId="0"
                tickLine={false}
                dataKey="summary_date"
                tickFormatter={(tick) => tick && new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date(tick))}
                tick={{
                  fontSize: 13,
                  fill: "#fff",
                }}
                label={{ value: 'DAYS', position: 'top', dy: 45, fill:'white' }}
              />
              </>}
              {selectedOption === 'Month' &&
              <XAxis
                interval={chartData.length - 2}
                tickLine={false}
                dataKey="summary_date"
                tickFormatter={(tick) => tick && `${months[new Date(tick).getMonth()].slice(0,3)} ${new Date(tick).getDate()}` }
                tick={{
                  fontSize: 13,
                  fill: "#fff",
                }}
                axisLine={{
                  x: "center",
                  y: "center",
                  dx: -10,
                  dy: 10
                }}
                label={{ value: 'DAYS', position: 'top', dy: 45, fill:'white' }}
              />}
              {selectedOption === 'Year' &&
              <XAxis
                tickLine={false}
                dataKey="month"
                tickFormatter={(tick) => tick.slice(0,1)}
                tick={{
                  fontSize: 13,
                  fill: "#fff",
                }}
                                label={{ value: 'MONTHS', position: 'top', dy: 45, fill:'white' }}
              />}
            <YAxis
                axisLine={false}
                tickLine={false}
                type="number"
                tickFormatter={(total) => {
                  return Math.floor(total / 3600);
                }}
                domain={[0, "dataMax + 3600"]}
                stroke="white"
                dataKey="total"
              />
              <text x={-85} y={70} transform={`translate(-50, 50) rotate(-90)`} fill="#fff" fontSize={10}>HOURS ASLEEP</text>

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

            <Bar barSize={27} stackId="a" name="Awake" dataKey="awake" fill="#f3f3c2" />
            <Bar barSize={27} stackId="a" name="Light" dataKey="light" fill="#FFA654" />
            <Bar barSize={27} stackId="a" name="Deep" dataKey="deep" fill="#B96314" />
            <Bar barSize={27} stackId="a" name="REM" dataKey="rem" fill="#6D3D10" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Plate;
