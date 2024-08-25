import axios from "../../utils/axios";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import noImage from "/no-image.jpg"

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches= async ()=>{
    try {
      const data=await axios.get(`/search/multi?query=${query}`)
      setSearches(data.data.results)
      
      
    } catch (error) {
      console.log("Errors:",error)
    }
  }

  useEffect(() => {
    getSearches()
  }, [query])
  
  return (
    <div className="w-[70%] h-[10vh] relative flex justify-start items-center mx-auto">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="text-zinc-200 text-xl w-[50%] mx-5 p-5 outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={(e) => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded">
        {searches.map((m,i)=>(
          <Link key={i} className=" hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600  p-10 w-[100%] flex justify-start items-center border-b-2 border-zinc-100">
            <img className="w-[10vh] h-[10vh] object-cover rounded mr-5" src={m.backdrop_path || m.profile_path?`https://image.tmdb.org/t/p/original/${m.backdrop_path || m.profile_path}`:noImage} alt="" />
            <span>{m.name|| m.title||m.original_name||m.original_title}</span>
          </Link>

        ))}
      </div>
    </div>
  );
}

export default Topnav;
