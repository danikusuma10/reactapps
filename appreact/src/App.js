import React from 'react';

//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarCom from './Component/Fungsional/NavbarCom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutCom';


const App = () => {
  return (
    <BrowserRouter>

    <NavbarCom/>

    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={About}/>
    </Switch>

    </BrowserRouter>
   

   
  );
}

export default App;
