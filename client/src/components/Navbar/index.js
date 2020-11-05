import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import { Image } from 'antd';

export default function index() {
  return (
    <div className="navbar">
      <div className="header">
        <NavLink to="/home" >
          <div className="brand"> 
            <Image src={window.location.origin +'/logo.png'} width={40} />
            <span className="brand-name">metacritic</span>
          </div>
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-items">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/tv-shows">TV Shows</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/kids">Kids</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
