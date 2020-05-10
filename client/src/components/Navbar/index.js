import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

export default (props) => (
  <Menu widths={4}>
    {props.authenticated ? null : <Menu.Item as={Link} to='/' content='Sign Up'/>}
    {props.authenticated ? <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
    <Menu.Item as={Link} to='/counter' content='Counter' />
    {props.authenticated ? <Menu.Item as={Link} to='/mytodos' content='My Todos'/> : null }
    <Menu.Item as={Link} to='/alltodos' content='Get All Todos' />
  </Menu>
);
