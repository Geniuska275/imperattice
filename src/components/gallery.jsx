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

import image41 from "./a15.jpeg"
import image42 from "./a16.jpeg"
import image43 from "./a17.jpeg"
import image44 from "./a18.jpeg"
import image45 from "./a19.jpeg"
import image46 from "./a20.jpeg"
import image47 from "./a21.jpeg"

import image49 from "./a23.jpeg"
import image50 from "./a24.jpeg"

import image51 from "./a25.jpeg"
import image52 from "./a26.jpeg"
import image53 from "./a27.jpeg"
import image54 from "./a28.jpeg"
import image55 from "./a29.jpeg"
import image56 from "./a30.jpeg"
// import image48 from "./a22.jpeg"
import image57 from "./a31.jpeg"
import image58 from "./a32.jpeg"
import image59 from "./a33.jpeg"
import image60 from "./a34.jpeg"
import image61 from "./a35.jpeg"
import image62 from "./a36.jpeg"
import image63 from "./a37.jpeg"
import image64 from "./a38.jpeg"








export default function Gallery(){
   const images=[
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image58,
    image59,
    image60,
    image61,
    image62,
    image63,
    image64,    
    

        image41,image42,image43,image44,image45,image46,image47,image50,
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
            <a href={`https://api.whatsapp.com/send?phone=+2348101657733 &text= Hello%20Debbie`}className="absolute bottom-[10px]">

            <button className="  bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
            </a>
            </div>
             ))}
          
         </div>
         
        
         
        </div>
    )
}