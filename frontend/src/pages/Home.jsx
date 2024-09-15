import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookCard from "../components/Home/BookCard.jsx";
import BookTable from "../components/Home/BookTable.jsx";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.books || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-500 hover:bg-sky-700 py-1 rounded-md text-white px-2"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-700 py-1 rounded-md text-white px-2"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="items-center flex justify-between">
        <h1 className="text-3xl my-8">Book Lists</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-3xl text-sky-400 cursor-pointer" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
