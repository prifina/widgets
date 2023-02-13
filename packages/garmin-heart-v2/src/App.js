import React, { useState, useEffect, useRef } from "react";
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
  const [size, setSize] = useState("600x600");

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
        fields: "calendardate,restingheartrateinbeatsperminute,averageheartrateinbeatsperminute,minheartrateinbeatsperminute,maxheartrateinbeatsperminute",
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
        <Text fontSize={16} color="white" fontWeight={700} ml={9}>
          Heart widget
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
                height: 'calc(100% - 32px)',
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
        ))}
      </Flex>
    </Container>
  );
};

App.displayName = "FitbitHeart";

export default App;
