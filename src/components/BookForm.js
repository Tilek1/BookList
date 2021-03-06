import React , {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

const BookForm = () => {
	const {dispatch} = useContext(BookContext)
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');	

const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({type: 'ADD_BOOK', book: {
			title,
			author
		}});
		setTitle('');
		setAuthor('');
	}

	return (

		<form onSubmit={(e) => handleSubmit(e)}>
			<input type="text" value={title} placeholder="book title" onChange={(e) => setTitle(e.target.value)} required/>
			<input type="text" value={author} placeholder="author" onChange={(e) => setAuthor(e.target.value)} required />
			<button>Add book</button>
		</form>
	)	
}

export default BookForm;