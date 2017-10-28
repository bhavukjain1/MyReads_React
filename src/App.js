import React, { Component } from 'react';
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css';



class App extends Component {


  state = {
    wantToRead:[],
    currentlyReading:[],
    read:[]
  }

  componentDidMount() {

     BooksAPI.getAll().then(books => {
          this.setState({
            wantToRead: books.filter(book => book.shelf === 'wantToRead'),
            currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
            read: books.filter(book => book.shelf === 'read')
          })
     })

  }

  render() {

    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-title">
             <h1>MyReads</h1>
           </div>
            <div className='list-books-content'>
              <div>
                <BookShelf
                  type={'Want To Read'}
                  books={this.state.wantToRead}
                />
              </div>
              <div>
                <BookShelf
                  type={'Currently Reading'}
                  books={this.state.currentlyReading}
                />
              </div>
              <div>
                <BookShelf
                  type={'Read'}
                  books={this.state.read}
                />
              </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
          </div>
         )}
        />

        <Route path='/search' component={SearchBooks} />
      </div>
    )
  }
}

export default App;
