import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import BookCard from './BookCard.js';

class ShowBookList extends Component {
    constructor(props) {
        super(props);
        this.state={
            books: []
        }
    }

    componentDidMount(){
        console.log("Print id: " + this.props.books);

        axios
        .get('http://localhost:8082/api/books')
        .then(res => {
            console.log("Print-showBookDetails-API-response: " + res.data);
           this.setState({
                books: res.data
            })
        })
        .catch(err => {
            console.log("Error in ShowBook!"+err);
        })
    };

    render(){
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
                            <h1 className="display-4 text-center">View Books</h1>
                            <div className='form-group'>
                            </div>
                        </div>
                        <div className="col-md-8 m-auto">
                            {
                                this.state.books.map(function(o,i){
                                    console.log(JSON.stringify(o));
                                    return <BookCard book={o}/>
                                   
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowBookList;