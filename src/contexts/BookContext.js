import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [Books, setBooks] = useState([
    { title: "name of the wind", id: 1 },
    { title: "the way of kings", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the hero of the ages", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ Books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
