import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

export default (props) => (
  <Menu widths={5}>
    <Menu.Item
      as={Link}
      to='/'
      content='Sign Up'
    />
    <Menu.Item
      as={Link}
      to='/signin'
      content='Sign In'
    />
    <Menu.Item
      as={Link}
      to='/counter'
      content='Counter'
    />
    <Menu.Item
      as={Link}
      to='/mytodos'
      content='My Todos'
    />
    <Menu.Item
      as={Link}
      to='/alltodos'
      content='Get All Todos'
    />
  </Menu>
);
