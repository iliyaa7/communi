import React from 'react';
import { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar'
import BasicTable from '../Table/Table';
import './Dashboard.css';
import { CgDarkMode } from "react-icons/cg";

function Dashboard(props) {
  const [tableData, setTableData] = useState(null);

  function handleMenuClick(tableData) {
    setTableData(tableData)
  }

  function handleThemeChange() {
    props.handleThemeChange()
  }


  return (
    <div className={`dashboard ${!props.isThemeModeDark && 'dashboard_type_light'}`}>
        <SideBar handleMenuClick={handleMenuClick} handleThemeChange={props.handleThemeChange}/>
        <div className='dashboard__container'>
          <button className={`dashboard__theme-button ${!props.isThemeModeDark && 'dashboard__theme-button_type_light'}`} onClick={handleThemeChange}><CgDarkMode/></button>
          {tableData && <BasicTable tableData={tableData}/>}
        </div>
    </div>
  );
}

export default Dashboard;