import React from 'react';
import './BrowseView.css';

const BrowseView = ({ categories }) => {
  let browseView;

  if (categories) {
    browseView = categories.map((category, i) => {
      return (
        <li className="category-item" key={i}>
          <div className="category-image">
            <img
              src={
                category.icons ? category.icons[0].url : category.images[0].url
              }
              alt="category"
            />
            <p className="category-name">{category.name}</p>
          </div>
        </li>
      );
    });
  }

  return <ul className="browse-view-container">{browseView}</ul>;
};

export default BrowseView;
