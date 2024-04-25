import React, { useState } from 'react'

export const Pagination = ({imagesPerPage,totalImages,setCurrentPage}) => {
    const [num,setNum]=useState(null)
   const paginate=(pagenumber)=>{
     setNum(pagenumber)
    setCurrentPage(pagenumber)}
    const ImageNumbers=[]
    for(let i=1; i<=Math.ceil(totalImages/imagesPerPage);i++){
      ImageNumbers.push(i)
    }
    const exact=ImageNumbers.filter((item)=>item ===num)
    

  return (
    <nav className='flex justify-center '>
     <ul className='flex gap-2 m-4'>
        {ImageNumbers.map((number)=>(
        <li className={`border p-[10px] shadow rounded text-[#bf2833] ${exact[0]===num ? "":""}`}>
            <a onClick={()=>setCurrentPage(number)}> {number}</a>
        </li>
        ))}
     </ul>

    </nav>
  )
}
