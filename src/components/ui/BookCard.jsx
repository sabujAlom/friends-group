import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.id}`} className="card bg-base-100 shadow-lg">
      <figure className="p-6 bg-base-200">
        <img
          src={book.picture}
          alt={book.name}
          className="h-[150px] rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className=" font-bold text-2xl text-center">{book.name}</h2>
        <div className="flex justify-center items-center gap-2">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="text-green-500 badge bg-green-100 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
        <h3 className="text-xl text-center">{book.days_since_contact}d ago</h3>
      

        <div className="card-actions justify-center border-t border-dashed border-gray-300 pt-4 text-xl">
          <div className="flex gap-1 items-center btn btn-soft btn-warning rounded-4xl">
            {book.status}
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
