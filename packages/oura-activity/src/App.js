import React from "react";
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";
import OuraActivity from "./OuraActivity";

// this is only for local webpack server test  => yarn start
export const LocalComponent = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <OuraActivity {...props} />
    </PrifinaProvider>
  );
};
