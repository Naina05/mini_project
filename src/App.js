import React from 'react';
import './App.css';
import Signup from './components/signup';
import Login from "./components/login"
import Header from './components/header';
import Home from './components/home';
/*
import Footer from './components/footer';
 */





function App() {
  return (
    <div className="App">
      {/* header section  */}
      <Header />

     
    {/* <Login /> */}
     <Home />
      {/* footer */}
      {/*<Footer />
      <Signup />
      <Signup />*/}
      
     
    </div>
  );
}

export default App;
