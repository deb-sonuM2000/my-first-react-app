import React,{useState} from 'react'

const TextForm = (props) => {
          const[text,setText] = useState('')
          const handleClick=()=>{
                    //console.log('clicked' + text)
                    let newText = text.toUpperCase()
                    setText(newText)
                    props.showAlert("Converted to Uppercase", "Success")
          }
          const handleChange=(event)=>{
                    setText(event.target.value)
          }
          const handleClick1=()=>{
                    let newText = text.toLowerCase()
                    setText(newText)
                    props.showAlert("Converted to LowerCase", "Success")
          }
          const handleClearClick=()=>{
                    let newText = ''
                    setText(newText)
                    props.showAlert("Cleared the text", "Success")
          }
          return (
                    <>
                    <div className='container my-2' style={{color:props.mode==='dark'?'white':'#042743'}} >
                              <h1>{props.heading}</h1>
                              <div className="mb-3">
                                        
                                        <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
                              </div>
                              <button className="btn btn-primary mx-1" onClick={handleClick}>Convert to UpperCase</button>
                              <button className="btn btn-primary mx-1" onClick={handleClick1}>Convert to LowerCase</button>
                              <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
                    </div>
                    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
                              <h2>Your Text Summary</h2>
                              <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                              <h2>Preview</h2>
                              <p>{text.length>0?text:"Enter something to preview"}</p>
                    </div>
                    </>
          )
}

export default TextForm
