import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {

   static PropTypes = {
   	  type: PropTypes.string.isRequired,
   	  books: PropTypes.array.isRequired
   }

   render() {

   	  const {type, books} = this.props

	  return (
	     <div>
	     	<div className='bookshelf'>
	     		<h2 className="bookshelf-title">{type}</h2>
	     		<div className='bookshelf-books'>
	     			<ol className='books-grid'>
                       {books.map(book => (
                         <li key={book.id}>
                         	<Book
                         	  book={book}
                         	/>
                         </li>
                       ))}
	     			</ol>
	     		</div>
	     	</div>
	     </div>
	  )
   }
}

export default BookShelf
