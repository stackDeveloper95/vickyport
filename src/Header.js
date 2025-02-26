import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  return (

    <>
      <header className="header">
        <div className="flex">
          <div className="logo">
            <img src="/image/log.png" alt="" /><h3>sanjai</h3>
          </div>
          <div className="list">
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => { setSidebar(false) }}><li><Link to="/">home</Link></li>
              <li><Link to="/page">page</Link></li>
              <li><Link to="/bloge">Blog</Link></li>
              <li><Link to="/portpholio">Portpolio</Link></li>
              <li><Link to="/shop">shop</Link></li>
              <li><Link to="/contect">contact</Link></li>
              <li className='icon'><SearchIcon /><WorkIcon /><GridViewIcon /></li>
            </ul>

            <button class="navbar-items-icon" onClick={() => setSidebar(!sidebar)}>{sidebar ? <CloseIcon /> : <MenuIcon />}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header