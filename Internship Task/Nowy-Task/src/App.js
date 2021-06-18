import React,{ useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [totalM, setTotalM] = useState('');
  const [dn, setDn] = useState('');
  const [sn, setSn] = useState('');
  const [pn, setPn] = useState('');
  // const [called,setCalled] = useState(false);

  const handleSubmit = (e, input) => {
    e.preventDefault()
    console.log(input)
    // setCalled(true)
    let total=0

    for(let i=0; input[i] ;i++){
      if(input[i] === 'A' || input[i] === 'a' || input[i] === 'I' || input[i] === 'i' || input[i] === 'J' || input[i] === 'j' || input[i] === 'Q' || input[i] === 'q' || input[i] === 'Y' || input[i] === 'y'){
        total = total + 1
      }
      else if(input[i] === 'B' || input[i] === 'b' || input[i] === 'K' || input[i] === 'k' || input[i] === 'R' || input[i] === 'r'){
        total = total + 2
      }
      else if(input[i] === 'C' || input[i] === 'c' || input[i] === 'G' || input[i] === 'g' || input[i] === 'L' || input[i] === 'l' || input[i] === 'S' || input[i] === 's'){
        total = total + 3
      }
      else if(input[i] === 'D' || input[i] === 'd' || input[i] === 'M' || input[i] === 'm' || input[i] === 'T' || input[i] === 't'){
        total = total + 4
      }
      else if(input[i] === 'E' || input[i] === 'e' || input[i] === 'H' || input[i] === 'h' || input[i] === 'N' || input[i] === 'n' || input[i] === 'X' || input[i] === 'x'){
        total = total + 5
      }
      else if(input[i] === 'U' || input[i] === 'u' || input[i] === 'V' || input[i] === 'v' || input[i] === 'W' || input[i] === 'w'){
        total = total + 6
      }
      else if(input[i] === 'Z' || input[i] === 'z' || input[i] === 'O' || input[i] === 'o'){
        total = total + 7
      }
      else if(input[i] === 'F' || input[i] === 'f' || input[i] === 'P' || input[i] === 'p'){
        total = total + 8
      }
    }

    console.log(total)
    setTotalM(total)

    let DN=0
    let temp=total
    while(temp>0){
      DN = DN + (temp%10)
      temp=parseInt(temp/10)
    }

    console.log(DN)
    setDn(DN)

    let SN=0
    for(let i=0;input[i];i++){
      if(input[i] === 'A' || input[i] === 'a' || input[i] === 'I' || input[i] === 'i'){
        SN = SN + 1
      }
      else if(input[i] === 'E' || input[i] === 'e'){
        SN = SN + 5
      }
      else if(input[i] === 'U' || input[i] === 'u'){
        SN = SN + 6
      }
      else if(input[i] === 'O' || input[i] === 'o'){
        SN = SN + 7
      }
    }

      console.log(SN)
      setSn(SN)

      let PN
      PN = total-SN
      console.log(PN)
      setPn(PN)
    
  }

  return (
    <div className="App">
      <h1 className="heading">Online Name Numerology Calculator</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e, input)} >
        <h3 className="subh">Name Number Numerology</h3>
        <label>
          Enter Your Name:
          <input type="text" placeholder="Enter your name" name="name" value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
        <br></br><br></br>
        <button className='btn' type='submit'>
          Calculate
        </button>
      </form>
      <div>
        <br /><br></br>
          <span className="hi">Hello </span>
          {input},<br /><br />
          <span className="hi">Compound Name Number : </span>
          {totalM}<br /><br />
          <span className="hi">Destiny Number : </span>
          {dn}<br /><br />
          <span className="hi">Soul Urge Number : </span>
          {sn}<br /><br />
          <span className="hi">Dream Number : </span>
          {pn}
        
      </div>
    </div>
  );
}

export default App;
