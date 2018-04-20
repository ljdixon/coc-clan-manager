import React from 'react';
import { Container, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Header = () => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                ~FOG~
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as={ Link } name="Home" to="/">Home</Menu.Item>
                <Menu.Item as={ Link } name="Wars" to="/wars">Wars</Menu.Item>
                <Menu.Item as={ Link } name="Members" to="/members">Members</Menu.Item>
        </Menu.Menu>
    </Container>
  </Menu>
)

export default Header;