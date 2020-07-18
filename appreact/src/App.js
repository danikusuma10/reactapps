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
import Aturan from './Component/Fungsional/Aturan';
import Jadwal from './Component/Fungsional/Jadwal';
import Lokasi from './Component/Fungsional/Lokasi';
import Alur from './Component/Fungsional/Alur';
import Pendaftaran from './Component/Fungsional/Pendaftaran';
import Rank from './Component/Fungsional/Rank';
import Statistik from './Component/Fungsional/Statistik';


const App = () => {
  return (
    <BrowserRouter>

    <NavbarCom/>
    

    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/aturan" component={Aturan}/>
      <Route exact path="/jadwal" component={Jadwal}/>
      <Route exact path="/lokasi" component={Lokasi}/>
      <Route exact path="/alur" component={Alur}/>
      <Route exact path="/pendaftaran" component={Pendaftaran}/>
      <Route exact path="/rank" component={Rank}/>
      <Route exact path="/statistik" component={Statistik}/>
    </Switch>

    </BrowserRouter>
   

   
  );
}

export default App;
