import React from "react";
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";
import FitbitSleep from "./FitbitSleep";

// this is only for local webpack server test  => yarn start
export const LocalComponent = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <FitbitSleep {...props} />
    </PrifinaProvider>
  );
};
