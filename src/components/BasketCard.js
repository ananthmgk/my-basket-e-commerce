const BasketCard = (props) => {
  return (
    <div className=" m-3 w-52 rounded-lg shadow-2xl">
      <img
        className="w-full"
        src={props.basket.images[0].m}
        alt="Product Name"
      />
      <h3 className="px-3 font-light">{props.basket.brand.name}</h3>
      <h2 className="px-3 font-bold">{props.basket.desc}</h2>
      <h3 className="px-3">{props.basket.w}</h3>
      <h3 className="px-3 font-semibold">
        {"₹" + " " + props.basket.pricing.discount.subscription_price}
      </h3>
      <button className="px-3">Add to Cart</button>
    </div>
  );
};
export default BasketCard;
