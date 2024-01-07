<button
  className="dropbtn p-2 m-2 px-8 mx-10 bg-yellow-700 hover:bg-yellow-500 text-white rounded-md"
  onClick={() => {
    "show the div";
  }}
>
  Category
</button>;
<div className="category-list absolute left-0 bg-amber-100 w-40 shadow-lg">
  <Link to="/" className="car block hover:bg-yellow-500 text-black px-3 py-4">
    Cars
  </Link>
</div>;

// ----------------------------------------

import React, { useState } from "react";

function Example() {
  const [showDivs, setShowDivs] = useState([]);

  function handleClick(index) {
    const newShowDivs = [...showDivs];
    newShowDivs[index] = !newShowDivs[index];
    setShowDivs(newShowDivs);
  }

  return (
    <div>
      {apiData.map((data, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>Show Div {index}</button>
          {showDivs[index] && <div>This is div {index}.</div>}
        </div>
      ))}
    </div>
  );
}
