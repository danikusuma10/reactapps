import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarCom = () =>{ 

        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/home">SMK N 31 SEMARANG</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

           <NavItem>
                                <NavLink href="/prodi">PRODI</NavLink>
           </NavItem>
             <NavItem>
                                <NavLink href="/aturan">ATURAN</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/jadwal">JADWAL</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/lokasi">LOKASI</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/alur">ALUR</NavLink>
                            </NavItem>
                        

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Siswa
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>

                   <NavItem>
                            <NavLink href="/siswa">DAFTAR SISWA</NavLink>
                            </NavItem>
                </DropdownItem>

                <DropdownItem>
                   <NavItem>
                            <NavLink href="/siswa/tambah">TAMBAH SISWA</NavLink>
                            </NavItem>
               
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
               <NavItem>
                                <NavLink href="/rank">RANK</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/statistik">STATISTIK</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/tentang">TENTANG</NavLink>
                            </NavItem>
                   
                
          </Nav>
          <NavbarText>LOGIN / REGISTER</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCom