import React, { Component } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGrinSquintTears, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.footerItem}>
        <a href="https://www.instagram.com/sweetbunsasha/" target="_blank">
          <i class="icon fab fa-instagram"></i>
        </a>
      </div> */}
      {/* <div className={styles.footerItem}>
        <a href="https://vk.com/nezarekaisya" target="_blank">
          <i class="icon fab fa-vk"></i>
          <FontAwesomeIcon icon={faCoffee}/>
        </a>
      </div> */}
      <div className={styles.footerItem}>
        <a href="https://t.me/sweetbunsasha" target="_blank">
          <i class="fas fa-paper-plane"></i>
          <FontAwesomeIcon icon={faPaperPlane}/>
        </a>
      </div>
    </div>
  )
}

export default Footer;