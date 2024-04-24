import React from 'react'

export const Pagination = ({imagesPerPage,totalImages,setCurrentPage}) => {
   const paginate=(pagenumber)=>{
    setCurrentPage(pagenumber)}
    const ImageNumbers=[]
    for(let i=1; i<=Math.ceil(totalImages/imagesPerPage);i++){
      ImageNumbers.push(i)
    }
  return (
    <nav className='flex justify-center items-center'>
     <ul className='flex gap-2 m-4'>
        {ImageNumbers.map(number=>(
        <li className='border p-4 shadow rounded text-[#bf2833]'>
            <a onClick={()=>setCurrentPage(number)}> {number}</a>
        </li>
        ))}
     </ul>

    </nav>
  )
}
