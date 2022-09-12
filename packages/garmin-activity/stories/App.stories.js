import React, { useState, useEffect } from "react";
import GarminActivity from "../src/GarminActivity";

export default { title: "GarminActivity" };

export const app = () => {
  return <GarminActivity stage="dev" />;
};
app.story = {
  name: "GarminActivity",
};
