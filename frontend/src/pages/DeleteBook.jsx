import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, "check in the console");
      });
  };
  const back = () => {
    setLoading(false);
    navigate("/");
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-4 ">
        <h3 className="text-2xl">Are,You sure want to Delete the Book.</h3>
        <div className="flex items-center justify-center">
          <button
            className="px-5 py-2 rounded-lg bg-red-500 text-white w-full m-2 hover:bg-red-600 transition-all duration-300 ease-in-out"
            onClick={handleDeleteBook}
          >
            Yes
          </button>

          <button
            className="px-5 py-2 rounded-lg bg-sky-500 text-white w-full m-2 hover:bg-sky-600 transition-all duration-300 ease-in-out"
            onClick={back}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
