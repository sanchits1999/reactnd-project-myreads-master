import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "../src/components/Search"
import Home from "../src/components/Home"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    response: []
  }

  ChangeShelf(book, shelf1, shelf2) {
    if (shelf1 === shelf2) {
      return
    }

    BooksAPI.update(book, shelf2).then(() => {

      const b = book
      b.shelf = shelf2
      this.setState({ response: this.state.response.filter(Book => Book.id !== b.id).concat(b) })

      if (shelf1 !== undefined) {
        alert("Moved " + book.title + " from " + shelf1 + " to " + shelf2)
      }
      else {
        alert("Added " + book.title + " to your " + shelf2 + " List")
      }

    }).catch(() => {

    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState({ response: response })
    }).catch((e) => {
      console.log(e)
    })
  }

  render() {

    console.log(this.state.response)

    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/" exact><Home Savedbooks={this.state.response} ChangeShelf={(book, shelf1, shelf2) => { this.ChangeShelf(book, shelf1, shelf2) }} /></Route>
          <Switch>
            <Route path="/search" exact><Search Savedbooks={this.state.response} ChangeShelf={(book, shelf1, shelf2) => { this.ChangeShelf(book, shelf1, shelf2) }} /></Route>
            <Redirect to="/" from="/" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
