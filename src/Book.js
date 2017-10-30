import React, { Component } from 'react';
import SelectOption from './SelectOption'
import PropTypes from 'prop-types'

class Book extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired,
		updateShelf:PropTypes.func.isRequired
	}


	render() {
		const {book,updateShelf} = this.props

		return (
			<div className='book'>
			   <div className='book-top'>

			      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks == null ? '':book.imageLinks.thumbnail})` }}></div>
                  <SelectOption
                  	book={book}
                  	updateShelf={updateShelf}
                  />
			   </div>
			   <div className="book-title">{book.title}</div>
               <div className="book-authors">{book.authors == null ? '': book.authors.join(', ')}</div>
			</div>
			)
	}
}

export default Book
