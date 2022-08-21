import React from "react";
import "./Header.css";
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt="facebook logo"
        />
        <div className="header__search">
          <SearchOutlinedIcon className="header__searchIcon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__links">
          <div className="header__link header__active">
            <HomeIcon />
          </div>
          <div className="header__link">
            <SmartDisplayOutlinedIcon />
          </div>
          <div className="header__link">
            <StorefrontIcon />
          </div>
          <div className="header__link">
            <GroupsOutlinedIcon />
          </div>
          <div className="header__link">
            <SportsEsportsOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="header__right"></div>
      <div className="header__options">
        <div className="header__option"><AddOutlinedIcon /></div>
        <div className="header__option"><MapsUgcIcon /></div>
        <div className="header__option"><NotificationsIcon /></div>
        <div className="header__option"> <AccountCircleIcon /></div>
      </div>
      
      
      
     
    </div>
  );
};

export default Header;
