import React from "react";
import BookSingleCard from "./BookSingleCard";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4">
      {books.map((item) => (
        <BookSingleCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default BookCard;
