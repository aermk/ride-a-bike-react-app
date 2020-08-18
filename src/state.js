import { rerenderEntiereTree } from './render'

let state = {
  blogPage: {
    posts: [
      {id: 1, message: 'I study react js', likescounter: '15'},
      {id: 2, message: 'Chik puk ;(', likescounter: '1'},
    ],
    newPostText: 'Lalala'
  },
  profilePage: {
    photos: [
      {id: 1, img: ('https://sun9-47.userapi.com/c850616/v850616603/1b561b/YO9dSDgsUfA.jpg')},
      {id: 2, img: ('https://sun9-8.userapi.com/c854028/v854028603/ebc28/cMA8eAEljwA.jpg')},
      {id: 3, img: ('https://sun9-31.userapi.com/c853524/v853524603/efea1/xPsq61yLnZM.jpg')},
      {id: 4, img: ('https://sun9-23.userapi.com/c857724/v857724603/6d50e/jW3LPrUEDx8.jpg')},
      {id: 5, img: ('https://sun9-34.userapi.com/c851036/v851036603/1b527c/n0ah-_EmrP4.jpg')}
    ]
  }
}

export default state;
// console.log(state, 'state')

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.blogPage.newPostText,
    likescounter: 0
  };
  state.blogPage.posts.push(newPost);
  rerenderEntiereTree(state);
  state.blogPage.newPostText = '';
}

export const updateNewPostText = (newText) => {

  state.blogPage.newPostText = newText;
  rerenderEntiereTree(state);
}
