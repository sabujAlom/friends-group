import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-lg">
            <figure className="p-6 bg-base-200 ">
              <img src={book.image} alt={book.bookName} className="h-[250px] rounded-xl" />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                {book.tags.map((tag , ind) => (
                  <div key={ind} className="text-green-500 badge bg-green-100 font-bold">{tag}</div>
                ))}
              </div>
              <h2 className="card-title font-bold text-2xl">
                {book.bookName}
              </h2>
              <p className="font-semibold text-lg">{book.author}</p>
              
              <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                <div className="font-semibold ">{book.category}</div>
                <div className="flex gap-1 items-center">{book.rating}<FaRegStar /></div>
              </div>
            </div>
          </Link>
    );
};

export default BookCard;
