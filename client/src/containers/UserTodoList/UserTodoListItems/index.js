import React from 'react';
import { Header, List, Button, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default (props) => {
  if (props.todos.length === 0) {
    return <Header key={0}>No todos yet</Header>
  } else {
    return props.todos.map(({_id, completed, text}) => {
      return (
          <List.Item key={_id} style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px'} }>
            <List.Content floated="left" as={Link} to={`/todos/$`}>
              <p style={{ paddingTop: '5px', marginRight: '100px' }}>{text}</p>
            </List.Content>
            <List.Content   floated='right'>
              <Popup
                on='click'
                position='top right'
                trigger={
                  <Button
                    color='blue'
                    content='Mark Complete'
                    size='small' />
                }
                content={
                  <Button
                    color='green'
                    content='Are you sure this is done?'/>
                }
              />
            {/*  /!*<DeleteModal handleClick={this.handleDeleteClick} id={_id} text={text}/>*!/*/}
            </List.Content>
          </List.Item>
      );
    })
  }
}
