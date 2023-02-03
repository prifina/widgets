import React, { useEffect, useState } from "react";

import { usePrifina, Op, PrifinaContext } from "@prifina/hooks-v2";

import { APP_ID } from "./environment";

import Oura from "@prifina/oura";

import { Container } from "./components/Container";
import ReactThreeVisor from "./components/ReactThreeVisor";

const App = (props) => {
  // const stage = "dev";

  const { stage, check, onUpdate, API, registerDataConnector } = usePrifina();

  const { score } = props;

  const [ouraScore, setOuraScore] = useState();

  const processData = (data) => {
    //console.log("OURA SCORE PROCESS DATA", data);

    let newData = data;
    console.log("OURA SCORE PROCESSED NEW DATA", newData);
    let newScore = 0;
    let i = newData.length - 1;
    do {
      // first col is summary_date
      newScore = newData[i].split(",")[1];
      i--;
    }
    while (newScore < 1 && i > 0);

    //setOuraScore(newData[1]);
    setOuraScore(newScore);
  };

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/queryReadinessSummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processData(payload.data.content);
      }
    }
  };
  const toIsoDate = (date) => {
    return [date.getFullYear(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-")
  }
  useEffect(() => {
    async function init() {
      onUpdate(APP_ID, dataUpdate);

      registerDataConnector(APP_ID, [Oura]);

      const d = new Date();
      const dd = d.setDate(d.getDate() - 7);
      // const dateStr = new Date(dd).toISOString().split("T")[0];

      const dateStr = toIsoDate(new Date(dd));

      const filter = {
        ["s3::date"]: {
          [Op.gte]: dateStr,
        },
      };
      const activityResult = await API[
        APP_ID
      ].Oura.queryReadinessSummariesAsync({
        filter: filter,
        fields: "summary_date,score",
      });
      console.log("activityResult", activityResult);

      // processData(activityResult.data.getDataObject.content.score);

      // if (stage === "dev") {
      //   processData(activityResult.data.getDataObject.content);
      // }
    }
    init();
  }, []);

  const superCharged =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/SurperCharged.fbx";
  const alertState =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/AlertState.fbx";
  const wellRecovered =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/WellRecovered.fbx";
  const idle =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/Idle.fbx";
  const payAttention =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/PayAttention.fbx";

  let status = idle;

  // ŌURA: 85 or higher: optimal - you’re ready for action >>> BODYGEE: SUPERCHARGED avatar
  // ŌURA: 70-84: Good, you’ve recovered well enough >>> BODYGEE: WELL-RECOVERED avatar
  // ŌURA: 69 - 65: Pay attention, you’re not fully recovered >>> BODYGEE: PAY ATTENTION avatar
  // ŌURA: <65: Alert state: this is an new stage we introduced >>> BODYGEE: ALERT STATE avatar

  // let score = ouraScore;

  let color = "yellow";

  switch (true) {
    case ouraScore <= 64:
      status = alertState;
      color = "firebrick";
      break;
    case ouraScore >= 65 && ouraScore <= 69:
      status = payAttention;
      color = "khaki";
      break;
    case ouraScore >= 70 && ouraScore <= 84:
      status = wellRecovered;
      color = "mediumseagreen";
      break;
    case ouraScore >= 85:
      status = superCharged;
      color = "powderblue";
      break;
    default:
      status = idle;
      color = "gray";
  }

  console.log("status", status);

  console.log("color", color);

  let cameraPosition = {
    x: 0,
    y: 95,
    z: 450,
  };

  return (
    <Container
      variant="small"
      style={{
        border: `5px solid ${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <ReactThreeVisor
        id="canvas"
        cameraPosition={cameraPosition}
        url={status}
        backgroundColor={color}
        ouraScore={ouraScore}
      />
      <div
        style={{
          position: "absolute",
          left: 25,
          bottom: 25,
          fontSize: 32,
          fontWeight: 800,
        }}
      >
        {ouraScore}
      </div>
    </Container>
  );
};

export default App;
