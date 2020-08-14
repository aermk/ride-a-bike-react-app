import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Posts/Posts';
import Map from './Components/Map/Map';
import { BrowserRouter, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/' component={Profile}/>
          <Route exact path='/about' component={Profile}/>
          <Route exact path='/map' component={Map}/>
          <Route exact path='/blog' component={Blog}/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
