import React,{useState} from "react";

export default function TextForm(props) {
  const[text,setText] = useState('')
  const handleOnChange = (event)=>{
    console.log("clicked on Onchange ")
    setText(event.target.value)
  }

  const handleUpClick = ()=>{
    console.log("Clicked on upper case button")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("Clicked on lower case button")
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClClick = ()=>{
    console.log("cleard")
    let newText = '';
    setText(newText)
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  }

  return (

    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
       <h1>{props.heading}</h1>
        
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters here</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p> {text.length>0?text:"Enter something in box so that you can preview it here!!!"} </p>
    </div>
    </>
  );
}
