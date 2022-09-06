import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op,PrifinaContext } from "@prifina/hooks-v2";
import Fitbit from "@prifina/fitbit";
import Oura from "@prifina/oura";
import Garmin from "@prifina/garmin";
import GoogleTimeline from "@prifina/google-timeline";

import 'regenerator-runtime/runtime';

const Container = styled.div`
  height: 300px;
  font-size: 14px;
  width: 300px;
  padding: 5px;
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
`;

// unique appID for the widget....
const appID = "x866fscSq5Ae7bPgUtb6ffB";

const UseFetch = (initialUrl) => {
  // create state variables
  const [s3Data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);
    // clear old search
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => {
        //console.log("RES ", response);
        return response.text();
      })
      .then((data) => {
        // error handling for nonexistent data
        //console.log("FETCH DATA ", data);
        setIsLoading(false);
        if (data.code >= 400) {
          setError(data.message);
          return;
        }

        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return { s3Data, error, isLoading, setUrl };
};


const App = (props) => {
  const { data } = props;

  console.log("WIDGET V2 ",usePrifina, typeof usePrifina,PrifinaContext);
  console.log("WIDGET V2.. ",usePrifina());

  // init hook and get provider api services...
  const {check,  onUpdate,  API, registerDataConnector } = usePrifina();

  // init provider api with your appID
  //const prifina = new Prifina({ appId: appID });
  const [functions, setFunctions] = useState([]);
  /*
  const [connectorFunction, setConnectorFunction] = useState(
    "Fitbit.queryActivities"
  );
  */
  const [connectorFunction, setConnectorFunction] = useState("");
  const [functionCondition, setFunctionCondition] = useState("eq");
  const [conditionValue, setConditionValue] = useState("");
  const [fieldsValue, setFieldsValue] = useState("");

  const { s3Data, error, isLoading, setUrl } = UseFetch(null);

  const dataUpdate = (data) => {
    // should check the data payload... :)
    console.log("WIDGET UPDATE ", new Date().getTime(), data);
    //console.log(" UPDATE ", data.hasOwnProperty("settings"));
    //console.log(" UPDATE ", typeof data.settings);
    console.log(" UPDATE ", Object.keys(data));

    if (
      data.data.hasOwnProperty("content") &&
      data.data.content.hasOwnProperty("s3Url")
    ) {
      console.log("GET ", data.data.content.s3Url);
      setUrl(data.data.content.s3Url);
    }
  };

  
  useEffect(() => {
    console.log("NEW DATA ", isLoading, s3Data);
    if (!isLoading && s3Data) {
      //athenaData = athenaResult.Body.toString().replace(/\"/g, "").split("\n");
      const athenaData = s3Data.replace(/\"/g, "").split("\n");
      console.log(athenaData);
    }
  }, [isLoading, s3Data]);

  useEffect( () => {
    console.log("CONNECTORS ",Oura);
    
    console.log("CHECK ",check());
   

    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerDataConnector(appID, [Fitbit, Oura, Garmin, GoogleTimeline]);
    

    const fitbitFunctions = Object.keys(API[appID].Fitbit).map((s) => {
      return "Fitbit." + s;
    });
    const ouraFunctions = Object.keys(API[appID].Oura).map((s) => {
      return "Oura." + s;
    });
    const garminFunctions = Object.keys(API[appID].Garmin).map((s) => {
      return "Garmin." + s;
    });

    const googleFunctions = Object.keys(API[appID].GoogleTimeline).map((s) => {
      return "GoogleTimeline." + s;
    });
    setFunctions(
      functions.concat(
        fitbitFunctions,
        ouraFunctions,
        garminFunctions,

        googleFunctions
      )
    );
    
    
    //Symbol.keyFor(logicalOP) + k;
    //Symbol.keyFor(Op['eq'])
  }, []);


  return (
    <Container>
      <div>Testing 2</div>

      <div>
        <select
          onChange={(event) => setConnectorFunction(event.target.value)}
          defaultValue={connectorFunction}
        >
          {functions.map((m, i) => (
            <option key={"f-" + i} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          onChange={(event) => setFunctionCondition(event.target.value)}
          defaultValue={functionCondition}
        >
          <option value={"eq"}>{Symbol.keyFor(Op["eq"])}</option>
          <option value={"ne"}>{Symbol.keyFor(Op["ne"])}</option>
          <option value={"gte"}>{Symbol.keyFor(Op["gte"])}</option>
          <option value={"gt"}>{Symbol.keyFor(Op["gt"])}</option>
          <option value={"lte"}>{Symbol.keyFor(Op["lte"])}</option>
          <option value={"lt"}>{Symbol.keyFor(Op["lt"])}</option>
          <option value={"like"}>{Symbol.keyFor(Op["like"])}</option>
          <option value={"in"}>{Symbol.keyFor(Op["in"])}</option>
          <option value={"between"}>{Symbol.keyFor(Op["between"])}</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => setConditionValue(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => setFieldsValue(event.target.value)}
        />
      </div>
      <div>
        <button
          onClick={async () => {
            const filter = {
              ["s3::date"]: {
                [Op[functionCondition]]: conditionValue,
              },
            };
            console.log("FILTER", filter);
            let fields = null;
            if (fieldsValue !== "") {
              fields = fieldsValue;
            }
            const query = connectorFunction.split(".");
            console.log(query);
            //console.log("QUERY", API[appID][query[0]][query[1]]);
            const result = await API[appID][query[0]][query[1]]({
              filter,
              fields,
            });
            console.log("DATA ", new Date().getTime(), result);
            /*

           const result = await API[appID].Fitbit.queryActivitySummary({
            filter,
          });
          console.log("DATA ", new Date().getTime(), result);
          */
          }}
        >
          RUN
        </button>
      </div>
      
    </Container>
  );
};
App.displayName = "App";

export default App;


/*
import React,{useEffect,useRef} from "react";
import { usePrifina } from "@prifina/hooks-v2";
//import DataTest from "./DataTest";

const appId="x866fscSq5Ae7bPgUtb6ffB";

// this is only for local webpack server test  => yarn start
const App = (props) => {
  const {check,onUpdate,registerDataConnector,API,registerClient,currentUser,}=usePrifina();
  const appHandler=useRef(null);

  const dataUpdate=(payload)=>{
    console.log("UPDATE ",payload);
  }
  useEffect(()=>{
    appHandler.current=onUpdate(appId,dataUpdate);
    console.log("CHECK ",check());
  },[])
  return (
    
      <div>Testing ok</div>
    
  );
};

export default App;
*/

/*
export const LocalComponent = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <div>Testing ok</div>
    </PrifinaProvider>
  );
};
*/