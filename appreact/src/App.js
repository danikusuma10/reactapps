import React from 'react';

//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarCom from './Component/Fungsional/Menu/NavbarCom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Component/Fungsional/Menu/Home';
import Prodi from './Component/Fungsional/Menu/Prodi/Prodi';
import Aturan from './Component/Fungsional/Menu/Aturan';
import Jadwal from './Component/Fungsional/Menu/Jadwal';
import Lokasi from './Component/Fungsional/Menu/Lokasi';
import Alur from './Component/Fungsional/Menu/Alur';
import Pendaftaran from './Component/Fungsional/Menu/Pendaftaran';
import Rank from './Component/Fungsional/Menu/Rank';
import Statistik from './Component/Fungsional/Menu/Statistik';
import Tentang from './Component/Fungsional/Menu/Tentang';

import DetailComp from './Component/Fungsional/Menu/Prodi/DetailComp';
import AboutComp from './Component/Fungsional/Menu/Prodi/AboutComp';
import Profile from './Component/Fungsional/Menu/Prodi/Profile';

const App = () => {
  return (
    
    <BrowserRouter>
   
    <NavbarCom/>
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/prodi" component={Prodi}/>
      <Route exact path="/aturan" component={Aturan}/>
      <Route exact path="/jadwal" component={Jadwal}/>
      <Route exact path="/lokasi" component={Lokasi}/>
      <Route exact path="/alur" component={Alur}/>
      <Route exact path="/pendaftaran" component={Pendaftaran}/>
      <Route exact path="/rank" component={Rank}/>
      <Route exact path="/statistik" component={Statistik}/>
      <Route exact path="/tentang" component={Tentang}/>
   
        <Route exact path="/About" component={AboutComp} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/detail/:id" component={DetailComp} />
    </Switch>
    
    </BrowserRouter>
 
  );
}

export default App;
