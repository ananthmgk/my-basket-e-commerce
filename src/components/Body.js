import { productList } from "../config";
import BasketCard from "./BasketCard";
import { useEffect, useState } from "react";
import { filterData } from "../uttilites/helper";

const Body = () => {
  const [allProducts, setallProducts] = useState(productList);
  const [filteredProducts, setfilteredProducts] = useState(productList);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const data = await fetch(
  //     "https://www.bigbasket.com/listing-svc/v2/products?type=pc&slug=exotic-fruits&page=1"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  // }

  return (
    <>
      <div className="p-5 bg-pink-50 my-5 ">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-500 hover:bg-gray-400 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allProducts);
            setfilteredProducts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap ">
        {filteredProducts.length == 0 ? (
          <h1>No Product match your Filter!!</h1>
        ) : (
          filteredProducts.map((products) => {
            return <BasketCard basket={products} key={products.id} />; // {...products} is same.
          })
        )}
      </div>
    </>
  );
};
export default Body;
