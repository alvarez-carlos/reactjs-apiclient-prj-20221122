import React from "react";
import { Routes, Route } from "react-router-dom";

import CIPage from '../../pages/CIPage';

import ProdPage from "../../pages/ProdPage";

import CIUpdateForm from "../chargeImport/CIUpdateForm";

import ProdUpdateForm from '../production/ProdUpdateForm'


const RoutesSection = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<div>Home</div>} exact />
          <Route path="/chargeimport" element={<CIPage />} />
          <Route
            path="/chargeimport/:id"
            element={<CIUpdateForm />}
          />
          <Route path="/production" element={<ProdPage />} />
          <Route
            path="/production/:id"
            element={<ProdUpdateForm />}
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
