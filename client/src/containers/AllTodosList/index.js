import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAllTodos } from '../../actions/allTodos';
import moment from 'moment';

class AllTodosList extends Component {

  componentDidMount() {
    this.props.getAllTodos();
  }

  renderList = () => {
    if (this.props.todos.length === 0) {
      return <Header>No todos yet</Header>
    } else {
      return this.props.todos.map(({_id, text, dateCreated})=> {
        return (
          <List.Item key={_id}>
            <List.Content>
              <List.Header>{text}</List.Header>
              <List.Description as='a'>Created {moment(dateCreated).fromNow()}</List.Description>
            </List.Content>
          </List.Item>
        );
      });
    }
  }

  render() {
    return (
      <List celled selection size={'huge'}>
        {this.renderList()}
      </List>
    );
  }
}

function mapStateToProps({ todos: { todos, getAllTodosError }}) {
  return { todos, getAllTodosError };
}

export default connect(mapStateToProps, { getAllTodos })(AllTodosList);
