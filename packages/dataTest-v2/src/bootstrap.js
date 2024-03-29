import App from "./App";
import React from "react";

import ReactDOM from "react-dom";
import config from "./config";

ReactDOM.render(<App />, document.getElementById(config.appId));

/* 
// react 18
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

*/