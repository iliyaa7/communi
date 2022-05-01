// imported side bar from https://codesandbox.io/s/9bbm9?file=/src/Aside.js:0-3067
// using react-pro-sidebar & react-icons
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../imported-styles/SideBar.scss";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaDelicious,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

const SideBar = (
  props,
  { image, collapsed, rtl, toggled, handleToggleSidebar }
) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    //change to fetched data instead of true
    setIsOpen(true);
  }



  function handleOpenMenu() {
    setIsOpen(!isOpen);
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
            whiteSpace: "nowrap",
          }}
        >
          <Menu iconShape="circle">
            <MenuItem onClick={handleOpenMenu} icon={<FaTachometerAlt />}>
              menu
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
            <Link to="dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem
            onClick={handleMenuClick}
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">'new'</span>}
          >
            <Link to={`table/${1}`}>Users</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClick} icon={<FaGem />}>
            {" "}
            <Link to={`table/${2}`}>Emploeis</Link>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick(2)} icon={<FaDelicious />}>
            {" "}
            <Link to={`table/${3}`}>Costumers</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        ></div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;

// import React, { useState } from "react";
// import "./SideBar.css";
// import MenuItem from "@mui/material/MenuItem";
// import { Container, Typography } from "@mui/material";

// function SideBar(props) {
// const [isOpen, setIsOpen] = useState(false)

//   function handleMenuClick(index) {
//     //change to fetched data instead of true
//     props.handleMenuClick(index);
//     setIsOpen(true);
//   }

//   function handleOpenMenu() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className="sidebar">
//       <Container maxWidth="xl">
//         <MenuItem >
//           {" "}
//           <Typography textAlign="center">Users</Typography>
//         </MenuItem>
//         <MenuItem>
//           {" "}
//           <Typography textAlign="center">Customers</Typography>
//         </MenuItem>
//         <MenuItem>
//           {" "}
//           <Typography  textAlign="center">Employies</Typography>
//         </MenuItem>
//       </Container>
//     </div>
//   );
// }

// export default SideBar;
