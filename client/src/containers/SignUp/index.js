import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from '../../actions/types';

class SignUp extends Component {
  onSubmit = async (formProps, dispatch) => {
    console.log("I am form props", formProps);
    try {
      const { data } = await axios.post('/api/auth/signup', formProps);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push('/counter');
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: e });
    }
  }

  renderEmail({ input, meta }){
    console.log(meta);
    return (
        <Form.Input
          {...input}
          pointing='below'
          error={ (meta.touched && meta.error) }
          fluid
          icon='user'
          iconPosition='left'
          autoComplete='off'
          placeholder='E-mail Address'
        />
    );
  };

  renderPassword({ input, meta }){
    return (
      <Form.Input
        {...input}
        error={ meta.touched && meta.error }
        type='password'
        fluid
        icon='lock'
        placeholder='Password'
        autoComplete='off'
        iconPosition='left'
      />
    )
  }

  render() {
    const { invalid, submitting, submitFailed, handleSubmit } = this.props
    return (
      <Form
        size='large'
        onSubmit={ handleSubmit(this.onSubmit)}>
        <Segment stacked>
          <Field
            name='email'
            component={this.renderEmail}

            validate={
              [
                required({msg: 'Email is required' }),
                email({msg: 'You must provide a valid email address' })
              ]
            }/>
          <Field
            name='password'
            component={this.renderPassword}
            validate={
              [
                required({msg: 'You must provide a password'}),
                length({ minimum: 6, msg: 'Your password must at least be 6 characters long' })
              ]
            }/>
          <Button
            content='Sign Up'
            color='teal'
            fluid size='large'
            disabled={ invalid || submitting || submitFailed }
          />
        </Segment>
      </Form>
    );
  }
}

const asyncValidate = async ({ email }) => {
  console.log(email)
  try {
    const { data } = await axios.post(`/api/user/email`, { email });
    console.log(data);
  } catch (e) {
    throw { email: 'Email already exists'}
  }
}

export default reduxForm({
  form: 'SignUp',
  asyncValidate,
  asyncChangeFields: ['email']
})(SignUp);


