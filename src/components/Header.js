const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 pl-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_X6EQ9w7xw2LB_QX9wcbzq0e5HjBmKN1f4w&usqp=CAU"
        alt="Logo"
      ></img>
    </a>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Contact</li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
