import React, { useState } from "react";
import { Link } from "react-router-dom";

function Topnav() {
  const [query,setQuery]=useState("");
  console.log(query);
  return (
    <div className="w-[50%] h-[10vh] relative flex justify-start items-center mx-auto">
      <i class="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
        className="text-zinc-200 text-xl w-[50%] mx-5 p-5 outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length>0 && (
      <i 
        onClick={(e)=>setQuery("")}
        class="text-zinc-400 text-3xl ri-close-fill">

      </i>)}
      
      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded">
        {/* <Link className=" hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600  p-10 w-[100%] flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>movie title</span>
        </Link> */}
        
      </div>
      
    </div>
  );
}

export default Topnav;
