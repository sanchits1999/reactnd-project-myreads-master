import React from "react"
import * as BooksAPI from "../BooksAPI"
import { Link } from "react-router-dom"
import Book from "../components/book"

class Search extends React.Component {

    state = {
        response: []
    }

    CheckifExists(book) {
        let saved = null
        saved = this.props.Savedbooks.find((b) => {
            return b.id === book.id
        })
        return saved
    }

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/"><button className="close-search">Close</button></Link>
                        <div className="search-books-input-wrapper">
                            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                            <input type="text" placeholder="Search by title or author" onChange={(txt) => {

                                BooksAPI.search(txt.currentTarget.value).then((response) => {
                                    if (Array.isArray(response)) {
                                        this.setState({ response: response })
                                    } else {
                                        this.setState({ response: null })
                                    }

                                }).catch((e) => {
                                    console.log(e)
                                })

                            }} />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {this.state.response != null ? this.state.response.map((book, index) => {
                            if (book.imageLinks === undefined) {
                                return null
                            }
                            let check = this.CheckifExists(book)
                            if (check == null) {
                                return (
                                    <Book key={book.id} book={book} selected={undefined} ChangeShelf={(book, shelf1, shelf2) => { this.props.ChangeShelf(book, shelf1, shelf2) }} url={book.imageLinks.smallThumbnail === undefined ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail} title={book.title} authors={Array.isArray(book.authors) ? book.authors[0] : null} />
                                )
                            }
                            else {
                                return (
                                    <Book key={book.id} book={book} selected={check.shelf} ChangeShelf={(book, shelf1, shelf2) => { this.props.ChangeShelf(book, shelf1, shelf2) }} url={book.imageLinks.smallThumbnail === undefined ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail} title={book.title} authors={Array.isArray(book.authors) ? book.authors[0] : null} />
                                )
                            }
                        }) : <h3>No results for the search keyword. Please try another keyword.</h3>}
                    </div>
                </div>
            </div>

        )
    }
}


export default Search