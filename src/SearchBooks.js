import React, { Component } from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import serializeForm from 'form-serialize'

class SearchBooks extends Component {

	state = {
		books:[]
	}

	handleChange = (e) => {
		const value = e.target.value
		if (value === '') {
			this.setState({books:[]})
			return
		}
		BooksAPI.search(value,20).then(books => {
			console.log(books)
			if (books.constructor === Array) {
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
		return (
			<div>
				<div className='search-books'>
 				  <div className='search-books-bar'>
					<Link className="close-search" to='/'>Close</Link>
					<div className='search-books-input-wrapper'>
					   <input type="text" onChange={this.handleChange} placeholder="Search by title or author"/>
					</div>
 				  </div>
 				  <div>
               		 <BookShelf
                 		type={''}
                  	    books={this.state.books}
              		 />
            	  </div>
				</div>
			</div>
		)
	}
}

export default SearchBooks
