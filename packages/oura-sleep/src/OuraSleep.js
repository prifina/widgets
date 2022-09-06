import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import Fitbit from "@prifina/fitbit";
import Oura from "@prifina/oura";
import Garmin from "@prifina/garmin";
import GoogleTimeline from "@prifina/google-timeline";

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

const OuraSleep = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  const [processedData, setProcessedData] = useState();

  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", data);

    let newData = data;

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

  const [day, setDay] = useState(0);
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
      fields: "awake,light,rem,deep",
    });

    console.log("THE NEW BUILD result", result);

    if (stage === "dev") {
      processData(result.data.getDataObject.content[1].score[1]);
    }
    processData(result.data.getDataObject.content[0]);
  }, [day]);

  console.log("day", day);

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
          borderTopRightRadius={10}
          borderTopLeftRadius={10}
        >
          <IconButton
            aria-label="Search database"
            icon={<ChevronLeftIcon />}
            onClick={async () => {
              setDay(day + 1);
            }}
          />
          <Text>{date}</Text>

          <IconButton
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
            background: "#FBF2F2",
            opacity: 0.6,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Box
            height={202}
            style={{
              // background: "#FBF2F2",
              opacity: 1,
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
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="awake" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="awake" stackId="a" fill="#FFE9D5" />
                <Bar dataKey="light" stackId="a" fill="#FFA654" />
                <Bar dataKey="deep" stackId="a" fill="#B96314" />
                <Bar dataKey="rem" stackId="a" fill="#6D3D10" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
OuraSleep.displayName = "OuraSleep";

export default OuraSleep;
