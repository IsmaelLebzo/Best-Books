import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardInfo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Card key={this.props.element.index} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              {this.props.element.title}
            </Card.Title>
            <Card.Text>
              {this.props.element.description}
            </Card.Text>
            <Card.Text>
              {this.props.element.status}
            </Card.Text>
            <Button onClick={() => { this.props.DeleteBook(this.props.element._id) }}> X </Button>
            <Button onClick={() => { this.props.updateBook(this.props.element) }}> Update </Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default CardInfo;