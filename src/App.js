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

  updateShelf = (book,shelf) => {
    this.setState((state) => ({
        wantToRead: state.wantToRead.filter(currentBook => currentBook.id !== book.id),
        currentlyReading: state.currentlyReading.filter(currentBook => currentBook.id !== book.id),
        read: state.read.filter(currentBook => currentBook.id !== book.id)
    }))

    book.shelf = shelf

    switch(shelf) {
      case 'wantToRead':
          this.setState((state) => ({
            wantToRead: state.wantToRead.concat([book])
          }))
          break
      case 'currentlyReading':
          this.setState((state) => ({
            currentlyReading: state.currentlyReading.concat([book])
          }))
          break
      case 'read':
          this.setState((state) => ({
            read: state.read.concat([book])
          }))
          break
      default:
          break
    }

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
                  type={'Currently Reading'}
                  books={this.state.currentlyReading}
                  updateShelf={this.updateShelf}
                />
              </div>
              <div>
                <BookShelf
                  type={'Want To Read'}
                  books={this.state.wantToRead}
                  updateShelf={this.updateShelf}
                />
              </div>
              <div>
                <BookShelf
                  type={'Read'}
                  books={this.state.read}
                  updateShelf={this.updateShelf}
                />
              </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
          </div>
         )}
        />

        <Route path='/search' render={() => (
            <SearchBooks
              updateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default App;
