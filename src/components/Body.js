import { productList } from "../App";
import BasketCard from "./BasketCard";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className="p-2 m-2 bg-purple-500 hover:bg-gray-400 text-white rounded-md">
          Search
        </button>
      </div>
      <div className="flex flex-wrap ">
        {productList.map((products) => {
          return <BasketCard basket={products} key={products.id} />; // {...products} is same.
        })}
      </div>
    </>
  );
};
export default Body;
