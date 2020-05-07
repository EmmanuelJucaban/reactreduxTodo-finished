import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Message } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';


class RegisterForm extends Component {

  renderEmail({ input, meta }){
    return (
      <>
        <Form.Input
          {...input}
          pointing='below'
          error={meta.touched && meta.error}
          fluid
          icon='user'
          iconPosition='left'
          autoComplete='off'
          placeholder='E-mail Address'
        />
      </>
    );
  };

  renderPassword({ input, meta }){
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
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
    const { invalid, submitting, submitFailed } = this.props
    return (
      <Form size='large'>
        <Segment stacked>
          <Field
            name='email'
            component={this.renderEmail}
            validate={
              [
                required({msg: 'Email is required'}),
                email({msg: 'You must provide a valid email address'})
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
          <Button color='teal' fluid size='large' disabled={ invalid || submitting || submitFailed} >
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}


export default reduxForm({ form: 'Signup' })(RegisterForm);
