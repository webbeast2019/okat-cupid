import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import logo from '../../assets/okat_logo.jpg';

const Header: React.FC = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo"/>
          <Typography variant="h6" className="mx-3 cursor-pointer">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
};

export default Header;