import React from 'react';
import styles from './Profile.module.css'
import Description from '../Description/Description';

const Profile = (props) => {

  let photoElements = props.state.photos.map((ph) => <img className={styles.bike} id={ph.id} src={ph.img} alt="" />)

  return (
    <div>
      <Description />
    <div className={styles.profile}>

      { photoElements }

    </div>
  </div>
  )
}

export default Profile;