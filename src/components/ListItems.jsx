import React from "react";
import { useNavigate } from "react-router-dom";

function ListItems() {
  const navigate = useNavigate();

  const categories = [
    "All",
    "Music",
    "Bollywood",
    "Comedy",
    "Education",
    "Computer programming",
    "Sports",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
  ];

  const handleCategoryClick = (category) => {
  if (category === "All") {
    return;  
  }
  navigate(`/search/${encodeURIComponent(category)}`);
};


  return (
    <div className="flex overflow-x-scroll px-4 hide-scroll-bar sidebar-scroll">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
