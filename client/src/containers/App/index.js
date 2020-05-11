import React, { Component } from 'react';
import { Grid, Sticky } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import Counter from '../Counter';

import Navbar from '../../components/Navbar';
import AllTodosList from '../AllTodosList';
import UserTodoList from '../UserTodoList';

class App extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.history.push('/usertodos');
    }
  }

  render () {
    return (
      <Sticky>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column textAlign='center' style={{ maxWidth: 700 }}>
          <Sticky>
            <Navbar authenticated={this.props.authenticated}/>
          </Sticky>
            <Switch>
              <Route exact path='/usertodos' component={UserTodoList}/>
              <Route exact path='/alltodos' component={AllTodosList}/>
              <Route exact path='/signin' component={SignIn}/>
              <Route exact path='/counter' component={Counter}/>
              <Route exact path='/signout' component={SignOut} />
              <Route exact path='/' component={SignUp}/>
            </Switch>
        </Grid.Column>
      </Grid>
      </Sticky>
    );
  }
}

function mapStateToProps({ auth: { authenticated } }) {
  return { authenticated };
}

export default withRouter(connect(mapStateToProps)(App));
