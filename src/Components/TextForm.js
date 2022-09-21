import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");    

    const toUppercase=()=>{
        let txt=text.toUpperCase();
        setText(txt)
       
        
    }
    const tolowercase=()=>{
        let txt=text.toLowerCase();
        setText(txt)



    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        
    }
    const blueclr=()=>{
        if(document.body.style.color==='black' && document.body.style.backgroundColor==='white' ){
            document.body.style.color='white'
            document.body.style.backgroundColor='#0000FF'
        }
        else{

            document.body.style.color='black'
            document.body.style.backgroundColor='white'

            
        }


    }
   

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <label htmlFor="myBox">Example textarea</label>
            <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="6"/>
            
          
        </div>
        <p> Total Words  { text.split(" ").filter((element)=>{return element!=0}).length} Total Characters : {text.length}</p>
        <p> Time required to read  this text : {0.08 *   text.length}</p>

        <button type="button" className="btn btn-primary  " onClick={toUppercase}>Convert Uppercase</button>
        <button type="button" className="btn btn-primary m-3 " onClick={tolowercase}>Convert Lowercase</button>
        <button type="button" className="btn btn-primary " onClick={props.chngeMode}>{props.txtChnage}</button>
        <button type="button" className="btn btn-primary  m-3" onClick={blueclr}>Enable blue Color</button>
    </div>
  )
}
