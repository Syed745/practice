import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Func  from './component';

function App() {
  const [text, setText] = useState("");
  const [textArr, setTextArr] = useState([]);

  let addTodo = () => {
setTextArr([...textArr,text]);
setText('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(e) => setText(e.target.value)} />
<button onClick={addTodo}>CLICK ME</button>

<Func btnValue="jksdf"/>
<Func btnValue="bilalal"/>
{
  textArr.map((e)=>{
    return(
      <p>{e}</p>
    )
  })
}
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
