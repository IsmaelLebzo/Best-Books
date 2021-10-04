import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateBook extends React.Component {
    sendFun = (e) => {
        e.preventDefault();
        this.props.sendFun(e);
    }

    render() {
        return (
            <>
                <Form onSubmit={(e) => { this.sendFun(e) }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' defaultValue={this.props.UInfo.title} />
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' defaultValue={this.props.UInfo.description} />
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name='status' defaultValue={this.props.UInfo.status} />
                        <Button type='submit'> Save </Button>
                    </Form.Group>
                </Form>
            </>
        )
    }
}
export default UpdateBook;