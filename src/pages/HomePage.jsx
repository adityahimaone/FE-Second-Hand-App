/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Spinner, Button } from "react-bootstrap";
import classNames from "classnames";
import { getAllProductByCategories } from "store/action/productCategoriesAction";
import CardHome from "components/UI/Card/CardHome";
import Carousel from "components/elements/Home/Carousel";
import Style from "assets/styles/Home.module.css";
import { getAllProduct } from "store/action/productAction";
import Sidebar from "components/UI/Header/components/Sidebar";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categoryListMap, setCategoryList] = useState([]);
  const [tabCategory, setTabCategory] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);
  const [pageNow, setPageNow] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);

  const {
    isLoading: isLoadingGetAllProduct,
    data: productData,
    errorGetAllProduct,
  } = useSelector((state) => state.all_product);

  const {
    isLoading: isLoadingGetAllCategories,
    data: productCategoriesData,
    error: errorGetAllCategories,
  } = useSelector((state) => state.all_product_categories);

  useEffect(() => {
    dispatch(getAllProduct(pageNow, 12));
    dispatch(getAllProductByCategories());

    if (!errorGetAllProduct) {
      setPageTotal(productData?.data?.pageTotal);
    }

    if (!errorGetAllCategories) {
      setCategoryList(productCategoriesData?.data?.sort((a, b) => a.id - b.id));
    }
  }, [pageNow]);

  // console.log(productData.data.data);

  // console.log(categoryListMap?.data[1]?.product, "categoryListMap");

  //
  // const newArr = categoryListMap.data.sort((a, b) => a.id - b.id);

  const pageItemArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pageTotal; i++) {
    pageItemArray.push(i);
  }

  const goFirstPage = useCallback(() => {
    setPageNow(1);
  });

  const goLastPage = useCallback(() => {
    setPageNow(pageTotal);
  });

  const goNextPage = useCallback(() => {
    if (pageNow < pageTotal) {
      setPageNow((prevPage) => prevPage + 1);
    }
  });

  const goPrevPage = useCallback(() => {
    if (pageNow > 1) {
      setPageNow((prevPage) => prevPage - 1);
    }
  });

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  const dataStatus = "data habis, silahkan kembali ke halaman awal";

  function SwitchTabCategory({ idCategory }) {
    console.log(tabCategory, idCategory, "tabCategory");
    if (tabCategory === 0) {
      return (
        <>
          <div className="w-100 d-flex justify-content-center">
            {isLoadingGetAllProduct ? (
              <div className="gap-2">
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
              </div>
            ) : null}
          </div>
          {productData?.data?.data ? (
            productData?.data?.data?.map((item) => (
              <div key={item.id} className="col">
                <CardHome item={item} />
              </div>
            ))
          ) : (
            <div className="col">
              <div className="d-flex justify-content-center">
                <h1>{dataStatus}</h1>
              </div>
            </div>
          )}
          <div className="w-100 d-flex justify-content-end my-5">
            <Pagination>
              <Pagination.First onClick={goFirstPage} />
              <Pagination.Prev onClick={goPrevPage} />
              {pageItemArray?.map((item) => (
                <Pagination.Item
                  key={item}
                  onClick={() => setPageNow(item)}
                  active={item === pageNow}
                >
                  {item}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={goNextPage} />
              <Pagination.Last onClick={goLastPage} />
            </Pagination>
          </div>
        </>
      );
    }
    if (tabCategory === idCategory) {
      return (
        <>
          <div className="w-100 d-flex justify-content-center">
            {isLoadingGetAllCategories ? (
              <div className="gap-2">
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
              </div>
            ) : null}
          </div>
          {categoryListMap[idCategory - 1]?.product?.map((item) => (
            <div key={item.id} className="col">
              <CardHome item={item} />
            </div>
          ))}
        </>
      );
    }
  }

  return (
    <>
      <section
        id="banner"
        className={`my-xss-4 position-relative ${Style["banner-mobile"]}`}
      >
        <div className="mx-2">
          <div className="nav-home pt-3">
            <nav className="d-flex justify-content-between px-4">
              <button
                type="button"
                className="button-nav-home"
                onClick={handleSidebarShow}
              >
                <HiMenu className="fs-5" />
              </button>
              <div className="search w-100">
                <span className="position-relative d-flex justify-content-end h-100">
                  <input
                    className="form-input-search h-100 w-75"
                    placeholder="Cari di sini ..."
                    type="text"
                  />
                  <button type="button" className="btn position-absolute">
                    <HiSearch className="fs-3" />
                  </button>
                </span>
              </div>
            </nav>
            <Sidebar show={showSidebar} handleClose={handleSidebarClose} />
          </div>
        </div>
        <div
          className="d-flex justify-content-center "
          style={{ overflow: "hidden" }}
        >
          <div className={Style["section-carousel"]}>
            <Carousel />
          </div>
        </div>
      </section>
      <section id="main" className={Style["section-main"]}>
        <div className="container">
          <div className={Style.category__wrapper}>
            <h6 className="fw-bold">Telusuri Kategori</h6>
            <div className={Style["category__overflow-scroll-x"]}>
              <div className="d-flex gap-2 ">
                <button
                  type="button"
                  onClick={() => setTabCategory(0)}
                  className={classNames({
                    "button-primary-1": tabCategory === 0,
                    "button-primary-2": tabCategory !== 0,
                  })}
                >
                  <i className="bi bi-search" />
                  <span className="px-2">Semua</span>
                </button>
                {categoryListMap?.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setTabCategory(item.id)}
                    className={classNames({
                      "button-primary-1": tabCategory === item.id,
                      "button-primary-2": tabCategory !== item.id,
                    })}
                  >
                    <i className="bi bi-search" />
                    <span className="px-2">{item.nama}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="my-3 row row-cols-2 row-cols-xss-4 row-cols-lg-6 g-2">
            {/* {productData?.data?.data?.map((item) => (
              <div key={item.id} className="col">
                <CardHome item={item} />
              </div>
            ))} */}
            <SwitchTabCategory idCategory={tabCategory} />
          </div>
          <button
            type="button"
            onClick={() => navigate("/product/sell")}
            className={`button-primary-1 ${Style["button-float"]}`}
          >
            <i className="bi bi-plus-lg" />
            <span className="px-2">Jual</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
