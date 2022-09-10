import React, { useState, useEffect } from "react";
import FitbitHeart from "../src/FitbitHeart";

export default { title: "FitbitHeart" };

export const app = () => {
  return <FitbitHeart stage="dev" />;
};
app.story = {
  name: "FitbitHeart",
};
