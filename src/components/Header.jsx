import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const Header = () => (
    <Navbar className='red darken-4' brand='logo' right>
        <NavItem className="waves-effect waves-light" href='/'>Home</NavItem>
        <NavItem href='/wars'>Wars</NavItem>
        <NavItem href='/members'>Members</NavItem>
    </Navbar>
)

export default Header;