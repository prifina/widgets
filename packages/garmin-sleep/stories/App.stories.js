import React, { useState, useEffect } from "react";
import GarminSleep from "../src/GarminSleep";

export default { title: "GarminSleep" };

export const app = () => {
  return <GarminSleep stage="dev" />;
};
app.story = {
  name: "GarminSleep",
};
