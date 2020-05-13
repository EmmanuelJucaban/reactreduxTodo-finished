import React from 'react';
import { Header, List, Button, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import DeleteModal from './../../../components/TodoDeleteModal';

export default (props) => {
  if (props.todos.length === 0) {
    return <Header key={0}>No todos yet</Header>
  } else {
    return props.todos.map(({_id, completed, text}) => {
      return (
          <List.Item key={_id} >
            <List.Content floated="left" as={Link} to={`/todos/${_id}`}>
              <p style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px'}}>{text}</p>
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
                    content='Are you sure this is done?'
                    onClick={() => props.handleComplete(_id, completed, text)}/>
                }
              />
              <DeleteModal handleClick={props.handleDelete} id={_id} text={text}/>
            </List.Content>
          </List.Item>
      );
    });
  }
}
