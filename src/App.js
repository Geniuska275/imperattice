import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import { RiInstagramFill } from "react-icons/ri";


function App() {
  return (
    <div className="">
      <Navbar/>
      <h1 className='items-center font-bold text-[#bf2833] m-[25px]' style={{textAlign:"center"}}>OUR COLLECTIONS</h1>
  
      <Gallery/>
      <hr></hr>
      <h2 style={{textAlign:"center",margin:"10px"}}>
        Visit our instagram page 
        <div className='flex justify-center'>

        <div className='flex gap-3'>

        <span className='text-[#bf2833] font-bold ml-2'>Imperatrice_dep 
          
                </span> 
          
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
