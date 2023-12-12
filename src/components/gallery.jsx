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
    const images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15]

    return(
        <div className="flex justify-center items-center mb-5">
            <div className="flex flex-wrap items-center ml-[20px]">
             {images.map(image=>(

            <div className="shadow-lg  rounded-sm w-[340px] flex items-center justify-center m-1 h-[440px]">
            <img src={image}   style={{width:"300px",height:"400px",borderRadius:"7px"}}/>
            </div>
             ))}
         </div>
        
         
        </div>
    )
}