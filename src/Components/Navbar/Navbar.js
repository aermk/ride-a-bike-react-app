import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from'./Navbar.module.css';


const Navbar = () => {

  return (
    <div className={styles.navBar}>
      <NavLink className={styles.button} to='/about'>About</NavLink>
      <NavLink className={styles.button} to='/map'>Map</NavLink>
      <NavLink className={styles.button} to='/blog'>Blog</NavLink>
    </div>
  )
}

export default Navbar;