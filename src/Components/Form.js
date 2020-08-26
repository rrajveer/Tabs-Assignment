import React, { useState, useEffect } from 'react'

const Form = (props) => {
    const [formValue,setFormValue]=useState("");  
      
    const changeHandler =(event)=>{ 
          setFormValue(event.target.value);   
        //    console.log(formValue); 
     }    
    
    const handleForm = (e) =>{               
        const {name} = props;       
         e.preventDefault();       
 // const formValue = e.target[name].value;       
         props.onSubmit(formValue);   
        setFormValue("");     
         e.target[name].value = '';        
     } 
const {name} = props 
// console.log(name)
return (   
     <form  onSubmit={ (e) => {handleForm(e)}}>    
     <label>       
          {`Enter ${name}: `}      
          <input type="text" name={name} value={formValue} onChange={(event)=>changeHandler(event)}/>   
     </label>   
         <input type="submit" value="Submit"/></form>)}
        
export default Form