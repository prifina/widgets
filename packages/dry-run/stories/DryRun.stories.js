import React from "react";
import DryRun from "../src/DryRun";

export default { title: "Dry Run Widget" };

export const box = () => <DryRun city="honolulu" />;
box.story = {
  name: "Dry Run Widget",
};