import React from "react";
import Form from 'react-bootstrap/Form';
import { withAuth0 } from '@auth0/auth0-react';

class FormInfo extends React.Component{
    render(){
        // const {user} = this.props.auth0;
        return(
            <>
              <Form onSubmit={this.props.bookAddFun}  >
                    <Form.Group className="FormInfo" controlId="FormInfo">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Enter Title of the book" />
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' placeholder="Enter Description of the book" />
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name='status' placeholder="Enter Status of the book" />
                        <input type="submit" value="Add Book" />
                    </Form.Group>
                </Form>
            </>
        )
    }
}
export default withAuth0(FormInfo);