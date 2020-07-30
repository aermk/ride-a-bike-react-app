import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import styles from'./Navbar.module.css';


export default class Navbar extends Component {
  render() {
    return (
    <div className={styles.nav_bar}>
      <button><Nav.Link href='/about'>About</Nav.Link></button>
      <button><Nav.Link href='/map'>Map</Nav.Link></button>
      <button><Nav.Link href='/blog'>Blog</Nav.Link></button>
    </div>
    )
  }
}