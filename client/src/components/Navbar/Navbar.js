import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = props => {

  const onClickLogout = event => {
    event.preventDefault()
    props.logoutUser()
  }

  return (
    <nav>
      <div className="nav-wrapper" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Logo</span>
        {
          props.isAuthenticated
            ?
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to='/'>Перевести</NavLink></li>
              <li><NavLink to='/vocabulary'>Мой словарь</NavLink></li>
              <li><NavLink to='/about'>Про нас</NavLink></li>
              <li><a href='/' onClick={onClickLogout}>Выйти</a></li>
            </ul>
            : null
        }
      </div>
    </nav>
  )
}

