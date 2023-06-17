/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { Books } from "../database/Book";
import { Categories } from "../database/Categories";

export const DataContext = createContext()

const handleBooks = (state, action) => {
    switch (action.type) {
        case "STATUS_CHANGE" : return {...state, books : state.books.map(book => {
            if(book.id === action.payload.book.id) {
                book.status = action.payload.newStatus
            }
            return book;
        })}
        default: return state;
    }
}

export const DataProvider = ({children}) => {
    const [bookDB, dispatch] = useReducer(handleBooks, {books : Books, categories : Categories})
    return (
        <DataContext.Provider value={{bookDB, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}