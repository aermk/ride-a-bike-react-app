import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Description.module.css';


const Description = (props) => {
    return (
    <div className={styles.description}>
      <div>
        <img className={styles.my_photo} src="https://sun9-20.userapi.com/c852036/v852036038/1c55b5/1Fzv8bJq-Sw.jpg" />
      </div>
      <div>
        <p>
          Hello! My name is Sasha! I love sweets, learn new things, travel and take pictures. I collect photos of parked bicycles all over the world, and here you can see a small part of them. You can see photos from my travels in my instagram :)
        </p>
      </div>
    </div>
    )
}

export default Description;