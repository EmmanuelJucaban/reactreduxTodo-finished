import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class AllTodosList extends Component {
  state = {
    todos: [ 'hello', 'world', 'im','here']
  }

  renderList = () => {
     return this.state.todos.map((todo, index) => {
        return (
          <List.Item  key={index} style={{ fontSize: '20px'}}>
            <List.Content>
              <List.Header>{todo}</List.Header>
              <List.Description as='a'>Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
        );
      });
  }

  render() {
    return (
      <List  divided relaxed size={'huge'}>
        {this.renderList()}
      </List>
    );
  }
}

export default AllTodosList;
