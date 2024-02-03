function Example() {
  const [showDivs, setShowDivs] = useState({});

  function handleClick(name) {
    const newShowDivs = { ...showDivs };
    newShowDivs[name] = !newShowDivs[name];
    setShowDivs(newShowDivs);
  }

  return (
    <div>
      {jsonData.map((data, index) => (
        <div key={index}>
          <button onClick={() => handleClick(data.name)}>
            Show Div {index}
          </button>
          {showDivs[data.name] && <div>{data.name}</div>}
        </div>
      ))}
    </div>
  );
}
// -------------------------------------------------
<div className="category-list absolute left-0 bg-amber-100 w-50 shadow-lg">
  <Link
    to="/"
    className="car block hover:bg-yellow-500 text-black px-3 py-4"
    onMouseEnter={() => {
      setShowCarList(true);
      setShowBikeList(false);
      setShowBiscuitList(false);
      setShowAppliancesList(false);
    }}
  >
    {category[0].name}
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
</div>;
// -----------------------------------------------------------------------
<div>
  <Link
    to="/"
    className="car block hover:bg-yellow-500 text-black px-3 py-4"
    onMouseEnter={() => {
      if (category.id === categories[0].id) {
        setShowCarList(true);
        setShowBikeList(false);
        setShowBiscuitList(false);
        setShowAppliancesList(false);
      }
    }}
  >
    {category[0].name}
  </Link>
</div>;

// --------------------------------
{
  showCarList && (
    <div className="car-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
      <Link to="/" className="block hover:bg-yellow-500 text-black px-3 py-4">
        Hyundai
      </Link>
      <Link to="/" className="block hover:bg-yellow-500 text-black px-3 py-4">
        Honda
      </Link>
      <Link to="/" className="block hover:bg-yellow-500 text-black px-3 py-4">
        Maruti
      </Link>
      <Link to="/" className="block hover:bg-yellow-500 text-black px-3 py-4">
        Skoda
      </Link>
    </div>
  );
}

e.target.innerText === category.name;

import { useRef } from "react";

function App() {
  const otherDivRef = useRef(null);

  const handleClick = () => {
    otherDivRef.current.className = "new-class";
    otherDivRef.current.style.display = "block";
  };

  return (
    <div>
      <button onClick={handleClick}>Show Other Div</button>
      <div className="other-div" ref={otherDivRef}>
        {/* Other div content goes here */}
      </div>
    </div>
  );
}

!showCategoryList ? setShowCategoryList(true) : setShowCategoryList(false);
setShowCarList(false);
setShowBikeList(false);
setShowBiscuitList(false);
setShowAppliancesList(false);
// ----------------------------------------------------------------------

import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      parent_name: "Parent 1",
      children: ["Child 1", "Child 2", "Child 3"],
    },
    {
      id: 2,
      parent_name: "Parent 2",
      children: ["Child 4", "Child 5", "Child 6"],
    },
    {
      id: 3,
      parent_name: "Parent 3",
      children: ["Child 7", "Child 8", "Child 9"],
    },
  ]);
  const [showChildren, setShowChildren] = useState(false);
  const [childrenList, setChildrenList] = useState([]);

  const handleMouseEnter = (children) => {
    setShowChildren(true);
    setChildrenList(children);
  };

  const handleMouseLeave = () => {
    setShowChildren(false);
    setChildrenList([]);
  };

  return (
    <div className="dropdown justify-items-center items-center relative inline-block">
      <button className="dropbtn p-2 m-2 px-8 mx-10 bg-yellow-700 hover:bg-yellow-500 text-white rounded-md">
        Category
      </button>
      <div className="category-list absolute left-0 bg-amber-100 w-40 shadow-lg">
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <div
                className="block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => handleMouseEnter(category.children)}
                onMouseLeave={handleMouseLeave}
              >
                {category.parent_name}
              </div>
              {showChildren && childrenList.length > 0 && (
                <div className="px-3 py-4">
                  {childrenList.map((child) => {
                    return <div key={child}>{child}</div>;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

style={{
        backgroundColor: showBody ? "transparent" : "rgb(201, 76, 76)",
      }}

      {border border-solid border-black}

<div className="category-list border border-solid border-black absolute left-0 bg-amber-100 w-52 shadow-lg">
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