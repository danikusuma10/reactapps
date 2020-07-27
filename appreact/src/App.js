import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
//Navbar b
import NavbarCom from './Component/Fungsional/Menu/NavbarCom';
import HomePage from './Component/Fungsional/HomePage'
import Home from './Component/Fungsional/Menu/Home';
import Prodi from './Component/Fungsional/Menu/Prodi/Prodi';
import Aturan from './Component/Fungsional/Menu/Aturan';
import Jadwal from './Component/Fungsional/Menu/Jadwal';
import Lokasi from './Component/Fungsional/Menu/Lokasi';
import Alur from './Component/Fungsional/Menu/Alur';
import Pendaftaran from './Component/Fungsional/Menu/Pendaftaran/Pendaftaran';
import Rank from './Component/Fungsional/Menu/Rank';
import Statistik from './Component/Fungsional/Menu/Statistik';
import Tentang from './Component/Fungsional/Menu/Tentang';
//Prodi
import DetailComp from './Component/Fungsional/Menu/Prodi/DetailComp';
import AboutComp from './Component/Fungsional/Menu/Prodi/AboutComp';
import Profile from './Component/Fungsional/Menu/Prodi/Profile';
//CRUD SISWA
import ListComp from './Component/Class/AddSiswa/ListComp';
import EditComp from './Component/Fungsional/Menu/Pendaftaran/EditComp';
import TambahComp from './Component/Fungsional/Menu/Pendaftaran/TambahComp';
//Login
import LoginComp from './Component/Fungsional/Menu/Login/LoginComp';


//inisiasi state
export const AuthContext = createContext()

//inisiasi state
const initalState = {
isAuthenticated: false,
user: null,
token: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        }

case "LOGOUT":
  localStorage.clear()
  return {
    ...state,
    isAuthenticated: false,
    user : null
  }

  default:
    return state
} 
}
 

function App () {

  const[state, dispatch] = useReducer(reducer, initalState)
  
  return (
    <BrowserRouter>
     
      <NavbarCom />
      <Switch>
        <AuthContext.Provider value= {{
          state,
          dispatch
        }}>
       
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/login"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/siswa"

              }}
            />
          }

      <Route exact path="/" component={HomePage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/prodi" component={Prodi}/>
      <Route exact path="/aturan" component={Aturan}/>
      <Route exact path="/jadwal" component={Jadwal}/>
      <Route exact path="/lokasi" component={Lokasi}/>
      <Route exact path="/alur" component={Alur}/>
      
      <Route exact path="/rank" component={Rank}/>
      <Route exact path="/statistik" component={Statistik}/>
      <Route exact path="/tentang" component={Tentang}/>
      //Prodi
      <Route exact path="/About" component={AboutComp} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/detail/:id" component={DetailComp} />

      //*CRUD Siswa*//
      <Route exact path="/siswa/tambah" component={TambahComp}/>
      <Route exact path="/siswa" component={ListComp} />
      <Route exact path="/siswa/edit" component={EditComp} />
     
     //Login
     <Route exact path="/login" component={LoginComp} />

     </AuthContext.Provider>
    </Switch>
    </BrowserRouter>
 
  );
}

export default App;

