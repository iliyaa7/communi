import React from "react";
import BasicCard from "../Card/Card";
import './DashBoardView.css'

function DashBoardView() {

  return (
    <div className="dashboard__view">
      <div className="dashboard__upper-cards">
      <BasicCard/>
      <BasicCard/>
      <BasicCard/>
      <BasicCard/>
      </div>
    </div>
  );
}

export default DashBoardView