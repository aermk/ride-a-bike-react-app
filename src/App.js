import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Map from './Components/Map/Map';
// import { BrowserRouter, Route } from 'react-router-dom';
import { HashRouter, Route } from 'react-router-dom';


// import 'bootstrap/dist/css/bootstrap.min.css';

const  App = (props) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/' render={() => <Profile state={props.state.profilePage}/>}/>
          <Route exact path='/about' render={() => <Profile state={props.state.profilePage}/>}/>
          <Route exact path='/map' component={Map}/>
          <Route exact path='/blog' render={() => <Blog state={props.state.blogPage}/>}/>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
