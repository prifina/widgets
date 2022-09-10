import React, { useState, useEffect } from "react";
import FitbitActivity from "../src/FitbitActivity";

export default { title: "FitbitActivity" };

export const app = () => {
  return <FitbitActivity stage="dev" />;
};
app.story = {
  name: "FitbitActivity",
};
