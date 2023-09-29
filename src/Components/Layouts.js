import React,{useState} from 'react'
import m1 from "../img/m2.png"
import Output from './Output'
function Layouts() {

  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');

  const handlefun = (event) => {
  const value = event.target.value;

  if (value === '=') {
    try {
      const res = eval(input);
      if (!isNaN(res)) {
        setResult(input + '=');
        setInput(String(res));
      } else {
        setResult('Math Error');
      }
    } catch (err) {
      setResult('Math Error');
    }
  } else if (value === 'C') {
    setInput('0');
    setResult('');
  } else if (value === 'DEL') {
    setInput((prevInput) => prevInput.slice(0, -1));
  } else if (value === '0' && input !== '0') {
    setInput((prevInput) => prevInput + value);
  } else if (value === '.' && !input.includes('.')) {
    setInput((prevInput) => prevInput + value);
  } else if (['+', '-', '*', '/'].includes(value)) {
    setInput((prevInput) => prevInput + value);
  } else {
    setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
  }
};

  return (
    <div className='frame'>
        <div className='calculator'>
            <br/><br/>
            <Output user={input} answer={result}/>
            <img src={m1} style={{width:"210px", display:"block",marginLeft:"auto",marginRight:"auto"}}/>
            <div className='key'>
                <input type='button' value={'C'} className='btn green' onClick={handlefun}/>
                <input type='button' value={'DEL'} className='btn-clear' onClick={handlefun}/>
                <input type='button' value={'%'} className='btn-operator' onClick={handlefun}/>
                <input type='button' value={'/'} className='btn-operator' onClick={handlefun}/>

               <input type='button' value={'7'} className='btn' onClick={handlefun}/>
                <input type='button' value={'8'} className='btn' onClick={handlefun}/>
                <input type='button' value={'9'} className='btn' onClick={handlefun}/>
                <input type='button' value={'*'} className='btn-operator' onClick={handlefun}/>

                <input type='button' value={'4'} className='btn' onClick={handlefun}/>
                <input type='button' value={'5'} className='btn' onClick={handlefun}/>
                <input type='button' value={'6'} className='btn' onClick={handlefun}/>
                <input type='button' value={'-'} className='btn-operator' onClick={handlefun}/>

                <input type='button' value={'1'} className='btn' onClick={handlefun}/>
                <input type='button' value={'2'} className='btn' onClick={handlefun}/>
                <input type='button' value={'3'} className='btn' onClick={handlefun}/>
                <input type='button' value={'+'} className='btn-operator' onClick={handlefun}/>

                <input type='button' value={'0'} className='btn' onClick={handlefun}/>
                <input type='button' value={'.'} className='btn' onClick={handlefun}/>
                <input type='button' value={'='} className='btn-operator blue' onClick={handlefun}/>
            </div>
        </div>
    </div>
  )
}

export default Layouts