import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { usePrifina, Op } from "@prifina/hooks-v2";
import Oura from "@prifina/oura";

import { toIsoDate, processData, secondsToTime, widgetDimensions } from "./functions"
import { APP_ID } from "./environment";

import OuraIcon from "./assets/oura.svg";

import Plate from "./Plate"

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


const Container = styled.div`
  width: ${ props => props.size ? props.size.split("x")[0] : "300px"};
  height: ${ props => props.size ?  props.size.split("x")[1] : "300px"};
  padding: 11px 8px 8px 8px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
`;

// unique appID for the widget....
//const appID = "6dyqsLq4MEJC2sT9WNBGUs";

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();
  const [processedData, setProcessedData] = useState({});
  const [size, setSize] = useState("Large");
  const prifinaInit = useRef();

  const fullDate = new Date();
  
  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);

    if (
      payload.hasOwnProperty("settings") &&
      typeof data.settings === "object" &&
      payload.settings.hasOwnProperty("size")
    ) {
      // setSize(payload.settings.size);
    }

    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      // if (
      //   payload.data.dataconnector === "Oura/querySleepSummariesAsync" &&
      //   payload.data.content.length > 1
      // ) {
      // setProcessedData(processData(payload.data.content));
      // }
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

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();
  useEffect(() => {
    async function getData() {
      const dateStr = toIsoDate(new Date(fullDate.setDate(fullDate.getDate() - 365)));

      setDate(dateStr);

      const filter = {
        ["s3::date"]: {
          [Op.gte]: dateStr,
        },
      };

      const result = await API[APP_ID].Oura.querySleepData({
        filter: filter,
        fields: "summary_date,awake,light,deep,rem",
      });

      setProcessedData(processData(result.data.getDataObject.content));
    }
    getData();
  }, [day]);

  return (
    <Container size={widgetDimensions[size]}>
      <Flex alignItems="center" justify="space-between" mb={9}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Sleep widget
        </Text>
        <Image src={OuraIcon} style={{marginRight:"30px"}}/>
      </Flex>

      <Flex gap={8} wrap="wrap" style={{flex: 1}}> 
        { size === "Small" ? 
          <Plate date={date} day={day} processedData={processedData} setDay={setDay} />
          :
          (size === "Large" ?
          <>
            <Plate date={date} day={day} processedData={processedData} setDay={setDay} />
            <Plate date={date} day={day} processedData={processedData} setDay={setDay}/>
            <Plate date={date} day={day} processedData={processedData} setDay={setDay}/>
          </>
          : 
          <>
            <Plate date={date} day={day} processedData={processedData} setDay={setDay}/>
            <Plate date={date} day={day} processedData={processedData} setDay={setDay}/>
          </>
          )
        }
      </Flex>

    </Container>
  );
};

App.displayName = "OuraSleep";

export default App;
