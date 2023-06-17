import { useContext } from "react";
import { Nav } from "../components/Nav";
import { DataContext } from "../contexts/DataContext";
import {Book} from "../components/Book"

export const Home = () => {
  const {bookDB} = useContext(DataContext)
  return (
    <>
      <Nav/>
      <h1>This is Your Library</h1>
      <div>
        <ul>
          {bookDB.categories.map(cat => {
            return (
              <li key={cat}>
                <h3>{cat}</h3>
                <div style={{display: "flex", gap : "20px"}}>
                {bookDB.books.filter(book => book.status === cat).map(book => {
                  return (
                    <Book book={book} key={book.id}/>
                  )
                } )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
};
