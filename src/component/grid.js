import React, { useState } from "react";

import "./style.css";
const Grid = () => {

    const [input, setInput] = useState("");
    

   const handleclick =(e)=>{
     const temp= input+ e.target.name;
      setInput(temp);
   }

const backspce=()=>{
  setInput(input.slice(0,-1))
}
  const clear=()=>{
     setInput("");
  }

  const calculate=(value)=>{

     if(value==='=')
     {
       try{
       setInput(eval(input.toString()));
       } catch{
         console.log("error");
       }
     }


  }


  return (
    <>
    <div className="parent">
      <div className="display">
        <input type="text" value={input}/>
            
        <div className="buttonrow">
          <div className="row">
            <button onClick={backspce}   className="button">bsp</button>
            <button onClick= {clear} className="button">clear</button>
            <button name ="%" onClick={handleclick} className="button">%</button>
            <button name ="/" onClick={handleclick} className="button">/</button>
          </div>
          <div className="row">
            <button name ="7" onClick={handleclick}   className="button">7</button>
            <button name ="8" onClick={handleclick} className="button">8</button>
            <button name ="9" onClick={handleclick} className="button">9</button>
            <button name ="*" onClick={handleclick} className="button">*</button>
          </div>
          <div className="row">
            <button name ="4" onClick={handleclick}className="button">4</button>
            <button name ="5" onClick={handleclick}className="button">5</button>
            <button name ="6" onClick={handleclick}className="button">6</button>
            <button name ="-" onClick={handleclick} className="button">-</button>
          </div>
          <div className="row">
            <button name ="1" onClick={handleclick}className="button">1</button>
            <button name ="2" onClick={handleclick} className="button">2</button>
            <button name ="3" onClick={handleclick}className="button">3</button>
            <button name ="+" onClick={handleclick}className="button">+</button>
          </div>
          <div className="row">
            <button name ="0" onClick={handleclick}className="buttons">0</button>
            <button name ="." onClick={handleclick}className="button">.</button>
            <button  onClick={()=>calculate('=')} className="button">=</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Grid;
