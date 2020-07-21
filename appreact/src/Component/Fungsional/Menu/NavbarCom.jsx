import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   // UncontrolledDropdown,
    //DropdownToggle,
    //DropdownMenu,
    //DropdownItem,
    NavbarText,
    
    
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
                                <NavLink href="/aturan">Aturan</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/jadwal">Jadwal</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/lokasi">Lokasi</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/alur">Alur</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/pendaftaran">Pendaftaran</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/rank">Rank</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/statistik">Statistik</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/tentang">Tentang</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    
}
//carousel


export default NavbarCom;