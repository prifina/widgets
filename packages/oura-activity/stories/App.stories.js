import React, { useState, useEffect } from "react";
import OuraActivity from "../src/OuraActivity";

export default { title: "OuraActivity" };

export const app = () => {
  return <OuraActivity stage="dev" />;
};
app.story = {
  name: "OuraActivity",
};
