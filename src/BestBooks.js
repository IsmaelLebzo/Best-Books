import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';



class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      BookData: [],
      searchQuery: ''
    }
  }
compMount = async () => {
  let email1 = this.props.auth0.user.email;
  let BookUrl = `${process.env.REACT_APP_SERVER_LINK}/books?email=${email1}`;
  let bokData = await axios.get(BookUrl);
    await this.setState({
    BookData: bokData.data
  })
  console.log(this.state.BookData);
  console.log(BookUrl);
  console.log(bokData);
}


  render() {
    
    console.log(this.state.BookData);
    return(
      <>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
      {this.state.BookData.map((ele, index) => {
        return(
          <Card key={index} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ele.title}
          </Card.Title>
          <Card.Text>
          {ele.description}
          </Card.Text>
          <Card.Text>
          {ele.status}
          </Card.Text>
          <Card.Text>
          {ele.email}
          </Card.Text>
          </Card.Body>
      </Card>
        )
      })}
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
