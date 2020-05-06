import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';


class RegisterForm extends Component {

  render() {
    return (
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default RegisterForm;
