import React from 'react'
import './Navbar.scss'

export default function index() {
  return (
    <div className="navbar">
      <div className="header">
        <ul className="navbar-nav">
          <li className="nav-items">
            <a href="/home">Home</a>
          </li>
          <li className="nav-items">
            <a href="/movies">Movies</a>
          </li>
          <li className="nav-items">
            <a href="/tv-shows">TV Shows</a>
          </li>
          <li className="nav-items">
            <a href="/kids">Kids</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
