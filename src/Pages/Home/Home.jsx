import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Search from "../Search";


const Home = () => {


    const [cards,setCards]= useState([]);


    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
            {/* search section */}
      <div className="pb-60">
        <Search></Search>
      </div>

      {/* card section */}
      <div>
        <Cards cards={cards}></Cards>
      </div>
            
        </div>
    );
};

export default Home;