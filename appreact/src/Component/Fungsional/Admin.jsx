import { React } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


//CRUD SISWA
//import ListComp from './Component/Class/AddSiswa/ListComp';
//import EditComp from './Component/Fungsional/Menu/Pendaftaran/EditComp';
//import TambahComp from './Component/Fungsional/Menu/Pendaftaran/TambahComp';


import ListComp from './../Class/AddSiswa/ListComp';
import EditComp from './Menu/Pendaftaran/EditComp';
import TambahComp from './Menu/Pendaftaran/TambahComp';

import NavbarCom from './Menu/NavbarCom';

const Admin = () => {
    return (
    <BrowserRouter >
      <NavbarCom/>
      <Switch >
     
      

      //*CRUD Siswa*//
      <Route exact path="/siswa/tambah" component={TambahComp}/>
      <Route exact path="/siswa" component={ListComp} />
      <Route exact path="/siswa/edit" component={EditComp} />
        </Switch>
        </BrowserRouter>
    );
  }
  export default Admin;