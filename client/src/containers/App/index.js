import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class App extends Component {
  render () {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column  style={{ maxWidth: 600 }}>
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
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
