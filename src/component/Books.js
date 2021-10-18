import React from 'react'

export default function Books(props) {
    return (
        <div style={{display:'flex',flexDirection:'column',width:props.width,height:props.height,textAlign:'left',fontSize:20}}>
            <div style={{display:'flex',justifyContent:"center",alignItems:'center',width:"100%",height:'55%',borderRadius:10,backgroundColor:"#dfe6e9"}}>
                <img src={`/homepage/${props.item.src}`} alt={props.item.name} style={{width:'52%',height:'83%'}} />
            </div>
            <div style={{marginTop:10}}>
                {props.item.name}
            </div>
            <div>
                <span style={{color:'navy'}}>&#8377;{props.item.offerprice}</span> <s style={{color:'grey'}}>&#8377;{props.item.price}</s>
            </div>
            <div style={{color:'green'}}>{props.item.offer} % off</div>
        </div>
    )
}
