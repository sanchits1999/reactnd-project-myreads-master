import React from "react"
import { Link } from "react-router-dom"
import Book from "../components/book"

const Home = (props) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            {props.Savedbooks.map((book, index) => {
                                if (book.shelf === "currentlyReading") {
                                    return (
                                        <Book key={book.id} book={book} selected={book.shelf} ChangeShelf={(book, shelf1, shelf2) => { props.ChangeShelf(book, shelf1, shelf2) }} url={book.imageLinks.smallThumbnail === undefined ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail} title={book.title} authors={Array.isArray(book.authors) ? book.authors[0] : null} />
                                    )
                                }
                                return null
                            })}
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            {props.Savedbooks.map((book, index) => {
                                if (book.shelf === "wantToRead") {
                                    return (
                                        <Book key={book.id} book={book} selected={book.shelf} ChangeShelf={(book, shelf1, shelf2) => { props.ChangeShelf(book, shelf1, shelf2) }} url={book.imageLinks.smallThumbnail === undefined ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail} title={book.title} authors={Array.isArray(book.authors) ? book.authors[0] : null} />
                                    )
                                }
                                return null
                            })}
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            {props.Savedbooks.map((book, index) => {
                                if (book.shelf === "read") {
                                    return (
                                        <Book key={book.id} book={book} selected={book.shelf} ChangeShelf={(book, shelf1, shelf2) => { props.ChangeShelf(book, shelf1, shelf2) }} url={book.imageLinks.smallThumbnail === undefined ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail} title={book.title} authors={Array.isArray(book.authors) ? book.authors[0] : null} />
                                    )
                                }
                                return null
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}


export default Home