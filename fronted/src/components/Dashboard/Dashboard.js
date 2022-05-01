import React from "react";
import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
import Header from "../Header/Header";
import { Outlet } from "react-router";

function Dashboard(props) {

  return (
    <div
      className={`dashboard ${
        !props.isThemeModeDark && "dashboard_type_light"
      }`}
    >
      <header className="dashboard__header">
        <Header
          handleThemeChange={props.handleThemeChange}
          handleLogout={props.handleLogout}
          user={props.user}
        />
      </header>
      <div className="dashboard__container">
        <SideBar
          handleThemeChange={props.handleThemeChange}
        />
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
