/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Donated = ({donation}) => {
    const {id,Title,Picture,Category,Color_for_category_bg,Color_for_card_bg,Text_color,Price} =donation
   
    const navigate = useNavigate()

    const viewdetailsHanler =()=>{
        navigate(`/details/${id}`)
    }
   
   
    return (
        <div>

<div className={`card  shadow-x flex-row  ml-6`}  style={{backgroundColor:Color_for_card_bg}}>
  <figure className="w-56 h-46"><img src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
   <div className="w-20 text-center">
   <h2 style={{backgroundColor:Color_for_category_bg ,color:Text_color}}>{Category}</h2>
   </div>
    <p style={{color:Text_color}}>{Title}</p>
    <p style={{color:Text_color}}>${Price}</p>

    <button className="btn w-36 text-white" style={{backgroundColor:Text_color}} onClick={viewdetailsHanler}>View Detils</button>
   
  </div>
</div>
            
        </div>
    );
};

export default Donated;