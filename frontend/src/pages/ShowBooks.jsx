import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner.jsx";

const ShowBooks = () => {
  const { id } = useParams(); // Correctly use useParams within the component

  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]); // Use singular 'book' if showing details of one book

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); // Add id as a dependency to refetch if it changes

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4 border-sky-400 rounded-3xl">
            <span className="text-xl mr-4  text-gray-500">ID :</span>
            <span className="text-xl mr-4  text-gray-500">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Title :</span>
            <span className="text-xl mr-4  text-gray-500">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Author :</span>
            <span className="text-xl mr-4  text-gray-500">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Created At :</span>
            <span className="text-xl mr-4  text-gray-500">
              {new Date(book.createdAt).toString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Updated At :</span>
            <span className="text-xl mr-4  text-gray-500">
              {new Date(book.updatedAt).toString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
