import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import { RiInstagramFill } from "react-icons/ri";
import video1 from "./components/v1.mp4"
import video2 from "./components/V2.mp4"

import ReactPlayer from 'react-player'


function App() {
  return (
    <div className="">
      <Navbar/>
      <h1 className='items-center font-bold text-[#bf2833] m-[25px]' style={{textAlign:"center"}}>OUR COLLECTIONS</h1>
  
      <Gallery/>
      <hr></hr>
      <div style={{maxWidth:"550px" ,margin:"0px auto",padding:"20px"}}>
         <h1 style={{textAlign:"center",margin:"20px",fontSize:"20px",fontWeight:"bold",color:"#bf2833"}}> OUR VIDEOS</h1>
         <div className='flexbox'>
         <ReactPlayer url={video1} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
         <ReactPlayer url={video2} controls={true}  width={"300px"} style={{border:"3px solid #bf2833",borderRadius:"5px",marginLeft:"10px"}}/>
         
         </div>

        


         </div>
         


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
