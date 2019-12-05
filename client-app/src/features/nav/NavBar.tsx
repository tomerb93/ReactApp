import React from 'react';
import { Menu, Container, Segment } from 'semantic-ui-react';

export const NavBar = () => {
  return (
    <div>
      <Menu inverted className='nav-bar' secondary>
        <Container>
          <Menu.Item header name='Tomer Barzilay' />
          <Menu.Menu className='NavBar-items-right' position='right'>
            <Menu.Item name='HOME' as='a' />
            <Menu.Item name='PORTFOLIO' as='a' />
            <Menu.Item name='ABOUT' as='a' />
            <Menu.Item name='RESUME' as='a' />
            <Menu.Item name='BLOG' as='a' />
            <Menu.Item name='CONTACT' as='a' />
          </Menu.Menu>
        </Container>
      </Menu>
      <Segment>hi</Segment>
    </div>
  );
};
