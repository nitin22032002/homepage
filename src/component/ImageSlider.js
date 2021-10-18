import React from 'react'
import Carousel from "react-multi-carousel";
import { makeStyles } from '@material-ui/core/styles';
import "react-multi-carousel/lib/styles.css";
export default function ImageSlider(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
         borderRadius:props.borderRadius
        },
      }));
    const classes = useStyles();
    const setting={
        showStatus:false,
        showArrow:window.screen.width>700,
        showThumbs:false,
        stopOnHover:false,
        swipeable:props.swipeable,
        showDots:props.showIndicators,
        autoPlay:props.autoPlay,
        infinite:props.infiniteLoop,
        removeArrowOnDeviceType:["mobile1","mobile","tablet","tablet1"],
        autoPlaySpeed:props.interval,
    } 
    return (
        <div style={{height:props.height,}}>
            <Carousel {...setting} containerClass={`carousel-container ${classes.root}`} responsive={props.responsive}>
                {props.children}
            </Carousel>
        </div>
    )
}
