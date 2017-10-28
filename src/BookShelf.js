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
                         <li>
                         	<div className='book'>
			   <div className='book-top'>
			      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.image})` }}></div>
                  <SelectOption />
			   </div>
			   <div className="book-title">{book.title}</div>
               <div className="book-authors">{book.author}</div>
			</div>
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
