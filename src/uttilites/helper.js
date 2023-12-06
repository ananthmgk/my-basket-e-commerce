export function filterData(searchInput, allProducts) {
  return allProducts.filter((product) =>
    product.desc.toLowerCase().includes(searchInput.toLowerCase())
  );
}
