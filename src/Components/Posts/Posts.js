import React, { Component } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import styles from './Blog.module.css'
import styles from './Posts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'I study react js', likescounter: '15'},
    {id: 2, message: 'Chik puk ;(', likescounter: '1'},
  ]

  return(
        <div className={styles.postsBlock}>
          <h3>my posts</h3>
          {/* <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div> */}
         <div className={styles.posts}>
            <Post message={postsData[0].message} likescounter={postsData[0].id}/>
            <Post message={postsData[1].message} likescounter={postsData[1].id}/>
         </div>
        </div>
  )
}

export default MyPosts;