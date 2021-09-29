import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Book from './components/Book';
import CardInfo from './components/CardInfo';
import Form from './components/Form';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      BookData: [],
      searchQuery: '',
      showBookInfo: false
    }
  }
componentDidMount = async () => {
  let email1 = this.props.auth0.user.email;
  let BookUrl = `${process.env.REACT_APP_SERVER_LINK}/books?email=${email1}`;
  let bokData = await axios.get(BookUrl);
    this.setState({
    BookData: bokData.data
  })
  console.log(this.state.BookData);
  console.log(BookUrl);
  console.log(bokData);
}

addBook = async(e) =>{
  e.preventDefault();

  let bookInfoData = {
    title: e.target.title.value,
    description: e.target.description.value,
    status: e.target.description.value,
    email: this.props.auth0.user.email
  }
  let newBook = await axios.post(`${process.env.REACT_APP_SERVER_LINK}/addBook`, bookInfoData);
  this.setState({
    BookData: newBook.data
  })
}

deleteBook = async(id) =>{
  let removeBook = await axios.delete(`${process.env.REACT_APP_SERVER_LINK}/deleteBooks?bookID=${id}&email=${this.props.auth0.user.email}`)
  await this.setState({
    BookData: removeBook.data
  })
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
        <Form bookAddFun = {this.addBook}/>
        {this.state.BookData.map((ele, idx) => {
        return <CardInfo key={idx} element={ele} DeleteBook={this.deleteBook} />
      })}
        {this.state.showBookInfo && 
      this.state.book.map((item, idx) => {
        return(<Book key={idx} book={item} DeleteBook={this.deleteBook} />)
      })
      }
      
      </Jumbotron>
     
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
