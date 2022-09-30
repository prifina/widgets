import React, { useState, useEffect } from "react";
import OuraEffort from "../src/OuraEffort";

export default { title: "OuraEffort" };

export const app = () => {
  return <OuraEffort stage="dev" />;
};
app.story = {
  name: "OuraEffort",
};
