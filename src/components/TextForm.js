import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnchange=(event)=>{
        //console.log("onchange");
        setText(event.target.value);
    }
    const handleDownClick=()=>{
        let downtext=text.toLowerCase();
        setText(downtext);
    }
    const handleResetClick=()=>{
        let downtext=('');
        setText(downtext);
    }
    const handleCopyClick=()=>{
        var t=document.getElementById("txt");
        t.select();
        navigator.clipboard.writeText(t.value);
    }
    const [text,setText]=useState("Enter text here...");
    return (
        <>
        <div className='container'>
              <h2>{props.heading}</h2>          
           
            <div className="mb-3">
            <textarea className="form-control" value={text} id="txt" rows="8" onChange={handleOnchange}></textarea>
            <button className="btn-btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn-btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn-btn-primary mx-2" onClick={handleResetClick}>Reset</button>
            <button className="btn-btn-primary mx-2" onClick={handleCopyClick}>Copy</button>

            </div>
        </div>
        <div className="container" my-2>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
        </div>
        </>
    )
}
