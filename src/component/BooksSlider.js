import React from 'react'
import Books from './Books'
import ImageSlider from './ImageSlider'
export default function BooksSlider(props) {
    let height=window.screen.availWidth<400?200:window.screen.availWidth<600?200:window.screen.availWidth<900?250:300
    let width=window.screen.availWidth<400?180:window.screen.availWidth<600?180:window.screen.availWidth<900?220:300
   let books=[{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail3.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail2.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail1.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail2.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail1.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail6.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail3.jpg"},{name:"DC Pandey part 2",offerprice:"200",price:'400',offer:"50",src:"trail.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail5.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail2.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail3.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail4.jpg"},{name:"DC Pandey",offerprice:"200",price:'400',offer:"50",src:"trail5.jpg"},{name:"DC Pandey 1",offerprice:"250",price:'500',offer:"50",src:"trail6.jpg"},]
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 2000, min: 500 },
          items: 5.5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 4.5
        },
        desktop1: {
            breakpoint: { max: 1500, min: 1100 },
            items: 3.8
          },
        tablet: {
          breakpoint: { max: 1300, min: 600 },
          items: 2.8
        },
        tablet1: {
            breakpoint: { max: 600, min: 464 },
            items: 2.3
          },
          mobile1: {
            breakpoint: { max: 320, min: 0 },
            items: 1
          },
          mobile: {
          breakpoint: { max: 464, min:340 },
          items: 1.5
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
        <div style={{margin:20,height:height+50}}>
        <h3 style={{fontSize:23}}>{props.heading}</h3>
        <ImageSlider {...setting} responsive={responsive} borderRadius="20px">
            {books.map((item,index)=>{
                return(
                    <div style={{height:height+10,width:width}}>
                        <Books key={index+props.heading} width={width} height={height} item={item}/>
                    </div>
                )
            })}
        </ImageSlider>
    </div>
    )
}
