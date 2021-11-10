import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Map from './Components/Map/Contact';
import { HashRouter, Route } from 'react-router-dom';
import Contact from './Components/Map/Contact';

const  App = (props) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/' render={() => <Profile profilePage={props.state.profilePage}/>}/>
          <Route exact path='/about' render={() => <Profile profilePage={props.state.profilePage}/>}/>
          <Route exact path='/map' component={Contact}/>
          <Route exact path='/blog' render={() => <Blog blogPage={props.state.blogPage} addPost={props.addPost} newPostText={props.state.blogPage.newPostText} updateNewPostText={props.updateNewPostText}/>}/>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
