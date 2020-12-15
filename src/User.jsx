import React from "react";
import { Card, Button } from 'react-bootstrap';

function User(props){
  console.log(props);
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.desg}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

export default User;