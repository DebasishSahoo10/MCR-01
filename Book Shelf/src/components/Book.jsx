import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

/* eslint-disable react/prop-types */
export const Book = ({ book }) => {
  const {dispatch} = useContext(DataContext)
  const handleStatusChange = (newStatus) => {
    // console.log(newStatus, book)
    dispatch({type: "STATUS_CHANGE", payload: {book : book, newStatus : newStatus}})
  }
  return (
    <>
      <li
        key={book.id}
        style={{ border: "2px grey solid", borderRadius: "10px" }}
      >
        <img
          src={book.bookCover}
          alt=""
          width={150}
          height={200}
          style={{ borderRadius: "10px", padding: "10px" }}
        />
        <div>
          <p style={{ marginBottom: "0" }}>{book.bookName}</p>
          <p style={{ marginTop: "0" }}>{book.author}</p>
        </div>
        <div style={{display : "flex", flexDirection : "column"}}>
          <label htmlFor="">Status : </label>
          <select name="Status" id="" onChange={(e)=>handleStatusChange(e.target.value)} defaultValue={book.status}>
              <option value="read">Read</option>
              <option value="currently reading">Currently Reading</option>
              <option value="want to read">Want to Read</option>
          </select>
        </div>
      </li>
    </>
  );
};
