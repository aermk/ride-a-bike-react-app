import React from 'react';
import styles from './Blog.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  let blogElements = props.state.posts.map((p) => <Post id={p.id} message={p.message} likescounter={p.likescounter}/>)

  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return(
        <div className={styles.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
              <textarea ref={ newPostElement }></textarea>
            </div>
            <div>
              <button onClick={ addPost }>Add post</button>
            </div>
          </div>
         <div className={styles.posts}>
            { blogElements }
         </div>
        </div>
  )
}

export default MyPosts;