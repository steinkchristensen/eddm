import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: []
    };
  }

  onChange = e => {
    this.setState({book: {[e.target.name]: e.target.value }});
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state.book._id);
    axios
      .put('http://localhost:8082/api/books/'+this.props.match.params.id, this.state.book)
      .then(res => {
          
        alert(this.props.match.params.id);
        this.props.history.push('/show-book/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

    componentDidMount(){
        console.log(this.props.match.params.id);
        axios
        .get('http://localhost:8082/api/books/'+this.props.match.params.id)
        .then(res => {
            console.log("Print-showBookDetails-API-response: " + res.data);
            this.setState({
                book: res.data
            })
        })
        .catch(err => {
            console.log("Error in ShowBook!"+err);
        })
    };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">
                  Update book
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.book.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={this.state.book.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.book.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    value={this.state.book.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.book.published_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={this.state.book.publisher}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;