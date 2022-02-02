import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render (){
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<ShowBookList/>} />
            <Route exact path='/create-book' element={<CreateBook />} />
            <Route path='/show-book/:id' element={<ShowBookDetails/>} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;