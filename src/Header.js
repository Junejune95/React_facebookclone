import React, { Component } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="header__left">
          <img width={40} height={40} src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/300px-Facebook_f_logo_%282021%29.svg.png' />
          <div className="header__input">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__center">
          <div className="header__option">
            <HomeIcon fontsize="large" />
          </div>
          <div className="header__option">
            <FlagIcon fontsize="large" />
          </div>
          <div className="header__option">
            <SubscriptionsIcon fontsize="large" />
          </div>
          <div className="header__option">
            <StorefrontIcon fontsize="large" />
          </div>
          <div className="header__option">
            <SupervisedUserCircleIcon fontsize="large" />
          </div>
        </div>

        <div className="header__right"></div>
      </div>
    )
  }
}

export default Header
