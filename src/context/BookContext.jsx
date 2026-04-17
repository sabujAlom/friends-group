import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  
  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readList.find(
      (book) => book.id === currentBook.id,
    );
    if (isExistBook) {
      toast.error(`${currentBook.name} is already added to Timeline`);
    } else {
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.name} is added to Timeline`);
    }
    
  };
 




  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
   
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
