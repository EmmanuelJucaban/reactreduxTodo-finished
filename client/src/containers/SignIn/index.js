import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';





class SignIn extends Component {
  onSignIn = async (formProps, dispatch)  => {
      try {
        const {data} = await axios.post('/api/auth/signin', formProps);
        localStorage.setItem('token', data.token);
        dispatch({ type: 'AUTH_USER', payload: data.token });
      } catch (e) {
        throw new SubmissionError({
          email: 'Wrong email',
          password: 'Wrong password',
          _error: 'Login failed',
        });
      }
  }
  renderEmail({ input, meta, authError }){
    return (
        <Form.Input
          {...input}
          pointing='below'
          error={ authError || (meta.touched && meta.error)}
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
        error={meta.touched && meta.error }
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
    console.log(this.props);
    const { invalid, submitting, submitFailed, handleSubmit, authError } = this.props
    return (
      <Form
        size='large'
        onSubmit={ handleSubmit(this.onSignIn)}
        error={!!authError}>
        <Segment stacked>
          <Field
            name='email'
            component={this.renderEmail}
            authError={authError}
            validate={
              [
                required({msg: authError || 'Email is required'}),
                email({msg: 'You must provide a valid email address'})
              ]
            }/>
          <Field
            name='password'
            component={this.renderPassword}
            validate={
              [
                required({msg: 'You must provide a password'}),
              ]
            }/>
          <Button
            content='Sign In'
            color='teal'
            fluid size='large'
            disabled={ invalid || submitting || submitFailed }
          />
        </Segment>
      </Form>
    );
  }
}



export default reduxForm({ form: 'SignIn' })(SignIn)


