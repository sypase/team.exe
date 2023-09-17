/* importing necessary tools */
import React from "react";
import 'antd/dist/antd.min.css'
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
// Getting the DOM element with the id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the main App component wrapped in the Redux Provider component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Reporting web vitals 
reportWebVitals();
