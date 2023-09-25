/* eslint-disable react/prop-types */

import { useState } from "react";
import "./Search.css"
const Search = ({filterhandler}) => {


    const [fil,setfil] = useState("all")

    const datataker =(e)=>{
        e.preventDefault()

       setfil(e.target.input.value)
    }

    
    return (
        <div className="bg-image h-screen">
             <div className="content">
             <h1 className="text-5xl font-bold text-black text-center mt-10 mb-10">I Grow By Helping People In Need</h1>

<div className="flex items-center justify-center">

    <form onSubmit={datataker}>
    <input type="search" name="input" id="" placeholder="search here"  className="p-5 w-96 h-12 rounded-md bg-white"/>
    <input className="bg-red-400 h-10 text-black rounded-lg p-1" type="submit" value="Search" onClick={()=>filterhandler(fil)} />

    </form>
    
    
</div>
             </div>
        
        </div>
    );
};

export default Search;