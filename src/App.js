import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import { RiInstagramFill } from "react-icons/ri";
import video1 from "./components/v1.mp4"
import video2 from "./components/V2.mp4"
import video3 from "./components/v3.mp4"
import video4 from "./components/v4.mp4"
import video5 from "./components/A.mp4"
import video6 from "./components/B.mp4"
import video7 from "./components/C.mp4"
import video8 from "./components/D.mp4"
import video9 from "./components/E.mp4"
import video10 from "./components/F.mp4"
import video11 from "./components/v5.mp4"
import video12 from "./components/v6.mp4"



import ReactPlayer from 'react-player'


function App() {
  return (
    <div className="">
      <Navbar/>
      <h1 className='items-center font-bold text-[#bf2833] m-[25px]' style={{textAlign:"center"}}>COLLECTIONS</h1>
  
      <Gallery/>
      <hr></hr>
      <div style={{maxWidth:"550px" ,margin:"0px auto",padding:"20px"}}>
         <h1 style={{textAlign:"center",margin:"20px",fontSize:"20px",fontWeight:"bold",color:"#bf2833"}}> VIDEOS</h1>

         <div className='flexbox'>
          <div className='h-[500px]' style={{textAlign:"center"}}>
          <ReactPlayer url={video1} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px",marginBottom:"10px",zIndex:"-10"}}/>
          <a href="https://wa.me/+2348101657733" className="">
          <button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
           </a>
          </div>
          <div className='h-[500px]' style={{textAlign:"center"}}>
         <ReactPlayer url={video2} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
          <a href="https://wa.me/+2348101657733" className="">
         <button className="  bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
         </a>
          </div> 
         </div>

         <div className='flexbox'>
         <div className='h-[500px]' style={{textAlign:"center"}}>
         <ReactPlayer url={video5} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px",marginBottom:"10px"}}/>
         <a href="https://wa.me/+2348101657733" className="">
        <button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
        </a>
        </div>
 <div className='h-[500px]' style={{textAlign:"center"}}>
 <ReactPlayer url={video6} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
         
 <a href="https://wa.me/+2348101657733" className="">

<button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
</a>
 </div>
 </div>

 <div className='flexbox'>
         <div className='h-[500px]' style={{textAlign:"center"}}>
         <ReactPlayer url={video7} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px",marginBottom:"10px"}}/>
         <a href="https://wa.me/+2348101657733" className="">
        <button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
        </a>
        </div>
 <div className='h-[500px]' style={{textAlign:"center"}}>
 <ReactPlayer url={video8} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
         
 <a href="https://wa.me/+2348101657733" className="">

<button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
</a>
 </div>
 </div>
         
      
 <div className='flexbox'>
         <div className='h-[500px]' style={{textAlign:"center"}}>
         <ReactPlayer url={video9} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px",marginBottom:"10px"}}/>
         <a href="https://wa.me/+2348101657733" className="">
        <button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
        </a>
        </div>
 <div className='h-[500px]' style={{textAlign:"center"}}>
 <ReactPlayer url={video10} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
         
 <a href="https://wa.me/+2348101657733" className="">

<button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
</a>
 </div>
 </div>
         

         <div className='flexbox'>
         <div className='h-[500px]' style={{textAlign:"center"}}>
         <ReactPlayer url={video11} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px",marginBottom:"10px"}}/>


 <a href="https://wa.me/+2348101657733" className="">

<button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
</a>
 </div>
 <div className='h-[500px]' style={{textAlign:"center"}}>
 <ReactPlayer url={video12} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
         
 <a href="https://wa.me/+2348101657733" className="">

<button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
</a>
 </div>  
         </div>
         <div className='flexbox'>
         <div className='h-[500px]' style={{textAlign:"center"}}>
         <ReactPlayer url={video3} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px",marginBottom:"10px"}}/>


 <a href="https://wa.me/+2348101657733" className="">

<button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
</a>
 </div>
 <div className='h-[500px]' style={{textAlign:"center"}}>
 <ReactPlayer url={video4} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
         
 <a href="https://wa.me/+2348101657733" className="">

<button className=" bg-[#bf2833] text-white shadow-2xl rounded-lg capitalize px-4 py-2 font-bold hover: bg-[#bf2830] font-[Poppins]">Negotiate</button>
</a>
 </div>  
         </div>




        


         </div>
         
       <h2 style={{textAlign:"center",fontWeight:"bold",padding:"40px"}}>NOTE - <span className='text-[#bf2833]'> All Our Prices are Negotiable,simply click the button lets NEGOTIATE.</span></h2>

      <hr></hr>
      <h2 style={{textAlign:"center",margin:"10px"}}>
        Visit our instagram page 
        <div className='flex justify-center'>

        <div className='flex gap-3'>

        <a href='https://www.instagram.com/imperatrice_deb/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'>
          <span className='text-[#bf2833] font-bold ml-2'>Imperatrice_deb 
          
                </span> 
          </a>
          
           <a href="https://www.instagram.com/imperatrice_deb/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
              <RiInstagramFill  style={{color:"#bf2833",fontSize:"25px"}}/>
                </a>
        </div>
        </div>
                to see more of our collections.</h2>

    </div>
  );
}

export default App;
