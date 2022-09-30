import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Garmin from "@prifina/garmin";

import { Flex, Text, Box, Image, IconButton } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import GarminIcon from "./assets/garmin.svg";
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
  background: linear-gradient(180deg, #2e302d 0%, #69d3c7 149.83%);

  padding: 11px 8px 0px 8px;
`;

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [processedData, setProcessedData] = useState({});

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
      //   payload.data.dataconnector === "Garmin/queryActivitySummariesAsync" &&
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

      registerDataConnector(APP_ID, [Garmin]);

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

      const result = await API[APP_ID].Garmin.queryDailiesData({
        filter: filter,
        fields: "restingHeartRate",
      });

      console.log("RESULT", result);

      processData(result.data.getDataObject.content);
    }
    init();
  }, [day]);

  console.log("day", day);

  return (
    <Container>
      <Flex alignItems="center" mb={8}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={95}>
          Heart widget
        </Text>
        <Image src={GarminIcon} />
      </Flex>
      <Box>
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
            disabled={day === 1 ? true : false}
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
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="center"
            alignItems="center"
            // style={{ paddingRight: 55, paddingLeft: 55 }}
          >
            <Flex width="150px" justifyContent="space-between">
              <Box
                width={70}
                height={70}
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
                  fontSize={35}
                  color="#008080"
                  lineHeight={1.1}
                  position="absolute"
                  top="5px"
                >
                  {processedData === undefined
                    ? 0
                    : processedData.restingheartrateinbeatsperminute}
                </Text>
                <Text
                  fontSize={12}
                  color="#FFE9D5"
                  position="absolute"
                  bottom="5px"
                >
                  REST HR
                </Text>
              </Box>
              <Box
                width={70}
                height={70}
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
                  fontSize={35}
                  color="#23695D"
                  lineHeight={1.1}
                  position="absolute"
                  top="5px"
                >
                  {processedData === undefined
                    ? 0
                    : processedData.averageheartrateinbeatsperminute}
                </Text>
                <Text
                  fontSize={12}
                  color="#FFE9D5"
                  position="absolute"
                  bottom="5px"
                >
                  AVG HR
                </Text>
              </Box>
            </Flex>
            <Flex mt={10} width="150px" justifyContent="space-between">
              <Box
                width={70}
                height={70}
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
                  fontSize={35}
                  color="#F8F043"
                  lineHeight={1.1}
                  position="absolute"
                  top="5px"
                >
                  {processedData === undefined
                    ? 0
                    : processedData.minheartrateinbeatsperminute}
                </Text>
                <Text
                  fontSize={12}
                  color="#FFE9D5"
                  position="absolute"
                  bottom="5px"
                >
                  MIN HR
                </Text>
              </Box>
              <Box
                width={70}
                height={70}
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
                  fontSize={35}
                  color="#FF5977"
                  lineHeight={1.1}
                  position="absolute"
                  top="5px"
                >
                  {processedData === undefined
                    ? 0
                    : processedData.maxheartrateinbeatsperminute}
                </Text>
                <Text
                  fontSize={12}
                  color="#FFE9D5"
                  position="absolute"
                  bottom="5px"
                >
                  MAX HR
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

App.displayName = "FitbitHeart";

export default App;
