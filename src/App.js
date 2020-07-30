import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';

// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Description />
      <div className='app-wrapper-content'>
        {/* <Blog /> */}
        <Profile />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
