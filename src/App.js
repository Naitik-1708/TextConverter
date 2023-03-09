import "./App.css";
import { useState } from "react";
import Alert from "./Alert";


function App() {
  const [mystyle, setMystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);



  }










  const [btnText, setbtnText] = useState("Enable dark mode");

  const toogleStyle = () => {
    if (mystyle.color === 'black') {
      setMystyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtnText("Disable Dark Mode")
      showalert(" Dark Mode is Enable", "success");
    }
    else {
      setMystyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setbtnText("Enable Dark Mode")
      showalert(" Dark Mode is Disable", "success");
    }
  }



  const [text, setText] = useState("");

  const handeloncahnge = (event) => {
    setText(event.target.value);
  }
  const convertText = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    showalert(" Text converted to Uppercase ", "success");
  }
  const convertloText = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    showalert(" Text converted to Lowercase ", "success");
  }
  const remove = () => {
    let text2 = "";
    setText(text2);
    showalert(" Text Removed from Textarea ", "success");
  }
  const handelcopy = () => {
    let copytext = document.getElementById("exampleFormControlTextarea1");

    navigator.clipboard.writeText(copytext.value);
    showalert(" Text copied to clipboard ", "success");
  }
  const filterarray = (element) => {
    return element.length !== 0;
  }
  return (

    <div style={mystyle}>
      <Alert alert={alert} />
      <div className="container py-3 " >
        <h1>Enter The Text Here</h1>
        <div className="mb-3 py-10">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={8}
            value={text} onChange={handeloncahnge}
          />
        </div>
        <button type="reset"  disabled={text.length===0} className="btn btn-secondary mx-2 my-3" onClick={convertText}> Convert To Uppercase</button>

        <button type="reset"  disabled={text.length===0}className="btn btn-secondary mx-2" onClick={convertloText}> Convert To Lowercase</button>
        <button type="reset" disabled={text.length===0} className="btn btn-secondary mx-2" onClick={remove}> Remove Text</button>
        <button type="reset"  disabled={text.length===0}className="btn btn-secondary mx-2 my-2" onClick={handelcopy}> Copy Text</button>
        <div className="form-check form-switch">
          <input
            onClick={toogleStyle}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {btnText}
          </label>
        </div>

        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter(filterarray).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter(filterarray).length} minutes require to reading input text</p>
        <h2>Preview</h2>
        <p className="pb-5">{text.length > 0 ? text : "Enter something in to textarea to preview it here"}

        </p>
      </div>

    </div>



  );
}

export default App;
