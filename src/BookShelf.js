import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {

   static PropTypes = {
   	  shelfType: PropTypes.string.isRequired,
   	  books: PropTypes.array.isRequired
   }

   render() {

   	  const {type, books} = this.props

	  return (
	     <div>
	     	<div className='bookshelf'>
	     		<h2 className="bookshelf-title">{shelfType}</h2>
	     		<div className='bookshelf-books'>
	     			<ol className='books-grid'>
                       {books.map(book => (
                         <li>
                         	<Book
                         	  book:{book}
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
