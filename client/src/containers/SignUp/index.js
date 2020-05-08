import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signUp } from '../../actions/auth';



class SignUp extends Component {

  onSignUp = formProps => {
    this.props.signUp(formProps, () => {
      this.props.history.push('/counter');
    });
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
    console.log(authError)
    return (
      <Form
        size='large'
        onSubmit={ handleSubmit(this.onSignUp)}
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
                length({ minimum: 6, msg: 'Your password must at least be 6 characters long' })
              ]
            }/>
          <Button
            content='Sign Up'
            color='teal'
            fluid size='large'
            disabled={ invalid || submitting || submitFailed || !!authError}
          />
        </Segment>
      </Form>
    );
  }
}

function mapStateToProps({auth: { authenticated, authError }}) {
  return { authenticated, authError };
}

export default compose(
  reduxForm({ form: 'Signup' }),
  connect(mapStateToProps, { signUp })
)(SignUp);

