import React from 'react';
import styles from './Profile.module.scss'
import Description from '../Description/Description';

const Profile = (props) => {

  let photoElements = props.profilePage.photos.map((ph) => <img className={styles.bike} id={ph.id} src={ph.img} alt="" />)

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