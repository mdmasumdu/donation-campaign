import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Search from "../Search";


const Home = () => {


    const [cards,setCards]= useState([]);

  const [filter,setFilter] = useState([])



  const filterhandler =(fil)=>{
    // setFilter('')

    if(fil === "Health" || fil === "health") {
    const health = cards.filter(card=> card.Category === "Health")
    setFilter(health)
   } else if(fil === "Education" || fil ==="education"){
    const education = cards.filter(card=> card.Category === "Education")
    setFilter(education)
   }
   else if(fil=== "Clothing" || fil === "clothing"){
    const clothing = cards.filter(card=> card.Category === "Clothing")
    setFilter(clothing)
   }
   else if(fil=== "Food" || fil === "food"){
    const food = cards.filter(card=> card.Category === "Food")
    setFilter(food)
   }
   else(
    setFilter(cards)
   )
   
  }

  


    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => {
          setCards(data)
          setFilter(data)
    
        })
    },[])


   

    
    return (
        <div>
            {/* search section */}
      <div>
        <Search filterhandler={filterhandler}></Search>
      </div>



      {/* card section */}
      <div className="mt-20 md:mt-0">
        <Cards filter={filter}></Cards>
      </div>
            
        </div>
    );
};

export default Home;