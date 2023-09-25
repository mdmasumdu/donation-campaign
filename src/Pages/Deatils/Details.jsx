import { useLoaderData,  useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { savetols } from "../../Utilities/Utility";

const Details = () => {

    const data =useLoaderData()
    const {id} = useParams()
    
    const wanted = data.find(carda => carda.id === parseInt(id))



    const donationHandler =()=>{

        savetols(parseInt(id))
           toast("Succesfully Donated")
        
    }
    return (
        <div>
            <img className="w-2/3 h-96 mx-auto" src={wanted.Picture} alt="" />
            <button className="absolute -mt-10 ml-28 md:ml-56 text-white" style={{backgroundColor:wanted.Text_color}} onClick={donationHandler} >Donate $ {wanted.Price}</button>

    
            <div className=" w-2/3 mx-auto p-10">
            <h1 className="text-3xl font-bold text-black">{wanted.Title}</h1>
            <p className="text-xl text-black">{wanted.Description}</p>
            
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;