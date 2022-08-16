import React from "react";
import { Link } from "react-router-dom";

import './Footer.css'

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4 myfooter">
      <div className="footer-copyright text-center text-white py-3">
        © 2022 Copyright:
        <Link to="/" className="pl-2 dpc">DPC</Link>
      </div>
    </footer>
  );
};

export default Footer;
