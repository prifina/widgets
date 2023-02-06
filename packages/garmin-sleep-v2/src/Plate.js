import React, {useEffect, useState} from "react";
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

        widgetsData.year.processedData.forEach((day) => {
          var month = day.calendardate.split("-")[1];
          if (month in dataByMonth) {
              dataByMonth[month].deepsleepdurationinseconds += day.deepsleepdurationinseconds;
              dataByMonth[month].durationinseconds += day.durationinseconds;
              dataByMonth[month].lightsleepdurationinseconds += day.lightsleepdurationinseconds;
              dataByMonth[month].awakedurationinseconds += day.awakedurationinseconds;
              dataByMonth[month].remsleepinseconds += day.remsleepinseconds;
              dataByMonth[month].days++;
          } else {
              dataByMonth[month] = {
                  awakedurationinseconds: day.awakedurationinseconds,
                  deepsleepdurationinseconds: day.deepsleepdurationinseconds,
                  lightsleepdurationinseconds: day.lightsleepdurationinseconds,
                  remsleepinseconds: day.remsleepinseconds,
                  durationinseconds: day.durationinseconds,
                  days: 1
              };
          }
        });

        for (let month in dataByMonth) {
          dataByMonth[month].awakedurationinseconds = dataByMonth[month].awakedurationinseconds / dataByMonth[month].days;
          dataByMonth[month].deepsleepdurationinseconds = dataByMonth[month].deepsleepdurationinseconds / dataByMonth[month].days;
          dataByMonth[month].lightsleepdurationinseconds = dataByMonth[month].lightsleepdurationinseconds / dataByMonth[month].days;
          dataByMonth[month].remsleepinseconds = dataByMonth[month].remsleepinseconds / dataByMonth[month].days;
          dataByMonth[month].durationinseconds = dataByMonth[month].durationinseconds / dataByMonth[month].days;
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
        maxHeight: 270,
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
              background: "#5AEDD2",
              border: "1px solid #236B5F",
              color: "#236B5F",
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
              background: "#236B5F",
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
                dataKey="calendardate"
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
                dataKey="calendardate"
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
                dataKey="durationinseconds"
              />
              <text x={-85} y={70} transform={`translate(-50, 50) rotate(-90)`} fill="#fff" fontSize={11} style={{fontFamily:"sans-serif"}}>HOURS ASLEEP</text>

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

            <Bar barSize={27} stackId="a" name="awake" dataKey="awakedurationinseconds" fill="#C8FFF5" />
            <Bar barSize={27} stackId="a" name="light" dataKey="lightsleepdurationinseconds" fill="#54B4A3" />
            <Bar barSize={27} stackId="a" name="deep" dataKey="deepsleepdurationinseconds" fill="#269582" />
            <Bar barSize={27} stackId="a" name="ren" dataKey="remsleepinseconds" fill="#236B5F" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Plate;
