import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class BookCard extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="col-md-8 m-auto">
                <h2 className="lead">
                    {this.props.book.title}
                </h2>
                <p>{this.props.book.description}</p>
                <Link to={`/show-book/${this.props.book._id}`}>View</Link>
                <hr></hr>
            </div>
        )
    }
}

export default BookCard;