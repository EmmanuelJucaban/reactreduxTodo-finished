import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Header, Form, Segment, Message, List, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserTodos, updateCompleteUserTodoById, deleteTodoById } from '../../actions/userTodos';
import { ADD_TODOS_ERROR, ADD_TODOS_SUCCESS } from '../../actions/types';
import axios from 'axios';

import UserTodoListItems from './UserTodoListItems';


class UserTodoList extends Component {
  state = {
    activePage: 1,
    start: 0,
    end: 10
  }

  onSubmit = async (formValues, dispatch) => {
    try {
      await axios.post('/api/user/todos', {text: formValues.text}, { headers: { authorization: localStorage.getItem('token')}});
      dispatch({ type: ADD_TODOS_SUCCESS });
      this.props.getUserTodos();
    } catch (e) {
      dispatch({ type: ADD_TODOS_ERROR, payload: 'You must provide text!' });
    }
  }

  componentDidMount() {
    this.props.getUserTodos();
  }

  renderAddTodo = ({ input, meta }) => {
    return (
      <>
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        fluid
        autoComplete='off'
        placeholder='Add a todo'
      />
      <Message error header={this.props.addTodosError}/>
      </>
    );
  }

  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10
    });
  }

  render() {
    const { handleSubmit } = this.props
    console.log(this.state);
    return (
      <>
        <Header as="h2" color="teal" textAlign="center">Welcome to the todo app!</Header>
        <Form size="large" onSubmit={handleSubmit(this.onSubmit)} error={!!this.props.addTodosError}>
            <Field
              name="text"
              component={this.renderAddTodo}
            />
        </Form>
        <List animated divided selection>
          <UserTodoListItems
            todos={this.props.userTodos.slice(this.state.start, this.state.end)}
            handleComplete={this.props.updateCompleteUserTodoById}
            handleDelete={this.props.deleteTodoById}
          />
        </List>
        { this.props.userTodos.length === 0 ?
          null
          : <Pagination
          totalPages={Math.ceil(this.props.userTodos.length / 10) }
          onPageChange={ (e, data) => this.handlePageChange(e, data)}
          activePage={this.state.activePage}/>
        }
      </>
    );
  }
}

function mapStateToProps({ todos: { userTodos, userTodosError, addTodosError }}) {
  return {
    userTodos,
    userTodosError,
    addTodosError
  };
}

export default compose(
  connect(mapStateToProps, { getUserTodos, updateCompleteUserTodoById, deleteTodoById }),
  reduxForm({ form: 'userTodos' })
)(UserTodoList);
