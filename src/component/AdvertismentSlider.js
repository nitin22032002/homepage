import React from 'react'
import ImageSlider from './ImageSlider'
export default function AdvertismentSlider() {
    let height=window.screen.availWidth<400?150:window.screen.availWidth<600?200:window.screen.availWidth<900?300:450
    let addsPictures=['trail.jpg',"trail1.jpg","trail2.jpg","trail3.jpg","trail4.jpg"]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 2000, min: 500 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 
    const setting={
        swipeable:true,
        showIndicators:true,
        autoPlay:true,
        infiniteLoop:true,
        interval:1800,
        height:height,
        responsive:responsive
    }
    return (
        <div style={{margin:20,marginTop:window.screen.width<=900?70:100}}>
            <ImageSlider {...setting} borderRadius="20px">
               {
                 addsPictures.map((item,index)=>{
                   return(
                    <div key={index} style={{height:height,borderRadius:10}}>
                    <img style={{width:"100%",height:height}} src={`/homepage/${item}`} alt="..." />
                    </div>
                   )
                 })
               }
            </ImageSlider>
        </div>
    )
}
