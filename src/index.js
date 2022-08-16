import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/js/bootstrap.bundle'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { ChargeImportContextProvider } from "./store/ChargeImportContext";
import { ProductionContextProvider } from "./store/ProductionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChargeImportContextProvider>
      <ProductionContextProvider>
        <BrowserRouter>
          <App classname="textbody" />
        </BrowserRouter>
      </ProductionContextProvider>
    </ChargeImportContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
