import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import Sidebar from "./Sidebar.jsx";
import SearchCard from "./SearchCard.jsx";
import Loading from "../loader/Loading.jsx";
 

function Search() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const { contents } = await fetchData(`search/?q=${searchQuery}`);
      setResult(contents || []);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setResult([]); // fallback to empty array on error
    }
    setLoading(false);
  };

  if (loading) return <Loading/>  ;

  return (
    <div className="">
      <div className="mt-24 flex flex-row h-[calc(100%-56px)]">
        <Sidebar />
        <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
          <div className="grid grid-cols-1 gap-2 p-2">
            {result.length === 0 ? (
              <p className="text-center text-lg text-gray-600 mt-10">No results found.</p>
            ) : (
              result.map((item, index) => {
                if (item?.type !== "video") return null;
                return <SearchCard key={index} video={item?.video} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
