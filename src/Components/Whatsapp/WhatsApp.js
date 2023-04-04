import React from 'react';
import './WhatsApp.css'


const WhatsApp = () => {
  return (
    <>
    <a
        href="https://wa.me/2347033959010"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{height: '100%', width: '100%', display:'flex', alignItems:'center', justifyContent:'space-evenly', paddingLeft:'5px'}} className="fa fa-whatsapp" aria-hidden="true"><p style={{fontSize:'16px', marginTop:'15px'}}>WhatsApp</p></span>
      </a>
    
    </>
  )
}

export default WhatsApp