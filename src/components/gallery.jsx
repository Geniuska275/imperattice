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
import image17 from "./o1.jpg"


import image16 from "./p.jpg"
import image19 from "./s.jpg"
import image20 from "./t.jpg"
import image21 from "./u.jpg"
import image22 from "./v.jpg"
import image23 from "./w.jpg"
import image24 from "./x.jpg"
import image25 from "./y.jpg"
import image26 from "./z.jpg"
import image27 from "./a1.jpg"
import image28 from "./a2.jpg"
import image29 from "./a3.jpg"
import image30 from "./a4.jpg"
import image31 from "./a5.jpg"
import image32 from "./a6.jpg"
import image33 from "./a7.jpg"
import image34 from "./a8.jpg"
import image35 from "./a9.jpg"
import image36 from "./a10.jpg"
import image37 from "./a11.jpg"
import image38 from "./a12.jpg"
import image39 from "./a13.jpg"
import image40 from "./a14.jpg"






export default function Gallery(){
   const images=[
        image4,image6,image8,image9,image10,image11,image12,image13,
        image14,image15,image16,image17,image19,image20,image21,
        image22,image23,image24,image25,image26,image27,image28,image29,
        image30,image31,image32,image33,image34,image35,image36,image37,image38,image39,image40
    ]

    return(
        <div className="flex justify-center items-center mb-5 md:ml-[150px]">
            <div className="flex flex-wrap  items-center ml-[20px]">
             {images.map((image,index)=>(
                 
                 <div className="shadow-lg relative rounded-sm w-[340px] flex items-center justify-center m-1 h-[440px] ">
                <h1 className=" absolute flex items-center justify-center top-[10px] right-3 rounded-full w-10 h-10 bg-[#bf2833] text-white">A{index}</h1>
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