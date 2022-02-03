import React, { Component } from 'react';
import { Link, Router, Route, browserHistory, useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import BookCard from './BookCard.js';


class ShowBookDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            book: {}
        }
    }

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

    render(){
        return (
            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/create-book" className="btn btn-outline-warning float-left">
                                Add Book
                            </Link>
                            <Link to={'/edit-book/'+this.props.match.params.id} className="btn btn-outline-warning float-right">
                                Edit Book
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">{this.state.book.title}</h1>
                            <p className=''>{this.state.book.title}</p>
                            <p className=''>{this.state.book.isbn}</p>
                            <p className=''>{this.state.book.author}</p>
                            <p className=''>{this.state.book.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowBookDetails;