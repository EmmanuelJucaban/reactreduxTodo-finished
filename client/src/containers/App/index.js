import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';


import RegisterForm from '../RegisterForm';
import Counter from '../Counter';

import Navbar from '../../components/Navbar';
class App extends Component {
  render () {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column  textAlign='center' style={{ maxWidth: 600 }}>
          <Navbar/>
          <Route exact path='/counter' component={Counter}/>

        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
