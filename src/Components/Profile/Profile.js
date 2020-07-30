import React, { Component } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Profile.module.css'



export default class Profile extends Component {
  render() {
    return (
    <div className={styles.profile}>
      <img src='http://placekitten.com/1000/700' />
      {/* <img src="https://sun9-47.userapi.com/c850616/v850616603/1b561b/YO9dSDgsUfA.jpg" alt="" class="bike" />
      <img src="https://sun9-8.userapi.com/c854028/v854028603/ebc28/cMA8eAEljwA.jpg" alt="" class="bike" />
      <img src="https://sun9-31.userapi.com/c853524/v853524603/efea1/xPsq61yLnZM.jpg" alt="" class="bike" />
      <img src="https://sun9-23.userapi.com/c857724/v857724603/6d50e/jW3LPrUEDx8.jpg" alt="" class="bike" />
      <img src="https://sun9-34.userapi.com/c851036/v851036603/1b527c/n0ah-_EmrP4.jpg" alt="" class="bike"></img> */}
    </div>
    
    )
  }
}