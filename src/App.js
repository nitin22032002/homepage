import React,{useState,useEffect} from 'react'
import AdvertismentSlider from "./component/AdvertismentSlider";
import Box from '@mui/material/Box';
import BottomNavbar from './component/BottomNavbar'
import ClassIn from './component/ClassIn'
import BooksSlider from './component/BooksSlider';
import Footer from './component/Footer'
import Navbar from "./component/Navbar";
import BooksSuggested from './component/BooksSuggested';
function App() {
   const [resize,setResize]=useState(0);
   useEffect(()=>{
     window.addEventListener('resize',(e)=>{setResize(window.screen.availWidth)
       console.log(resize)
     })
     // eslint-disable-next-line
   },[])
  return ( 
    <div>
      <Navbar/>
      <AdvertismentSlider/>     
      <ClassIn/>
      <BooksSuggested heading="Novels For You"/>
      <BooksSlider key={1} heading="Featured Novels"/>
      <BooksSlider key={2} heading="Latest Novels Arrival"/>
      <BooksSlider key={3} heading="Recommended NEET Books"/>
      <Footer/>
      <Box sx={{ display: { xs: 'flex', sm: 'none' },marginTop:10 }}>
              <BottomNavbar/>
      </Box>
    </div>
  );
}
export default App;
