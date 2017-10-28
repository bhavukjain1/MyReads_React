import React, { Component } from 'react';
import BookShelf from './BookShelf'
import './App.css';
import * as BooksAPI from './BooksAPI'

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

    const bookShelves =
      {
        type:'Want to Read',
        books:[
            {title:'To Kill a Mockingbird',
            author:'Harper Lee',
            image:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'}
            ]
      }


    // const bookShelf =

    console.log(bookShelves)

    return (
      <div className="App">
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
      </div>
    )
  }
}

export default App;
