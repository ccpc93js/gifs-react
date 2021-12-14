import React from "react";
import { Link } from "wouter";
// import {
//   CategoryTitle,
//   CategoryListItem,
//   CategoryLink,
//   CategoryList,
// } from "./styles";
import "./Category.css";

export default function Category({ name, options = [] }) {
  return (
    <div className="Category">
      <h3>{name}</h3>
      <ul className="Category-title">
        {options.map((singleOption) => (
          <li className="Category-title"
            key={singleOption.id}
          >
            <Link className="Category-link" 
            to={`/search/${singleOption.title}`}>
              {singleOption.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}