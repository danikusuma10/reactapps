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
import Aturan from './Component/Fungsional/Menu/Aturan';
import Jadwal from './Component/Fungsional/Menu/Jadwal';
import Lokasi from './Component/Fungsional/Menu/Lokasi';
import Alur from './Component/Fungsional/Menu/Alur';
import Pendaftaran from './Component/Fungsional/Menu/Pendaftaran';
import Rank from './Component/Fungsional/Menu/Rank';
import Statistik from './Component/Fungsional/Menu/Statistik';
import Tentang from './Component/Fungsional/Menu/Tentang';

const App = () => {
  return (
    
    <BrowserRouter>
   
    <NavbarCom/>
    
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/aturan" component={Aturan}/>
      <Route exact path="/jadwal" component={Jadwal}/>
      <Route exact path="/lokasi" component={Lokasi}/>
      <Route exact path="/alur" component={Alur}/>
      <Route exact path="/pendaftaran" component={Pendaftaran}/>
      <Route exact path="/rank" component={Rank}/>
      <Route exact path="/statistik" component={Statistik}/>
      <Route exact path="/tentang" component={Tentang}/>
    </Switch>
    
    </BrowserRouter>
 
  );
}

export default App;
