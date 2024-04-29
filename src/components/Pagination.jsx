import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Pagination = ({imagesPerPage,totalImages,setCurrentPage,currentPage}) => {

  const  numberOFtotalPages=Math.ceil(totalImages/imagesPerPage)
  console.log(numberOFtotalPages)
    const [num,setNum]=useState(null)
   const paginate=(pagenumber)=>{
     setNum(pagenumber)
    setCurrentPage(pagenumber)}
    const ImageNumbers=[]
    for(let i=1; i<=Math.ceil(totalImages/imagesPerPage);i++){
      ImageNumbers.push(i)
    }
    
    
     const prev=()=>{
      if(currentPage !==1)setCurrentPage(currentPage -1)
     }

     const next=()=>{
      if(currentPage !==numberOFtotalPages)setCurrentPage(currentPage +1)
     }
  return (
    <nav className='flex justify-center '>
     <ul className='flex gap-2 m-4'>
      <div className='shadow-md w-8 h-8 rounded-full flex justify-center items-center mt-1 hover:bg-[#bf2833] text-white'>

     <MdKeyboardArrowLeft onClick={()=>prev()} className='text-2xl text-[#bf2833] hover:text-white cursor-pointer' />
      </div>
        {ImageNumbers.map((number)=>(
        <li className={`border p-[10px] shadow rounded text-[#bf2833] ${currentPage===number ? "bg-[#bf2833] text-white":""}`}>
            <a onClick={()=>setCurrentPage(number)}> {number}</a>
        </li>
        ))}
              <div className='shadow-md mt-1 w-8 h-8 rounded-full flex justify-center items-center'>

<MdKeyboardArrowRight onClick={()=>next()} className='text-2xl text-[#bf2833]' />
 </div>
        
     </ul>

    </nav>
  )
}
