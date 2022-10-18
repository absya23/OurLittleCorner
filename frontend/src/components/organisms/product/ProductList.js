import React, { useEffect, useState } from "react";
import ProductItem from "../../molecules/productItem/ProductItem";
import ReactPaginate from "react-paginate";

const itemsPerPage = 8;

const ProductList = ({ data }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="product-list grid grid-cols-4 gap-5 mb-20">
        {currentItems?.length > 0 &&
          currentItems?.map((item, index) => (
            <ProductItem
              key={index}
              title={item?.title}
              price={item?.price}
              image={item?.image}
            ></ProductItem>
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        className="page-navigate-list"
      />
    </>
  );
};

export default ProductList;
