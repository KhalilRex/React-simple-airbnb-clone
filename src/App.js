import { useState } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const [text, setText] = useState('')

  const handleOnNumber = (number) => {
    setText(text + number)
  }

  const handleClear = () => {
    setText('')
  }

  const result = () => {
    try {
      // eslint-disable-next-line no-eval
      setText(eval(text).toString());


    } catch (error) {
      setText('0 or Error');
    }
  }
  return (
    <div>
      <Header title='Super Calc' />
      <div className="clac">
        <input type='text' placeholder='0' value={text} id='answer' /><br />
        <input type="button" onClick={() => handleOnNumber('9')} value='9' className='button' />
        <input type="button" onClick={() => handleOnNumber('8')} value='8' className='button' />
        <input type="button" onClick={() => handleOnNumber('7')} value='7' className='button' />
        <input type="button" onClick={() => handleOnNumber('6')} value='6' className='button' />
        <input type="button" onClick={() => handleOnNumber('5')} value='5' className='button' />
        <input type="button" onClick={() => handleOnNumber('4')} value='4' className='button' />
        <input type="button" onClick={() => handleOnNumber('3')} value='3' className='button' />
        <input type="button" onClick={() => handleOnNumber('2')} value='2' className='button' />
        <input type="button" onClick={() => handleOnNumber('1')} value='1' className='button' />
        <input type="button" onClick={() => handleOnNumber('0')} value='0' className='button' />
        <input type="button" onClick={() => handleOnNumber('+')} value='+' className='button' />
        <input type="button" onClick={() => handleOnNumber('-')} value='-' className='button' />
        <input type="button" onClick={() => handleOnNumber('/')} value='/' className='button' />
        <input type="button" onClick={() => handleOnNumber('x')} value='x' className='button' />
        <input type="button" onClick={handleClear} value='clear' className='button' />
        <input type="button" onClick={result} value='=' className='button' />

      </div>
    </div>
  );
}

export default App;
