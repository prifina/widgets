import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { usePrifina, Op } from "@prifina/hooks-v2";
import Oura from "@prifina/oura";

import { toIsoDate, DataProvider } from "./functions"
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

import data from "./data.json"

const Container = styled.div`
  width: ${ props => props.size && props.size.split("x")[0]};
  height: ${ props => props.size &&  props.size.split("x")[1]};
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
  const [availableOptions, setAvailableOptions] = useState([]);
  const [widgetsInfo, setWidgetsInfo] = useState([]);
  const [size, setSize] = useState("616x616");
  const prifinaInit = useRef();
  const fullDate = new Date();

  // Small: "300x300"
  // MediusWide: "616x300"
  // MediumTall: "300x616"
  // Large: "616x616"

  const [widgetsData, setWidgetsData] = useState({
    week: {
      dates: [],
      processedData: [],
      offset: 0
    },
    month: {
      dates: [],
      processedData: [],
      offset: 0
    },
    year: {
      dates: [],
      processedData: [],
      offset: 0
    }
  });

  const chnageAvalibleOptions = (plateId, optionToRemove, optionToAdd) => {
    let options = availableOptions.filter(e => e !== optionToRemove)
    options.push(optionToAdd)
    setAvailableOptions(options)

    let info = widgetsInfo
    info[plateId-1].option = optionToRemove
    setWidgetsInfo(info)
  }

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);

    if (
      payload.hasOwnProperty("settings") &&
      typeof data.settings === "object" &&
      payload.settings.hasOwnProperty("size")
    ) {
      setSize(payload.settings.size);
    }

    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/querySleepSummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processAsyncData(payload.data.content);
      }
      console.log("PAYLOAD DATA", payload);
    }
  };

  const processAsyncData = (data,period) => {
    console.log("ORIGINAL PROCESS ASYNC DATA", data);

    let filterData = data;

    //const keys = filterData[0].split(",");
    const keys = "summary_date,awake,light,rem,deep,total".split(",");
    let newArray = [];
    if (stage === "dev") {
      const header = filterData[0].split(",");
      const rowData = filterData[1].split(",");
      const newData = [];
      keys.forEach(m => {
        const k = header.indexOf(m);
        if (k > -1) {
          newData.push(rowData[k]);
        }

      })
      const newDataObj = {
        "summary_date": newData[0], "awake": parseInt(newData[1]),
        "light": parseInt(newData[2]), "rem": parseInt(newData[3]), "deep": parseInt(newData[4]), "total": parseInt(newData[5]),
      };

      let newDate = new Date(newDataObj.summary_date);

      newArray.push(newDataObj);
      for (let i = 0; i < period; i++) {
        const yesterdayTS = newDate.setDate(newDate.getDate() - 1);
        let newDayData = Object.assign({}, newDataObj);
        newDayData.summary_date = new Date(yesterdayTS).toISOString().split("T")[0];
        newArray.push(newDayData);
        newDate = new Date(yesterdayTS);
      }
      ;
      console.log("new data", newArray);

    } else {
      filterData.shift();
      filterData.forEach((r) => {
        const row = r.split(",");
        newArray.push({
          [keys[0]]: row[0],
          [keys[1]]: Number(row[1]),
          [keys[2]]: Number(row[2]),
          [keys[3]]: Number(row[3]),
          [keys[4]]: Number(row[4]),
          [keys[5]]: Number(row[5]),
        });
      });
    }

    console.log("process result", newArray);
    return(newArray)
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

  //Update Size
  useEffect(() => {
    if(size === "616x616"){
      setWidgetsInfo([{
        id: 1,
        option: "Week"
      },
      {
        id: 2,
        option: "Year"
      },
      {
        id: 3,
        option: "Month"
      }])
      setAvailableOptions([])
    }else if(size === "300x300"){
      setWidgetsInfo([{
        id: 1,
        option: "Week"
      }])
      setAvailableOptions(["Year","Month"])
    }else{
      setWidgetsInfo([{
        id: 1,
        option: "Week"
      },
      {
        id: 2,
        option: "Year"
      }])
      setAvailableOptions(["Month"])
    }
  }, [size]);

  //Get weekly data
  useEffect(() => {
    async function getWeekData() {
      const startOfWeek = toIsoDate(new Date(fullDate.setDate(fullDate.getDate() - (fullDate.getDay() + 6) % 7 - 7 * widgetsData.week.offset ) ));
      const endOfWeek = toIsoDate(new Date(fullDate.setDate(fullDate.getDate() - (fullDate.getDay() + 6) % 7 - 7 * widgetsData.week.offset + 6 ) ));

      setWidgetsData(prev => ({
        ...prev,
        week: {
          ...prev.week,
          dates: [startOfWeek, endOfWeek]
        }
      }))

      const filter = {
        ["s3::date"]: {
          [Op.between]: [startOfWeek, endOfWeek],
        },
      };
      const result = await API[APP_ID].Oura.querySleepDataAsync({
        filter: filter,
        fields: "summary_date,awake,light,deep,rem,total",
      });

      if (stage === "dev") {
        setWidgetsData(prev => ({
          ...prev,
          week: {
            ...prev.week,
            processedData: [...processAsyncData(result.data.getDataObject.content, 6)]
          },
        }))
      }
    }
    getWeekData();
  }, [widgetsData.week.offset]);

  //Get monthly data
  useEffect(() => {
    async function getMonthData() {
      const startOfMonth = toIsoDate(new Date(fullDate.getFullYear(), fullDate.getMonth() - widgetsData.month.offset, 1));
      const endOfMonth = toIsoDate(new Date(fullDate.getFullYear(), fullDate.getMonth() + (widgetsData.month.offset === 0 ? 1 : - widgetsData.month.offset -1), 0));

      setWidgetsData(prev => ({
        ...prev,
        month: {
          ...prev.month,
          dates: [startOfMonth, endOfMonth]
        }
      }))

      const filter = {
        ["s3::date"]: {
          [Op.between]: [startOfMonth, endOfMonth],
        },
      };
      const result = await API[APP_ID].Oura.querySleepDataAsync({
        filter: filter,
        fields: "summary_date,awake,light,deep,rem,total",
      });

      if (stage === "dev") {
        setWidgetsData(prev => ({
          ...prev,
          month: {
            ...prev.month,
            processedData: [...processAsyncData(result.data.getDataObject.content, 29)]
          },
        }))
      }
    }
    getMonthData();
  }, [widgetsData.month.offset]);

  //Get yearly data
  useEffect(() => {
    async function getWeekData() {
      const previousYear  = fullDate.getFullYear() - widgetsData.year.offset;
      const startOfYear = toIsoDate(new Date(previousYear, 0, 1));
      const endOfYear = toIsoDate(new Date(previousYear, 11, 31));

      setWidgetsData(prev => ({
        ...prev,
        year: {
          ...prev.year,
          dates: [startOfYear, endOfYear]
        }
      }))

      const filter = {
        ["s3::date"]: {
          [Op.between]: [startOfYear, endOfYear],
        },
      };
      const result = await API[APP_ID].Oura.querySleepDataAsync({
        filter: filter,
        fields: "summary_date,awake,light,deep,rem,total",
      });

      if (stage === "dev") {
        setWidgetsData(prev => ({
          ...prev,
          year: {
            ...prev.year,
            processedData: [...processAsyncData(result.data.getDataObject.content, 364)]
          },
        }))
      }
    }
    getWeekData();
  }, [widgetsData.year.offset]);

  return (
    <Container size={size}>
      <Flex alignItems="center" justify="space-between" mb={9}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Sleep widget
        </Text>
        <Image src={OuraIcon} style={{marginRight:"30px"}}/>
      </Flex>
      <Flex gap={8} wrap="wrap" style={{flex: 1}}> 
        <DataProvider
          widgetsData={widgetsData}
          setWidgetsData={setWidgetsData}
          availableOptions={availableOptions}
          chnageAvalibleOptions={chnageAvalibleOptions}
        >
          {
            widgetsInfo.map(item => (
              <Plate id={item.id} selectedOption={item.option}/>
            ))
          }
        </DataProvider>
      </Flex>

    </Container>
  );
};

App.displayName = "OuraSleep";

export default App;
