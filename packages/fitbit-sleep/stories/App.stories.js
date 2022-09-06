import React, { useState, useEffect } from "react";
import FitbitSleep from "../src/FitbitSleep";

export default { title: "FitbitSleep" };

export const app = () => {
  return <FitbitSleep stage="dev" />;
};
app.story = {
  name: "FitbitSleep",
};
