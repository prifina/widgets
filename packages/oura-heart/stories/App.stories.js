import React, { useState, useEffect } from "react";
import OuraHeart from "../src/OuraHeart";

export default { title: "OuraHeart" };

export const app = () => {
  return <OuraHeart stage="dev" />;
};
app.story = {
  name: "OuraHeart",
};
