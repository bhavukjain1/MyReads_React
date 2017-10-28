import React, { Component } from 'react';
import BookShelf from './BookShelf'
import './App.css';

class App extends Component {


  render() {

    const bookShelves = [
      {
        type:'Want to Read',
        books:[
            {title:'To Kill a Mockingbird',
            author:'Harper Lee',
            image:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'}
            ]
      }
    ]

    console.log(bookShelves)

    return (
      <div className="App">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
           {bookShelves.map(bookShelf => (
            <div>
              <BookShelf
                type={bookShelf.type}
                books={bookShelf.books}
              />
            </div>
           ))}
        </div>
      </div>
    )
  }
}

export default App;
