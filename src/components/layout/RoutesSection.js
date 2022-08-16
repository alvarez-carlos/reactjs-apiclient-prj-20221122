import React from "react";
import { Routes, Route } from "react-router-dom";

import ChargeImportPage from '../../pages/ChargeImportPage';

import ChargeImportUpdatePage from "../../pages/ChargeImportUpdatePage";

import ProductionPage from "../../pages/ProductionPage";

import ProductionUpdatePage from "../../pages/ProductionUpdatePage";


const RoutesSection = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<div>Home</div>} exact />
          <Route path="/chargeimport" element={<ChargeImportPage />} />
          <Route
            path="/chargeimport/:id"
            element={<ChargeImportUpdatePage />}
          />
          <Route path="/production" element={<ProductionPage />} />
          <Route
            path="/production/:id"
            element={<ProductionUpdatePage />}
          />
          <Route path="/patient" element={<div>Hello</div>} />
          <Route path="/insurance" element={<div>Hello</div>} />
          <Route path="/hrsa" element={<div>Hello</div>} />
          <Route path="/rpa" element={<div>Hello</div>} />
          <Route path="/facility" element={<div>Hello</div>} />
          <Route path="/pos" element={<div>Hello</div>} />
          <Route path="/fees" element={<div>Hello</div>} />
          <Route path="*" element={<div>Hello</div>} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default RoutesSection;
