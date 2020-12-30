import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
	return (
    <div className='headerWrapper'>

      <div className="header">
        <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg/1200px-Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg.png" alt="" />
      </div>

      <div className='searchBox'>
        <input type='text' />
        <SearchIcon />
      </div>

      <div className='menuBar'>
        <p>Welcome</p>
        <MenuIcon />
        <PersonOutlineIcon />
      </div>

    </div>

	);
}

export default Header;
