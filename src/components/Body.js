import { productList } from "../config";
import BasketCard from "./BasketCard";
import { useState } from "react";
import { filterData } from "../uttilites/helper";
import { Link } from "react-router-dom";
import { categoriesList } from "../config";
import { useRef } from "react";

// ---------------------------------------------------------

// ---------------------------------------------------

const Body = () => {
  const [allProducts, setallProducts] = useState(productList);
  const [filteredProducts, setfilteredProducts] = useState(productList);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState(categoriesList);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [showBody, setShowBody] = useState(true);
  //
  const [firstChildrenList, setFirstChildrenList] = useState([]);
  const [secondChildrenList, setSecondChildrenList] = useState([]);
  //
  const firstChildrenRef = useRef(null);
  const secondChildrenRef = useRef(null);

  const handleMouseEnterOne = (children) => {
    setFirstChildrenList(children);
  };
  const handleMouseEnterTwo = (children) => {
    setSecondChildrenList(children);
  };

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
  // ---------------------------------------------------
  // const handleClick = () => {
  //   setShowBody(!showBody);
  // };

  // ------------------------------------------------

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
      <div className="p-5 bg-pink-50 my-5">
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
        <div className="dropdown justify-items-center relative items-center inline-block">
          <button
            className="dropbtn p-2 m-2 px-8 mx-10 w-204 bg-yellow-700 hover:bg-yellow-500 text-white rounded-md"
            onClick={() => {
              showCategoryList
                ? setShowCategoryList(false)
                : setShowCategoryList(true);
              setFirstChildrenList([]);
              setSecondChildrenList([]);
              // setShowBody(!showBody);
            }}
          >
            Category
          </button>

          {showCategoryList && (
            <div>
              <div
                className="blur"
                // style={{
                //   backgroundImage: showBody
                //     ? null
                //     : "url('https://img.freepik.com/premium-vector/shadow-overlays-transparent-background_165488-5937.jpg?size=626&ext=jpg&ga=GA1.1.56773865.1706954447&semt=ais')",
                //   height: "100vh",
                //   width: "100vw",
                //   fontSize: "15px",
                //   backgroundSize: "cover",
                //   backgroundRepeat: "no-repeat",
                // }}
              ></div>
              <div className="category-list absolute left-0 bg-amber-100 w-52 shadow-lg">
                {categories.map((category) => {
                  return (
                    <Link
                      className="block hover:bg-yellow-500 text-black px-3 py-4"
                      key={category.id}
                      onMouseEnter={() => {
                        handleMouseEnterOne(category.children);
                        firstChildrenRef.current.style.display = "block";
                        setSecondChildrenList([]);
                      }}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
              <div
                className="firstchildren-list absolute bg-amber-100 w-48 ml-52 shadow-lg"
                ref={firstChildrenRef}
              >
                {firstChildrenList.map((childL1) => {
                  return (
                    <Link
                      to="/"
                      className="block hover:bg-yellow-500 text-black px-3 py-4"
                      key={childL1.id}
                      onMouseEnter={() => {
                        handleMouseEnterTwo(childL1.children);
                        secondChildrenRef.current.style.display = "block";
                      }}
                    >
                      {childL1.name}
                    </Link>
                  );
                })}
              </div>
              <div
                className="secondchildren-list absolute bg-amber-100 w-52 ml-96 shadow-lg"
                ref={secondChildrenRef}
              >
                {secondChildrenList.map((childL2) => {
                  return (
                    <Link
                      to="/"
                      className="block hover:bg-yellow-500 text-black px-3 py-4"
                      key={childL2.id}
                    >
                      {childL2.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="flex flex-wrap"
        // style={{ opacity: showBody ? "1.0" : "0.2" }}
      >
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
