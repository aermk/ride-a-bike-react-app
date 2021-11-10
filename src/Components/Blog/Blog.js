import React from 'react';
import styles from './Blog.module.scss'
import Post from './Post/Post';

const MyPosts = (props) => {

  let blogElements = props.blogPage.posts.map((p) => <Post id={p.id} message={p.message} likescounter={p.likescounter}/>)

  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }

  return(
        <div className={styles.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
              <textarea ref={ newPostElement } onChange={ onPostChange } value={props.newPostText}></textarea>
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