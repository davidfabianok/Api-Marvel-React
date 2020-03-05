import React, {useState, useEffect} from "react";
import {SearchContext} from "../context";
import {getCards} from '../api';

const SearchProvider = ({children}) => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCards(search, setCards, setLoading);
  }, [search]);

  return (
    <SearchContext.Provider
      value={{
        cards,
        loading,
        setCards,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
