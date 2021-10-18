import React from 'react'
export default function ClassesIn() {
    const classesList={"class IX":9,"class X":10,"class XI":11,"class XII":12,"1 to 8":"1-8","IIT":"IIT","NEET":"NEET","GOVT.":"GOVT.","ENGG.":"ENGG."}
    return (
       <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
           {
               Object.keys(classesList).map((item,index)=>{
                   return(
                       <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
                           <div style={{marginLeft:10,fontSize:15,border:"1px solid black",borderRadius:10,padding:10,backgroundColor:'#c7ecee',textAlign:'center',width:60,heigth:30,marginTop:10}}>
                               {classesList[item]}
                           </div>
                           <div style={{textAlign:'center',marginLeft:5}}>{item}</div>
                       </div>

                   )
               })
           }
       </div>
    )
}
