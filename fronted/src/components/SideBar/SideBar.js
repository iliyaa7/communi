// imported side bar from https://codesandbox.io/s/9bbm9?file=/src/Aside.js:0-3067
// using react-pro-sidebar & react-icons
import React from "react";
import { useState, useEffect } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaDelicious,
  FaRegLaughWink,
  FaHeart
} from "react-icons/fa";

const SideBar = (props, { image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    //change to fetched data instead of true
    props.handleMenuClick(true)
  }

  function handleOpenMenu() {
    setIsOpen(!isOpen)
  }




  return (
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={!isOpen}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
           <Menu iconShape="circle">
          <MenuItem
            onClick={handleOpenMenu}
            icon={<FaTachometerAlt />}
          >
            Communi
          </MenuItem>
        </Menu>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            onClick={handleMenuClick}
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">'new'</span>}
          >
            Users
          </MenuItem>
          <MenuItem  onClick={handleMenuClick} icon={<FaGem />}> Costumers</MenuItem>
          <MenuItem onClick={handleMenuClick} icon={<FaDelicious />}> Employes</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
