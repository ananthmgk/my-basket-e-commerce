import { productList } from "../config";
import BasketCard from "./BasketCard";
import { useState } from "react";
import { filterData } from "../uttilites/helper";
import { Link } from "react-router-dom";

const Body = () => {
  const [allProducts, setallProducts] = useState(productList);
  const [filteredProducts, setfilteredProducts] = useState(productList);
  const [searchInput, setSearchInput] = useState("");
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [showCarList, setShowCarList] = useState(false);
  const [showBikeList, setShowBikeList] = useState(false);
  const [showBiscuitList, setShowBiscuitList] = useState(false);
  const [showAppliancesList, setShowAppliancesList] = useState(false);
  const [showHyundaiList, setShowHyundaiList] = useState(false);

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

  const deleteAll1 = () => {
    showCategoryList && setShowBikeList(false);
  };

  const deleteAll = () =>
    showCategoryList && showBikeList ? setShowCategoryList(false) : null;

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
          <button
            className="dropbtn p-2 m-2 px-8 mx-10 bg-yellow-700 hover:bg-yellow-500 text-white rounded-md"
            onClick={() => {
              !showCategoryList
                ? setShowCategoryList(true)
                : setShowCategoryList(false);
              setShowCarList(false);
              setShowBikeList(false);
            }}
          >
            Category
          </button>

          {showCategoryList && (
            <div className="category-list absolute left-0 bg-amber-100 w-40 shadow-lg">
              <Link
                to="/"
                className="car block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => {
                  setShowCarList(true);
                  setShowBikeList(false);
                  setShowBiscuitList(false);
                  setShowAppliancesList(false);
                }}
                // onMouseLeave={() => {
                //   !showCarList ? setShowCarList(false) : setShowCarList(true);
                // }}
              >
                Cars
              </Link>
              <Link
                to="/"
                className="bike block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => {
                  setShowBikeList(true);
                  setShowCarList(false);
                  setShowBiscuitList(false);
                  setShowAppliancesList(false);
                }}
                // onMouseLeave={() => setShowBikeList(false)}
              >
                Bikes
              </Link>
              <Link
                to="/"
                className="biscuit block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => {
                  setShowBiscuitList(true);
                  setShowBikeList(false);
                  setShowAppliancesList(false);
                }}
              >
                Biscuits
              </Link>
              <Link
                to="/"
                className="home-appliances block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => {
                  setShowAppliancesList(true);
                  setShowBiscuitList(false);
                }}
              >
                Home Appliances
              </Link>
            </div>
          )}
          {showCarList && (
            <div className="car-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Hyundai
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Honda
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Maruti
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Skoda
              </Link>
            </div>
          )}
          {showBikeList && (
            <div className="bike-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                TVS
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Bajaj
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Honda
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Yamaha
              </Link>
            </div>
          )}
          {showBiscuitList && (
            <div className="biscuit-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Good Day
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Parle G
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Britannia
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Sunfeast
              </Link>
            </div>
          )}
          {showAppliancesList && (
            <div className="appliance-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                TV
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Refrigerator
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Washing Machine
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Air Conditioner
              </Link>
            </div>
          )}
          {showHyundaiList && (
            <div className="hyundai-model absolute bg-amber-100 w-40 ml-80 shadow-lg">
              <Link to="/" className="block text-black px-3 py-4">
                Santro
              </Link>
              <Link to="/" className="block text-black px-3 py-4">
                I-10
              </Link>
              <Link to="/" className="block text-black px-3 py-4">
                Verna
              </Link>
              <Link to="/" className="block text-black px-3 py-4">
                I-20
              </Link>
            </div>
          )}
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
