import React, { Component } from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import serializeForm from 'form-serialize'

class SearchBooks extends Component {

	state = {
		books:[],
		query:''
	}

	handleChange = (e) => {
		const value = e.target.value

		this.setState({query:value})

		if (value === '') {
			this.setState({books:[]})
			return
		}
		BooksAPI.search(value,20).then(books => {

			if (books.constructor === Array) {
				books.map(book => {
					const foundBooks = this.props.allBooks.filter(b => b.id === book.id)
					if (foundBooks.length > 0) {
						return book.shelf = foundBooks[0].shelf
					}else {
						return book.shelf = 'none'
					}
				})

			   this.setState({
				  books:books
			   })
		    }else {
		    	this.setState({
				  books:[]
			   })
		    }
		})
	}

	render() {

		const {query,books} = this.state
		const {updateShelf} = this.props
		return (
			<div>
				<div className='search-books'>
 				  <div className='search-books-bar'>
					<Link className="close-search" to='/'>Close</Link>
					<div className='search-books-input-wrapper'>
					   <input type="text" value={query} onChange={this.handleChange} placeholder="Search by title or author"/>
					</div>
 				  </div>
 				  <div>
               		 <BookShelf
                 		type={''}
                  	    books={books}
                  	    updateShelf={updateShelf}
              		 />
            	  </div>
				</div>
			</div>
		)
	}
}

export default SearchBooks
