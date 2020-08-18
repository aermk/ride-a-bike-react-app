import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state from './state';
import { addPost, updateNewPostText } from './state';

export let rerenderEntiereTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
