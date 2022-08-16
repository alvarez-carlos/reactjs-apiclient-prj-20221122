import React from "react";
import { NavLink } from "react-router-dom";
import './HeaderNav.css'


// activeClassName='bk-danger'
{/* <NavLink to="/home" className={({isActive}) => (isActive ? "active-style" : 'none')}>Home</NavLink>
<NavLink to="/home" className={({isActive}) => (isActive ? "active-style" : 'none')}>Home</NavLink> */}

const HeaderNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light myheader">
      <NavLink
        className="navbar-brand"
        to="/"
        data-abc="true"
      >
        {/* <img className="logo" src="ONQ-logo-site.png" alt="" /> */}
        <div className='logo'>DPC</div>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className="fa fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto list-group">
          <li className={`nav-item  mynavitem`} aria-current="true">
            <NavLink to="/chargeimport" className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}   data-abc="true" >
              Charge Import
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}  to="/production" data-abc="true">
              Production
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}   to="/patient" data-abc="true">
              Patient
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}   to="/insurance" data-abc="true">
              Insurance
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}   to="/hrsa" data-abc="true">
              HRSA
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}   to="/rpa" data-abc="true">
              RPA
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}   to="/facility" data-abc="true">
              Facility
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className={`nav-link textdec`}  style={({ isActive }) => ({ backgroundColor: isActive ? '#e0a801' : null, borderRadius: '4px 4px 4px 4px'})}   to="/pos" data-abc="true">
              POS
            </NavLink>
          </li>
          <li className={`nav-item  mynavitem`}>
            <NavLink className="nav-link textdec " to="/fees" data-abc="true">
              Fees
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;
