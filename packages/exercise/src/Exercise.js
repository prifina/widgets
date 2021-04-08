import React, { useState, useEffect } from "react";

//import { Text, Flex } from "@blend-ui/core";
import Box from "@blend-ui/core/dist/esm/Box";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from "recharts";

import {Text, Flex, extendTheme, ThemeProvider, Grid, GridItem} from "@chakra-ui/react";
import WeatherMain from "../src/components/WeatherMain";
import {BiRun} from "react-icons/bi";


// -----------------------FUNCTIONS----------------------

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

//function for getting the sum of object arrays with string values
function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
        if (typeof obj[type] === "string") {
            return total + Number(obj[type]);
        }
        return total + obj[type];
    }, 0);
}

const theme = extendTheme({ config });


// ----------------Style-----------------------

const styles = {
    boxShadow: " 0px 5px 20px #F0F4F8",
};

//--------------APP FUNCTION--------------------------

function Exercise() {

    const [sum, setSum] = useState("");

    let dataNew = [
        { name: "March 20", startTime: 17 },
        { name: "March 21", startTime: 8 },
        { name: "March 22", startTime: 16 },
        { name: "March 23", startTime: 20 },
        { name: "March 24", startTime: 19 },
        { name: "March 25", startTime: 14 },
        { name: "March 26", startTime: 17 },
        { name: "March 27", startTime: 7 },
        { name: "March 28", startTime: 16 },
        { name: "March 29", startTime: 18 },

    ];

    //const dataAverage = getAverage([1,2,3]);

    const [average, setAverage] = useState('16:24');
    const [lowerBound, setLowerBound] = useState('16:00')
    const [upperBound, setUpperBound] = useState('18:00')
    const [runCount, setRunCount] = useState('5')


    //Function to caluclate the average of an array (argument = arr) for 10 items
    const getAverage = arr => {
        //Sum the values in the array
        const reducer = (total, currentValue) => total + currentValue;
        const sum = dataNew.reduce(reducer);
        console.log(sum / 10);

        //divide the array sum by the length 10
        return sum / 10;
        //const u = 10;
        //return u;

    }

    let iconStyles = { color: "white" };

    return (
        <ThemeProvider theme={theme}>

          {/*Exercise Widget*/}
          <Flex
          paddingLeft={70}
          paddingRight={140}
          justifyContent={"space-between"}
        >


            {/*New Exercise */}
          <Box>
            <Flex marginTop={40}
                bg={"#14233d"}   //Added Background for Widget
                borderRadius = {20} //Rounded border radius 
            > 
              <Box style={styles} width={600} height={270} borderRadius={10}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                  paddingTop={20}
                  >
                  <Flex>
                    <Text
                      fontStyle="normal"
                      fontFamily= 'Slab Serifs'
                      style={{
                        textDecoration: "none",
                        fontWeight: 900,
                        color: "#db3e00",
                        fontSize: 24,
                        }}
                    >
                        Exercise
                    </Text>
                  </Flex>

                </Flex>
                <Grid
                    h="200px"
                    templateRows="repeat(10, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={2}
                    >
                    <GridItem rowStart={1} rowEnd={10} colStart={1} colEnd={3}>
                        <Grid
                            h="200px"
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(1, 1fr)"
                            gap={2}>
                                <GridItem rowSpan={1} >
                                    <Flex
                                        marginRight={10}
                                        marginTop = {40}
                                        marginLeft={15}>
                                        <Flex
                                            marginRight={16}
                                            >
                                            
                                            <BiRun size="2em" color="white" fill="white" style={iconStyles}> </BiRun>
                                            
                                             
                                        </Flex>
                                        <Flex
                                            marginLeft={2}
                                            justifyContent={"space-between"}
                                            flexDirection={"column"}>

                                              <Text
                                                style={{
                                                  textDecoration: "none",
                                                  fontWeight: 400,
                                                  color: "#FFFFFF",
                                                  fontSize: 21,
                                                  }}>
                                                Planning to run?
                                                </Text>

                                                <div style={{ 
                                                  textDecoration: "none",
                                                  fontWeight: 400,
                                                  color: "#7fffd4",
                                                  fontSize: 18.5,}}>

                                                {lowerBound} to {upperBound} 
                                              </div>
                                            </Flex>
                                    </Flex>
                                    
                                </GridItem>

                                <GridItem rowSpan={1}>
                                        <WeatherMain></WeatherMain>                           
                                </GridItem>

                        </Grid>
                  
                    </GridItem>
                    <GridItem rowStart={1} rowEnd={4} colStart={3} colEnd={6}>
                        <Flex
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            paddingLeft={0}
                            paddingRight={20}
                            paddingTop={0}
                            >
                            <Text
                                fontStyle="normal"
                                style={{
                                  textDecoration: "none",
                                  fontWeight: 400,
                                  color: "#FFFFFF",
                                  fontSize: 20,
                                  }}
                                >
                                You have run between {lowerBound} and {upperBound} {runCount} out of your last 10 runs.
                            </Text>
                        </Flex>
                    
                    </GridItem> 
                    <GridItem rowStart={4} rowEnd={11} colStart={3} colEnd={6}>

                         <ResponsiveContainer>
                            <AreaChart
                                datakey = "startTime"
                                data = {dataNew}
                                width = {250}
                                height={250}
                                margin={{
                                top: 12,
                                right: 50,
                                left: -30,
                                bottom: -10,
                                }}
                            >
                                <CartesianGrid
                                strokeDasharray="3 3"
                                horizontal={false}
                                vertical={false}
                                />
                                <XAxis dataKey="name" tick={false} axisLine={false} />
                                <YAxis tick={true} axisLine={false} stroke="#E9EDF0"/> {/*Changed color of Y-axis Tick */}
                                <Tooltip position={{ y: 95 }} fill={"red"}/>
                                <defs>
                                <linearGradient
                                    id="colorUv"
                                    x1="0"
                                    y1="0 "
                                    x2="0"
                                    y2="100%"
                                    spreadMethod="reflect"
                                >
                                    <stop offset="0" stopColor="#FFD46A" />
                                    <stop offset="1" stopColor="white" /> 
                                </linearGradient>  
                                </defs>
                                <Area
                                type ="monotone"
                                dataKey ="startTime"
                                data = {dataNew}
                                stroke="orange" 
                                fill="url(#colorUv)"
                                />
                             </AreaChart>
                        </ResponsiveContainer>
                    </GridItem>
                </Grid>                
              </Box>
            </Flex>
          </Box>
        </Flex>
   
        </ThemeProvider>

    );

}

export default Exercise;