import React, { useContext, useEffect, useState } from "react";
import BookCard from "../ui/BookCard";
import { BookContext } from "../../context/BookContext";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);

  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "goal") {
        const sortedData = [...readList].sort((a, b) => a.goal - b.goal);
        setFilteredReadList(sortedData);

      } 
    }
  }, [sortingType, readList]);


  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="font-bold text-3xl">No Read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {filteredReadList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
