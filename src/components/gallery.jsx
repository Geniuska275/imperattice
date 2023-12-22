import image1 from "./a.jpeg"
import image2 from "./b.jpeg"
import image3 from "./c.jpeg"
import image4 from "./d.jpeg"
import image5 from "./e.jpeg"
import image6 from "./f.jpeg"
import image7 from "./g.jpeg"
import image8 from "./h.jpeg"
import image9 from "./i.jpeg"
import image10 from "./j.jpeg"
import image11 from "./k.jpeg"
import image12 from "./l.jpeg"
import image13 from "./m.jpeg"
import image14 from "./n.jpeg"
import image15 from "./o.jpeg"



export default function Gallery(){
    const images=[image4,image6,image8,image9,image10,image11,image12,image13,image14,image15]

    return(
        <div className="flex justify-center items-center mb-5 md:ml-[150px]">
            <div className="flex flex-wrap  items-center ml-[20px]">
             {images.map(image=>(

            <div className="shadow-lg relative rounded-sm w-[340px] flex items-center justify-center m-1 h-[440px] ">
            <img src={image}   style={{width:"300px",height:"400px",borderRadius:"7px"}}/>
            <a href="https://wa.me/+2348101657733" className="absolute bottom-[10px]">

            <button className="  bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
            </a>
            </div>
             ))}
          
         </div>
         
        
         
        </div>
    )
}