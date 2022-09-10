import React, { useState, useEffect } from "react";
import FitbitEffort from "../src/FitbitEffort";

export default { title: "FitbitEffort" };

export const app = () => {
  return <FitbitEffort stage="dev" />;
};
app.story = {
  name: "FitbitEffort",
};
