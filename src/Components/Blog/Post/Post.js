import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return( 
    <div className={styles.item}>
      <img src="https://sun9-20.userapi.com/c852036/v852036038/1c55b5/1Fzv8bJq-Sw.jpg"/>
      <div>{props.message}</div>
      <div>
        <span>like</span> {props.likescounter}
      </div>
    </div>
  )
}

export default Post;