import { FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


export default function Navbar(){

    return(

        <div className=" p-4 shadow sticky bg-white top-0 flex justify-between items-center">
            <h1 className="font-bold text-[#bf2833] ml-2">Imperatrice Wrist Hub.</h1>
            <div className="flex gap-4 mr-6">
                <a href="https://wa.me/+2348101657733">
               <FaWhatsapp  style={{color:"green",fontSize:"25px"}}/>
                </a>
                <a href="https://www.instagram.com/imperatrice_deb/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
              <RiInstagramFill  style={{color:"#bf2833",fontSize:"25px"}}/>
                </a>

            </div>


            
        </div>
    )
}