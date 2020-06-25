import React, {useContext} from 'react'

import {BookContext} from '../contexts/BookContext'
import BookDetals from './BookDetails'

const BookList = () => {

	const { books } = useContext(BookContext)

	return books.length ? (
		<div className="book-list">
			<ul>
				{books.map(book => {
					return (<BookDetals book={book} key={book.id} />)
				})}
			</ul>
		</div>
	) : (
		<div className="empty">
			No books to read. Hello free time :)
		</div>
	)
}

export default BookList