import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { addPost, updateNewPostText, subscribe } from './state.js'
import App from './App';


export let rerenderEntiereTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntiereTree(state);

subscribe(rerenderEntiereTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
