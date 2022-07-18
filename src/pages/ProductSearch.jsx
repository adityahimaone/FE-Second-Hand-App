import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import postProductSearch from "store/action/productSearchAction";
import CardHome from "components/UI/Card/CardHome";

function ProductSearch() {
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector((state) => state.product_search);

  const [searchParams] = useSearchParams();
  const search = useMemo(
    () => searchParams.get("search") || "",
    [searchParams]
  );

  useEffect(() => {
    dispatch(postProductSearch(search));
  }, []);

  const lengthData = data?.data?.length;

  console.log(search, "search");
  return (
    <div className="container">
      <div className="my-4">
        <h6 className="font-20 fw-bolder">Product Search Result ...</h6>
        <span> {lengthData || 0} product berhasil dicari</span>
      </div>
      <div className="my-3 row row-cols-2 row-cols-xss-4 row-cols-lg-6 g-2">
        {data?.data?.map((item) => (
          <div key={item?.id} className="col">
            <CardHome item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSearch;
