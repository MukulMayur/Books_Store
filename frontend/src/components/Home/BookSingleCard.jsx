import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
const BookSingleCard = ({ item }) => {
  return (
    <div
      key={item._id}
      className="border-2 border-gray-400 rounded-xl px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-500 text-white  rounded-lg">
        {item.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{item._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-2xl text-red-300" />
        <h2 className="my-1">{item.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-2xl text-red-300" />
        <h2 className="my-1">{item.author}</h2>
      </div>
      <div className="flex items-center justify-between mt-2 gap-x-2 p-4">
        <Link to={`/books/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-green-400" />
        </Link>
        <Link to={`/books/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600" />
        </Link>
        <Link to={`/books/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
