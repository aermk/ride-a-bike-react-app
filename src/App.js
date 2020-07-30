import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Map from './Components/Map/Map';
import { BrowserRouter, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Route path='/about' component={Description} />
        <div className='app-wrapper-content'>
          <Route path='/about' component={Profile}/>
          <Route path='/map' component={Map}/>
          <Route path='/blog' component={Blog}/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
