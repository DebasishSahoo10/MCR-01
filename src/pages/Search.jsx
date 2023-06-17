import { Book } from "../components/Book";
import { Nav } from "../components/Nav";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export const Search = () => {
  const {bookDB} = useContext(DataContext)
  const [filterKeys, setFilterKeys] = useState("");
  const filteredBooks = bookDB.books.filter(book => book.bookName.toLowerCase().includes(filterKeys.toLowerCase()))
  return (
    <>
      <Nav />
      <h1>This is Your Search</h1>
      <input
        type="text"
        style={{ width: "600px", height: "50px" }}
        placeholder="   Search the name of your book here"
        onChange={(e) => setFilterKeys(e.target.value)}
      />
      {filteredBooks.length===0 && <h2>No Books Matched. Clear the input field to show all the books</h2>}
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {filteredBooks.map((book) => {
          return <Book book={book} key={book.id} />;
        })}
      </ul>
    </>
  );
};
