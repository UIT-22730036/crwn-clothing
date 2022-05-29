import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoriesStartAsync } from "../../redux/categories/categoriesActions";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

import "./Category.scss";
const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { categoriesMap, isLoading } = useSelector(
    (state) => state.categoriesReducer
  );
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
            {categoriesMap[category]?.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Category;
