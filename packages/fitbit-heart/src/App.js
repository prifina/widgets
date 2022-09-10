import React from "react";
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";
import FitbitEffort from "./FitbitEffort";

// this is only for local webpack server test  => yarn start
export const LocalComponent = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <FitbitEffort {...props} />
    </PrifinaProvider>
  );
};
