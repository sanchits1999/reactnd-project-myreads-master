import React from "react"

const Book = (props) => {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + props.url + ")" }}></div>
                <div className="book-shelf-changer">
                    <select value={props.selected} onChange={(event) => {
                        switch (event.currentTarget.value) {
                            case "currentlyReading": props.ChangeShelf(props.book, props.selected, "currentlyReading")
                                break
                            case "wantToRead": props.ChangeShelf(props.book, props.selected, "wantToRead")
                                break
                            case "read": props.ChangeShelf(props.book, props.selected, "read")
                                break
                            case "none": props.ChangeShelf(props.book, props.selected, "none")
                                break
                            default: break
                        }
                    }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors}</div>
        </div>
    )
}

export default Book