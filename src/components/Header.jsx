import React from 'react';
import { Container, Menu, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

import AuthUserContext from './AuthUserContext';
import SignOutButton from '../containers/SignOut';
import * as routes from '../constants/routes';

const Header = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                ~FOG~
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as={ Link } name="Home" to="/">Home</Menu.Item>
                <Menu.Item as={ Link } name="Wars" to="/wars">Wars</Menu.Item>
                <Menu.Item as={ Link } name="Members" to="/members">Members</Menu.Item>
                <SignOutButton />
            </Menu.Menu>
        </Container>
    </Menu>

const NavigationNonAuth = () =>
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                ~FOG~
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as={ Link } name="Home" to="/">Home</Menu.Item>
                <Menu.Item as={ Link } name="SignIn" to="/signin">Sign In</Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>

export default Header;