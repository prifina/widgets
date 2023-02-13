import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Oura from "@prifina/oura";

import { Flex, Text, Box, Image } from "@chakra-ui/react";

import OuraIcon from "./assets/oura.svg";
import Heart from "./assets/heart.svg";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Container = styled.div`
  width: ${ props => props.size && props.size.split("x")[0]};
  height: ${ props => props.size &&  props.size.split("x")[1]};
  border-radius: 10px;
  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
  padding: 11px 8px 0px 8px;

  display: flex;
  flex-direction: column;
`;

// unique appID for the widget....
// const appID = "4TunCi3rwTFsN814u2BDqa";

const asyncFalseData = [
  "summary_date,score_resting_hr",  // hr_lowest instead
  "2022-09-04,86",
  "2022-09-05,98",
  "2022-09-06,65",
  "2022-09-07,78",
  "2022-09-08,82",
  "2022-09-09,75",
  "2022-09-07,88",
];

const App = (props) => {
  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const [numberOfPlate, setNumberOfPlate] = useState(1)
  const [size, setSize] = useState("300x300");

  // Small: "300x300"
  // MediusWide: "600x300"
  // MediumTall: "300x600"
  // Large: "600x600"

  const [processedAsyncData, setProcessedAsyncData] = useState([]);
  const [period, setPeriod] = useState(6);
  const [avg, setAvg] = useState();

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
  const processAsyncData = (data) => {
    console.log("ORIGINAL PROCESS ASYNC DATA", data);

    let filterData = data;

    //const keys = filterData[0].split(",");
    const keys = "summary_date,hr_lowest".split(",");
    let newArray = [];
    //console.log("keys", keys);
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
      //console.log(newData)

      const newDataObj = { "summary_date": newData[0], "hr_lowest": parseInt(newData[1]), };

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
        });
      });
    }
    setProcessedAsyncData(newArray);

    console.log("process result", newArray);

    let avg = newArray.reduce((acc, val) => {
      return acc + val.hr_lowest / newArray.length;
    }, 0);

    setAvg(Math.ceil(avg));
  };

  console.log("processed async data", processedAsyncData);

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/querySleepDataAsync" &&
        payload.data.content.length > 1
      ) {
        processAsyncData(payload.data.content);
      }
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
  const toIsoDate = (date) => {
    return [date.getFullYear(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-")
  }
  useEffect(() => {
    async function getData() {

      let d = new Date();

      const dd = d.setDate(d.getDate() - period);

      //const asyncDateStr = new Date(ddd).toISOString().split("T")[0];

      const asyncDateStr = toIsoDate(new Date(dd));


      const asyncFilter = {
        ["s3::date"]: {
          [Op.gte]: asyncDateStr,
        },
      };

      console.log("ASYNC FILTER", asyncFilter);

      const asyncResult = await API[APP_ID].Oura.querySleepDataAsync({
        filter: asyncFilter,
        fields: "summary_date,hr_lowest",
      });
      if (stage === "dev") {

        console.log("async result", asyncResult);
        processAsyncData(asyncResult.data.getDataObject.content)
      }
    }
    getData();
  }, [period]);

  const handleChange = (e) => {
    setPeriod(e.target.value);
  };

  console.log("period", period);

  return (
    <Container size={size}>
      <Flex alignItems="center" justify="space-between" mb={9}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9}>
          Heart widget
        </Text>
        <Image src={OuraIcon} style={{marginRight:"30px"}}/>
      </Flex>
      <Flex gap={8} wrap="wrap" style={{ flex: 1, marginBottom: 10 }}>
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
              bg="#FFA654"
              padding="0px 25px 0px 25px"
              borderTopRightRadius={8}
              borderTopLeftRadius={8}
            >
              <>
                <select
                  onChange={handleChange}
                  style={{
                    background: "#FFF500",
                    border: 0,
                    borderRadius: 10,
                    padding: 3,
                    outline: "none",
                  }}
                >
                  <option value={6}>Last week</option>
                  <option value={14}>Last 15 days</option>
                  <option value={28}>Last Month</option>
                  <option value={89}>Last 3 Months</option>
                </select>
              </>
              <Box bg="#FFF500" borderRadius={4} width={50} textAlign="center">
                RHR
              </Box>
            </Flex>
            <Box
              style={{
                background: "rgba(251, 242, 242, 0.3)",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                paddingTop: 10,
                backgroundImage: `url(${Heart})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                height: 'calc(100% - 32px)',
              }}
            >
              <Flex
                width="100%"
                justifyContent="center"
                style={{ paddingRight: 55, paddingLeft: 55 }}
              >
                <Box
                  width={71}
                  height={75}
                  bg="rgba(118, 110, 86, 0.44)"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 8,
                    position: "relative",
                  }}
                >
                  <Text as="b" fontSize={48} color="#FFF500" lineHeight={1.1}>
                    {isNaN(avg) ? "-" : avg}
                  </Text>
                  <Text
                    fontSize={12}
                    color="white"
                    position="absolute"
                    bottom="5px"
                  >
                    AVG RHR
                  </Text>
                </Box>
              </Flex>
              <ResponsiveContainer width="100%" height="62%">
                  <LineChart
                    data={processedAsyncData}
                    margin={{
                      top: 10,
                      right: 25,
                      left: -15,
                      bottom: 0,
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      contentStyle={{
                        background: "#FFA654",
                        padding: 5,
                        border: 0,
                        borderRadius: 8,
                      }}
                      itemStyle={{ fontSize: 12 }}
                    />
                    <Line
                      name="Resting HR"
                      type="monotoneX"
                      dataKey="hr_lowest"
                      stroke="#FFF500"
                      strokeWidth={2}
                      activeDot={{ r: 2 }}
                      dot={{
                        stroke: "yellow",
                        strokeWidth: 1,
                        r: 2,
                      }}
                    />
      
                    <XAxis
                      dataKey="summary_date"
                      tickLine={false}
                      fontSize={8}
                      stroke="white"
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      label={{
                        value: "RESTING HR",
                        angle: -90,
                        stroke: "white",
                        fontSize: 10,
                      }}
                      stroke="white"
                      fontSize={10}
                    />
                  </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

App.displayName = "OuraHeart";

export default App;
