import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

/* eslint-disable react/prop-types */
export const Book = ({ book }) => {
  const { dispatch } = useContext(DataContext);
  const handleStatusChange = (newStatus) => {
    // console.log(newStatus, book)
    dispatch({
      type: "STATUS_CHANGE",
      payload: { book: book, newStatus: newStatus },
    });
  };
  return (
    <>
      <li
        key={book.id}
        style={{
          border: "2px grey solid",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign : "center"
        }}
      >
        <img
          src={book.bookCover}
          alt=""
          width={150}
          height={200}
          style={{ borderRadius: "10px", padding: "10px" }}
        />
        <div>
          <p>{book.bookName}</p>
          <p className="author">{book.author}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Status : </label>
          <select
            name="Status"
            id=""
            onChange={(e) => handleStatusChange(e.target.value)}
            defaultValue={book.status}
          >
            <option value="read">Read</option>
            <option value="currently reading">Currently Reading</option>
            <option value="want to read">Want to Read</option>
          </select>
        </div>
      </li>
    </>
  );
};
