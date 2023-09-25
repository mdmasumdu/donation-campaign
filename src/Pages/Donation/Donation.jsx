import {  useEffect, useState } from "react";
import { getlocalstoarageitem } from "../../Utilities/Utility";
import { useLoaderData } from "react-router-dom";
import Donated from "./Donated";

const Donation = () => {

    const cards = useLoaderData()
      const [donations,setDonations] =useState([])

      const[show,setshow] = useState(4)

    


    useEffect(()=>{

      const savedid =  getlocalstoarageitem();

      const donation = cards.filter(card=> savedid.includes(card.id))

      setDonations(donation)

    },[cards])


    return (
        <div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
              donations.slice(0,show).map(donation=><Donated key={donation.id} donation={donation}></Donated>)

            }
          </div>

            <div className="flex justify-center mt-10">
              <button onClick={()=>setshow(12)} className={`btn bg-blue-600 ${donations.length <=4 ?"hidden" : '', show === 12 ? 'hidden':''} `}>Show ALL</button>
            </div>
            
        </div>
    );
};

export default Donation;