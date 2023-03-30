import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'

const Calculator = () => {
  
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

 
  const inputNum = (e) =>{
    const input = e.target.value;
    if(num === 0){
      setNum(input);
    }else{
      setNum(num + input);
    }
   }

  const Clean = () => {
    setNum(0);
  }

  const poncetagem = () => {
    setNum(num / 100)
  }


  const maisOuMenos = () => {
    if(num > 0){
      setNum(-num)
    }else{
      setNum(Math.abs(num))
    }
  }

  const operador = (e) => {
    const operadoInput = e.target.value;
    setOperator(operadoInput);
    setOldNum(num);
    setNum(0);
  }

  const calcular = () => {
    if(operator === "/"){
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if(operator === "x"){
      setNum(parseFloat(oldnum) * parseFloat(num));
    }else if(operator === "-"){
      console.log(oldnum);
      console.log(num);
      console.log(oldnum -num);
      setNum(parseFloat(oldnum) - parseFloat(num));
    }else if(operator === "+"){
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }


  return (
    <div>
      <Box m={5} />
      <Container maxWidth='xs'>
      <div className='wrapper'>
      <Box m={12} />
        <h1 className='result'>{num  }</h1>
        <button onClick={Clean} >AC</button>
        <button onClick={maisOuMenos}>+/-</button>
        <button onClick={poncetagem}>%</button>
        <button className='orange' onClick={operador} value={"/"}>/</button>
        <button className='gray' onClick={inputNum} value={7}>7</button>
        <button className='gray' onClick={inputNum} value={8}>8</button>
        <button className='gray' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operador} value={'x'}>x</button>
        <button className='gray' onClick={inputNum} value={4}>4</button>
        <button className='gray' onClick={inputNum} value={5}>5</button>
        <button className='gray' onClick={inputNum} value={6}>6</button>
        <button className='orange' onClick={operador} value={"-"}>-</button>
        <button className='gray' onClick={inputNum} value={1}>1</button>
        <button className='gray' onClick={inputNum} value={2}>2</button>
        <button className='gray' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operador} value={"+"}>+</button>
        <button className='gray' onClick={inputNum} value={0}>0</button>
        <button className='gray' onClick={inputNum} value={","}>,</button>
        <button className='gray' style={{ visibility: "hidden" }}>,</button>
        <button className='orange' onClick={calcular}>=</button>
        
        
    </div>
    </Container>
    </div>
  )
}

export default Calculator