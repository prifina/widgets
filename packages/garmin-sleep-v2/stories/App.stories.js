import React, { useState, useEffect } from "react";
import App from "../src/App";

export default { title: "OuraSleep" };

export const app = () => {
  return <App stage="dev" />;
};
app.story = {
  name: "App",
};
