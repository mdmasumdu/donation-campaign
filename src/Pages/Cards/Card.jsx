/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Card = ({card}) => {

    const {id,Title,Picture,Category,Color_for_category_bg,Color_for_card_bg,Text_color} =card;
     const navigate = useNavigate()

  const clickHandler =()=>{
    navigate(`/details/${id}`)
  }



    return (
        <div onClick={clickHandler}>
            <div className={`card  shadow-x  flex flex-col`} style={{backgroundColor:Color_for_card_bg}}>
  <figure className="h-60"><img src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
  <div className="w-20 text-center">
   <h2 style={{backgroundColor:Color_for_category_bg ,color:Text_color}}>{Category}</h2>
   </div>
    <p style={{color:Text_color}}>{Title}</p>
  </div>
</div>
        </div>
    );
};

export default Card;