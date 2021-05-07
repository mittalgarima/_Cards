import React from 'react';
 
 const Scroll=(props)=>{
     return(<div style={{overflow:'scroll', border:'5px solid black',  height:'32rem', margin:'auto'}}>

         {props.children}
         </div>
     
     ) ;     
 };
 export default Scroll;