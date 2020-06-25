
import React , {Component} from 'react';
import BookContextProvider from './contexts/BookContext'

import Navbar from './components/Navbar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

class App extends Component {

	render() {
		return (
			<div className="App">
				<BookContextProvider>	
					<Navbar />
					<BookList />
					<BookForm />
				</BookContextProvider>
			</div>
		)
	}
}




export default App;















/*import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle'
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext'

function App () {
    return (
        <div className="App">
            <ThemeContextProvider>
            	<AuthContextProvider>
	                <Navbar />
	                <BookList />
	                <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;*/