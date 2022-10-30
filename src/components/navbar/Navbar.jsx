import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import React, { useState, useEffect } from 'react';

const Navbar = () => {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon' />
            English
          </div>
          <div className={`Navbar ${theme}`}>
            <Brightness4Icon className='icon' onClick={toggleTheme} />
          </div>
          <div className="item">
            <NotificationsActiveIcon className='icon' />
            <div className='counter'>1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar