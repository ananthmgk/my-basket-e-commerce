<button
className="dropbtn p-2 m-2 px-8 mx-10 bg-yellow-700 hover:bg-yellow-500 text-white rounded-md"
onClick={() => {
!showCategoryList
? setShowCategoryList(true)
: setShowCategoryList(false);
setShowCarList(false);
setShowBikeList(false);
}} >
Category
</button>
