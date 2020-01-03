import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Menu className='nav-bar' secondary>
            <Container>
                <Menu.Item header name='Tomer Barzilay' />
                <Menu.Menu className='NavBar-items-right' position='right'>
                    <Menu.Item name='HOME' as={Link} to='/' />
                    <Menu.Item name='PORTFOLIO' as='a' />
                    <Menu.Item name='ABOUT' as='a' />
                    <Menu.Item name='RESUME' as='a' />
                    <Menu.Item name='BLOG' as={Link} to='/blog' />
                    <Menu.Item name='CONTACT' as='a' />
                </Menu.Menu>
            </Container>
        </Menu>
    );
};
