import React from 'react'
import {Divider} from '@material-ui/core'
export default function Footer(props) {
    return (
        <div>
            <Divider/>
            <div style={{display:'flex',marginTop:15}}>
                <div style={{width:130,height:70,margin:10,cursor:'pointer'}}><img width="100%" height="100%" src="/homepage/whatsapp.jpg" alt="Whatsapp" /></div>
                <div style={{width:184,height:64,margin:10,cursor:'pointer'}}><img width="100%" height="100%" src="/homepage/playstore.png" alt="PlayStore" /></div>
            </div>
        </div>
    )
}
