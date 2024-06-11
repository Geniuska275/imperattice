import { useContext, useState } from "react"

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
import image65 from "./b1.jpeg"
import image66 from "./b2.jpeg"
import image67 from "./b3.jpeg"
import image68 from "./b4.jpeg"
import image69 from "./b5.jpeg"
import image70 from "./b6.jpeg"
import image71 from "./b7.jpeg"

import image72 from "./b8.jpeg"
import image73 from "./b9.jpeg"
import image74 from "./b10.jpeg"
import image75 from "./b11.jpeg"
import image76 from "./b12.jpeg"

import image77 from "./b13.jpeg"
import image78 from "./b14.jpeg"
import image79 from "./b16.jpeg"
import image80 from "./b17.jpeg"
import image81 from "./b18.jpeg"
import image82 from "./b19.jpeg"
import image83 from "./c1.jpeg"
import image84 from "./c2.jpeg"
import image85 from "./c3.jpeg"

import image86 from "./c4.jpeg"
import image87 from "./c5.jpeg"
import image88 from "./c6.jpeg"

import image89 from "./c7.jpeg"
import image90 from "./c8.jpeg"
import image91 from "./c9.jpeg"
import image92 from "./c10.jpeg"


import image93 from "./c11.jpeg"
import image94 from "./c12.jpeg"
import image95 from "./c13.jpeg"
import image96 from "./c14.jpeg"
import image97 from "./c15.jpeg"
import image98 from "./c16.jpeg"
import image99 from "./c17.jpeg"
import image100 from "./c18.jpeg"

import image101 from "./c19.jpeg"
import image102 from "./c20.jpeg"
import image103 from "./c21.jpeg"
import image104 from "./c22.jpeg"
import image105 from "./c23.jpeg"

import image106 from "./c24.jpeg"
import image107 from "./c25.jpeg"
import image108 from "./c26.jpeg"
import image109 from "./c27.jpeg"
import image110 from "./c28.jpeg"
import image111 from "./c29.jpeg"

import image112 from "./t1.jpg"
import image113 from "./t2.jpg"
import image114 from "./t3.jpg"
import image115 from "./t4.jpg"
import image116 from "./t5.jpg"
import image117 from "./t6.jpg"
import image118 from "./t7.jpg"
import image119 from "./t8.jpg"
import image120 from "./t9.jpg"
import image121 from "./t10.jpg"
import image122 from "./t11.jpg"
import image123 from "./t12.jpg"
import image124 from "./w1.jpeg"

import image125 from "./t14.jpeg"
import image126 from "./t15.jpeg"
import image127 from "./t16.jpeg"
import image128 from "./t17.jpeg"

import image129 from "./t18.jpeg"
import image130 from "./t19.jpeg"

import image131 from "./t20.jpeg"

import image132 from "./t21.jpeg"
import image133 from "./t22.jpeg"
import image134 from "./t23.jpeg"
import image135 from "./t24.jpeg"

import image136 from "./t25.jpeg"

import image137 from "./t26.jpeg"
import image138 from "./t27.jpeg"
import image139 from "./t28.jpeg"
import image140 from "./t29.jpeg"

import image141 from "./t30.jpeg"

import image142 from "./t31.jpeg"
import image143 from "./t32.jpeg"
import image144 from "./t33.jpeg"
import image145 from "./t34.jpeg"


import image146 from "./t35.jpeg"

import image147 from "./t36.jpeg"
import image148 from "./t37.jpeg"
import image149 from "./t38.jpeg"
import image150 from "./t39.jpeg"
import image151 from "./t40.jpeg"
import image152 from "./t41.jpeg"



import image153 from "./t42.jpeg"
import image154 from "./t43.jpeg"
import image155 from "./t45.jpeg"
import image156 from "./t46.jpeg"
import image157 from "./t47.jpeg"

import image158 from "./t48.jpeg"
import image159 from "./t49.jpeg"
import image160 from "./t50.jpeg"
import image161 from "./t51.jpeg"
import image162 from "./t52.jpeg"
import { WatchContext } from "../Context/WatchContext"
import { Pagination } from "./Pagination"














export default function Gallery(){
   
 

    const {data,imagesPerPage,currentPage}=useContext(WatchContext)
  const indexOfLastImage=currentPage*imagesPerPage;
  const indexOfFirstImage=indexOfLastImage-imagesPerPage;

  const CurrentImages=data.slice(indexOfFirstImage,indexOfLastImage)

  console.log()
    





    return(
        <div>

        <div className="flex justify-center items-center mb-5 md:ml-[150px]">
            <div className="flex flex-wrap  items-center ml-[20px]">
             {CurrentImages.map((item,index)=>(
                 
                 <div className="shadow-lg relative rounded-sm w-[340px] flex items-center justify-center m-1 h-[440px] ">
                <h1 className=" absolute flex items-center justify-center top-[10px] right-3 rounded-full w-10 h-10 bg-[#bf2833] text-white">{item.id}</h1>
            <img src={item.image}   style={{width:"300px",height:"400px",borderRadius:"7px"}}/>
            <a href={`https://api.whatsapp.com/send?phone=+2348101657733 &text=Hello Imperative WristHub,lets negotiate on (${item.id})`} className="absolute bottom-[10px]">

            <button className="  bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
            </a>

            <h1 className=" absolute flex items-center justify-center top-[30px] left-7 rounded-2xl font-bold shadow-xl w-30 h-30 bg-[#fff] py-2 px-3 text-[#bf2833]">
                <span>
                
                &#8358;{item.pricelow}
                </span>
                
                {item.pricehigh
                    
                    && <span>
                    - 
                    
                    &#8358;{item.pricehigh}
                    </span>}
                </h1> 
            </div>
             ))}
          
         </div>
         
        
         
        </div>
       
             </div>
         
    )
}