import React from 'react'
import ImageSlider from './ImageSlider'
export default function BooksSuggested(props) {
    let height=window.screen.width<400?90:window.screen.width<600?100:window.screen.width<900?100:150
    let width=window.screen.width<400?180:window.screen.width<600?180:window.screen.width<900?220:300
    let books=['trail.jpg',"trail1.jpg","trail2.jpg","trail3.jpg","trail4.jpg","trail5.jpg","trail6.jpg"]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 2000, min: 500 },
          items: 4.5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1100 },
          items: 3.5
        },
        tablet: {
          breakpoint: { max: 1100, min: 600 },
          items: 2.5
        },
        tablet1: {
            breakpoint: { max: 600, min: 464 },
            items: 2.3
          },
          mobile1: {
            breakpoint: { max: 340, min: 0 },
            items: 1
          },
          mobile: {
          breakpoint: { max: 464, min:340 },
          items: 1.6
        }
      }; 
      const setting={
        swipeable:true,
        showIndicators:false,
        autoPlay:false,
        infiniteLoop:false,
        height:height,
        interval:0,
    }
    return (
        <div style={{margin:20,marginBottom:40}}>
        <h3 style={{fontSize:23}}>{props.heading}</h3>
        <ImageSlider {...setting} responsive={responsive} borderRadius="20px">
           {
               books.map((item,index)=>{
                   return(
                        <div key={index} style={{height:height,width:width}}>
                            <img style={{width:"100%",height:height,borderRadius:40}} src={`/homepage/${item}`} alt="..." />
                        </div>
                   )
               })
           }
        </ImageSlider>
    </div>
    )
}
