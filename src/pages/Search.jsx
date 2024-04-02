import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { WatchContext } from '../Context/WatchContext';


function Search() {
    const{data}=useContext(WatchContext)
     const[text,setText]=useState()
     const [searched,setSearched]=useState(undefined)
     console.log(text)

    const search=(id)=>{
        const word=text?.toUpperCase()
       const result=data.filter(obj=>obj.id==word)
       console.log(result)
       setSearched(result)

    }
  return (
    <div>

    <div className='flex justify-center items-center'>
        <div>
      <div className='flex gap-4 mt-8'>
          <input onInput={(e)=>setText(e.target.value)} placeholder='Search with Id e.g A102...'  className=' text-center  text-[#bf2833] border w-[250px] lg:w-[400px] rounded-full shadow-md'/>
           <div className='w-[50px] h-[50px]  rounded-full bg-[#bf2833] flex justify-center items-center shadow-lg'>
            <Link to="/Search">
                <FaSearch className='text-white text-2xl' onClick={search}  />
                </Link>
        </div>
      </div>
        </div>

       
    </div>

    {searched?.length<1?<div className='flex justify-center mt-8'>
              <h2 className='semi-bold text-[#bf2833]'> Search Result Not Found!!!.</h2>

             </div>
            
            :<div className='flex justify-center mt-8'> 
                {searched?.map((item,index)=>(
                 
                 <div className="shadow-lg relative rounded-sm w-[340px] flex items-center justify-center m-1 h-[440px] ">
                <h1 className=" absolute flex items-center justify-center top-[10px] right-3 rounded-full w-10 h-10 bg-[#bf2833] text-white">{item.id}</h1>
            <img src={item.image}   style={{width:"300px",height:"400px",borderRadius:"7px"}}/>
            <a href={`https://api.whatsapp.com/send?phone=+2348101657733 &text= Hello Imperative WristHub,lets negotiate on (${item.id})`} className="absolute bottom-[10px]">

            <button className="  bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
            </a>
            {/* <h1 className=" absolute flex items-center justify-center top-[30px] left-7 rounded-2xl font-bold shadow-xl w-30 h-30 bg-[#fff] py-2 px-3 text-[#bf2833]">
                <span>

                    &#8358;{item.pricelow}
                    </span>
                
                   {item.pricehigh

&& <span>
                       - 

                     &#8358;{item.pricehigh}
                    </span>}
                     </h1> */}

            </div>
             ))}
          
                
                </div>}

                <div className='w-[60px]  h-[60px] fixed bottom-8 right-5 rounded-full bg-[#bf2833] flex justify-center items-center shadow-lg'>
                <h4 className='font-bold text-white'>{data.length}</h4>
        </div>
                </div>
  )
}

export default Search