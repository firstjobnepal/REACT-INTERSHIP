import React, { useState, useEffect } from "react";

const SearchFilter = () => {
  const [curr, setCurr] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data.products);
    setCurr(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="enter the product name"
        onChange={(e) => e.target.value}
      />
      {curr.map((value, index) => {
        return <div key={index}>{value.title}</div>;
      })}
    </div>
  );
};

export default SearchFilter;
