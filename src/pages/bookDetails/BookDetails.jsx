// import React, { use } from 'react';

import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";
import { MdAutoDelete, MdOutlineSnooze, MdOutlineTextsms } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { BsTelephonePlus } from "react-icons/bs";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { id:bookParamsId } = useParams();
  // console.log(bookId, "bookId")

  // const books = use(booksPromise);
  const books = useLoaderData();
  // console.log("books", bookId);
  const expectedBook = books?.find(
    (book) => book.id === Number(bookParamsId),
  );
  const {
    id,
    name,
    
    picture,
    email,
    days_since_contact,
    
    status,
    tags,
    bio,
    goal,
    next_due_date,
    
  } = expectedBook;
  //   console.log(expectedBook);
  
const {handleMarkAsRead, handleWishList} = useContext(BookContext);


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Side - Profile */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 shadow-sm">

              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <img
                  src={picture}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
                />
              </div>

              {/* Name */}
              <h1 className="text-3xl font-semibold text-center mb-4">
                {name}
              </h1>

              {/* Status Badges */}
              <div className="flex justify-center gap-3 mb-6">
                <span className="px-5 py-1.5 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                  {status}
                </span>
                <span className="px-5 py-1.5 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                  {tags[0]}
                </span>
              </div>

              {/* Bio */}
              <div className="text-center mb-8">
                <p className="text-gray-600 italic">"{bio}"</p>
                <p className="text-xs text-gray-400 mt-3">Preferred: {email}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 border border-gray-300 rounded-2xl hover:bg-gray-50 flex items-center justify-center gap-2">
                  <MdOutlineSnooze />
                    Snooze 2 Weeks
                </button>
                <button className="w-full py-3 border border-gray-300 rounded-2xl hover:bg-gray-50 flex items-center justify-center gap-2">
                  <FaFileArchive />
                    Archive
                </button>
                <button className="w-full py-3 text-red-600 hover:bg-red-50 rounded-2xl flex items-center justify-center gap-2">
                  <MdAutoDelete />
                    Delete
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Quick Actions */}
          <div className="lg:col-span-7 space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-3xl p-6 text-center">
                <p className="text-4xl font-bold text-gray-800">{days_since_contact}</p>
                <p className="text-sm text-gray-500 mt-2">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-3xl p-6 text-center">
                <p className="text-4xl font-bold text-gray-800">{goal}</p>
                <p className="text-sm text-gray-500 mt-2">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-3xl p-6 text-center">
                <p className="text-xl font-semibold text-gray-800">{next_due_date}</p>
                <p className="text-sm text-gray-500 mt-2">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="bg-white rounded-3xl p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Relationship Goal</h3>
                  <p className="text-gray-600 mt-1">Connect every {goal} days</p>
                </div>
                <button className="px-6 py-2 border border-gray-300 rounded-2xl text-sm hover:bg-gray-50">
                  Edit
                </button>
              </div>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white rounded-3xl p-6">
              <h3 className="font-semibold text-lg mb-5">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center py-8 border border-gray-200 rounded-2xl hover:bg-gray-50 transition">
                  <BsTelephonePlus />
                  <span className="mt-3 text-sm font-medium">Call</span>
                </button>
                <button className="flex flex-col items-center py-8 border border-gray-200 rounded-2xl hover:bg-gray-50 transition">
                  <MdOutlineTextsms />
                  <span className="mt-3 text-sm font-medium">Text</span>
                </button>
                <button className="flex flex-col items-center py-8 border border-gray-200 rounded-2xl hover:bg-gray-50 transition">
                  <IoVideocamOutline />
                  <span className="mt-3 text-sm font-medium">Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
