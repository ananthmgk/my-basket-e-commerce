import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../config";
// import Footer from "./Footer";

// console.log(productList[0].id);

const findId = productList.map((products) => products.id);

const setId = findId.map((num, i) => ({ [num]: i }));
// console.log(setId);

// const key = "30009286";

const ProductMenu = () => {
  const params = useParams();
  const prodId = params.prodId;
  const [product, setproduct] = useState(null);

  const value = setId.find((obj) => obj.hasOwnProperty(prodId))[prodId];
  // console.log(value);

  useEffect(() => {
    getProductInfo();
  }, []);

  async function getProductInfo() {
    const data = await fetch(
      "https://www.bigbasket.com/api/cookbook/recipes?sku_id=" + prodId
    );
    const json = await data.json();
    setproduct(json);
  }

  return !product ? null : (
    <div>
      <div>
        <img src={productList[value].images[0].m} alt="Product Name" />
      </div>
      <div>
        <h2>{productList[value].brand.name}</h2>
        <h2>
          {productList[value].brand.name +
            " " +
            productList[value].desc +
            "," +
            " " +
            productList[value].w}
        </h2>
        <h2>MRP.₹{productList[value].pricing.discount.mrp}</h2>
        <h1>Price: ₹{productList[value].pricing.discount.prim_price.sp}</h1>
        <h1>You Save:{productList[value].pricing.discount.d_text}</h1>
        <h2>(Inclusive of all taxes)</h2>
        <button>Add to basket</button>
      </div>
      <div>
        <img src={product.recipes[0].image} />
        <h1>Recipe name : {product?.recipes[0]?.name}</h1>
      </div>
    </div>
  );
};
export default ProductMenu;
