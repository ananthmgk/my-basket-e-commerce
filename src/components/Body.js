import { productList } from "../config";
import BasketCard from "./BasketCard";
import { useState } from "react";
import { filterData } from "../uttilites/helper";
import { Link } from "react-router-dom";

const Body = () => {
  const [allProducts, setallProducts] = useState(productList);
  const [filteredProducts, setfilteredProducts] = useState(productList);
  const [searchInput, setSearchInput] = useState("");

  const searchedData = () => {
    const data = filterData(searchInput, allProducts);
    setfilteredProducts(data);
  };

  function debounceing(func) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(args);
      }, 1000);
    };
  }

  const starterDebounce = debounceing(searchedData);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const data = await fetch(
  //     "https://www.bigbasket.com/listing-svc/v2/products?type=pc&slug=exotic-fruits&page=1"

  //     // {
  //     //   headers: {
  //     //     cookie: '_bb_vid=MTE2OTc3NjU1NzY=;_bb_aid="Mjk5MDkyNDU2NQ==";',
  //     //     credentials: "include",
  //     //   },
  //     // }
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
          onKeyUp={starterDebounce}
        />
        <button
          className="p-2 m-2 bg-purple-500 hover:bg-gray-400 text-white rounded-md"
          onClick={searchedData}
        >
          Search
        </button>
        <div className="dropdown justify-items-center items-center relative inline-block">
          <button className="dropbtn p-2 m-2 px-8 mx-10 bg-yellow-700 hover:bg-yellow-500 text-white rounded-md">
            Category
          </button>
          <div className="dropdown-content absolute hidden bg-amber-100 min-w-40 shadow-lg">
            <Link to="/" className="block text-black px-3 py-4">
              Level 1a
            </Link>
            <Link to="/" className="block text-black px-3 py-4">
              Level 1b
            </Link>
            <Link to="/" className="block text-black px-3 py-4">
              Level 1c
            </Link>
            <Link to="/" className="block text-black px-3 py-4">
              Level 1d
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredProducts.length == 0 ? (
          <h1>No Product match your Filter!!</h1>
        ) : (
          filteredProducts.map((products) => {
            return (
              <Link to={"product/" + products.id} key={products.id}>
                <BasketCard basket={products} />
              </Link>
            ); // {...products} is same.
          })
        )}
      </div>
    </>
  );
};
export default Body;
