import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Fitbit from "@prifina/fitbit";

import { Flex, Text, Box, Image, IconButton } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import FitbitIcon from "./assets/fitbit.svg";
import Heart from "./assets/heart.svg";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

const Container = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    #082673 30.67%,
    #644bd0 75.51%,
    #a56adf 106.47%
  );
  padding: 11px 8px 0px 8px;
`;

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [processedData, setProcessedData] = useState({});

  const prifinaInit = useRef();
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
      // if (
      //   payload.data.dataconnector === "Fitbit/queryActivitySummariesAsync" &&
      //   payload.data.content.length > 1
      // ) {
      //   processData(payload.data.content);
      // }
      console.log("PAYLOAD DATA", payload);
    }
  };

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();

  useEffect(() => {
    async function init() {
      onUpdate(APP_ID, dataUpdate);

      registerDataConnector(APP_ID, [Fitbit]);
      prifinaInit.current = true;
    }
    if (!prifinaInit.current) {
      init();
    }
  }, []);
  useEffect(() => {
    async function getData() {

      let d = new Date();

      const dd = d.setDate(d.getDate() - day);

      const dateStr = new Date(dd).toISOString().split("T")[0];

      setDate(dateStr);

      console.log("datestr", dateStr);

      const filter = {
        ["s3::date"]: {
          [Op.eq]: dateStr,
        },
      };

      console.log("FILTER", filter);

      const result = await API[APP_ID].Fitbit.queryActivitySummary({
        filter: filter,
        fields: "restingHeartRate",
      });

      console.log("RESULT", result);

      processData(result.data.getDataObject.content);
    }
    getData();
  }, [day]);

  console.log("day", day);

  return (
    <Container>
      <Flex alignItems="center" mb={8}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Heart widget
        </Text>
        <Image src={FitbitIcon} />
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignItems="center"
          bg="#D4D7F2CC"
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
        <Flex
          height={202}
          alignItems="center"
          style={{
            background: "rgba(251, 242, 242, 0.3)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            backgroundImage: `url(${Heart})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <Flex
            width="100%"
            justifyContent="center"
            style={{ paddingRight: 55, paddingLeft: 55 }}
          >
            <Box
              width={140}
              height={140}
              bg="rgba(212, 215, 242, 0.2)"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 8,
                position: "relative",
              }}
            >
              <Text
                as="b"
                fontSize={72}
                color="#D4D7F2"
                lineHeight={1.1}
                position="absolute"
                top="5px"
              >
                {processedData === undefined
                  ? 0
                  : processedData.restingHeartRate}
              </Text>
              <Text
                fontSize={16}
                color="#DDB7F4"
                position="absolute"
                bottom="5px"
              >
                RESTING HR
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

App.displayName = "FitbitHeart";

export default App;
