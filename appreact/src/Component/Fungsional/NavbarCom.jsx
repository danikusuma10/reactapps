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
    NavbarText
} from 'reactstrap';


const NavbarCom = (props) =>{ 


      
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Beranda</NavLink>
                            </NavItem>
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
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    
}
export default NavbarCom;