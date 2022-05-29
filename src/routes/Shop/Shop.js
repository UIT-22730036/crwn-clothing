import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Spinner from "../../components/Spinner/Spinner";

import { fetchCategoriesStartAsync } from "../../redux/categories/categoriesActions";

import "./Shop.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);
  const { categoriesMap, isLoading } = useSelector(
    (state) => state.categoriesReducer
  );

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title, i) => {
        return (
          <CategoryPreview
            key={i}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </div>
  );
};

export default Shop;
