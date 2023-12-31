import Button from './components/Button';
import Input from './components/Input';
import { useEffect, useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  const handleClear = () => {
    setCurrentNumber('');
    setOperator('');
    setFirstNumber('');
    setSecondNumber('');
  };

  const handleAddNumber = (number) => {
    if (operator === '') {
      if (number != 'X' && number != '/' && number != '-' && number != '+') {
        if(firstNumber === '' && number === '0'){
          setCurrentNumber('');
        }else{
          setCurrentNumber(currentNumber + number);
          setFirstNumber(firstNumber + number);
        }
        
      } else {
        setCurrentNumber(currentNumber + number);
        setOperator(number);
      }
    } else {
      if (number != 'X' && number != '/' && number != '-' && number != '+') {
        setCurrentNumber(currentNumber + number);
        setSecondNumber(secondNumber + number);
      }
    }
  };

  const handleCalculate = () => {
    if (firstNumber != '' && secondNumber != '') {
      setCurrentNumber('');
      const x = Number(firstNumber);
      const y = Number(secondNumber);

      if (operator === 'X') {
        setCurrentNumber(x * y);
        setFirstNumber(x * y);
      } else if (operator === '/') {
        setCurrentNumber(x / y);
        setFirstNumber(x / y);
      } else if (operator === '-') {
        setCurrentNumber(x - y);
        setFirstNumber(x - y);
      } else if (operator === '+') {
        setCurrentNumber(x + y);
        setFirstNumber(x + y);
      }
    }
    setSecondNumber('');
    setOperator('');
  };

  return (
    <div className="bg-[#F8F8F2] w-full h-screen flex justify-center items-center">
      <div className="w-[225px] bg-[#fff] border-[0.5px] border-[#44475A] rounded-md pb-[6px]">
        <Input value={currentNumber} />
        <div className="flex justify-around mt-[-10px] px-[3px]">
          <Button value={'X'} onClick={() => handleAddNumber('X')} />
          <Button value={'/'} onClick={() => handleAddNumber('/')} />
          <Button value={'C'} onClick={() => handleClear()} />
          <Button value={'0'} onClick={() => handleAddNumber('0')} />
        </div>
        <div className="flex justify-around mt-[-10px] px-[3px]">
          <Button value={7} onClick={() => handleAddNumber('7')} />
          <Button value={8} onClick={() => handleAddNumber('8')} />
          <Button value={9} onClick={() => handleAddNumber('9')} />
          <Button value={'-'} onClick={() => handleAddNumber('-')} />
        </div>
        <div className="flex justify-around mt-[-10px] px-[3px]">
          <Button value={4} onClick={() => handleAddNumber('4')} />
          <Button value={5} onClick={() => handleAddNumber('5')} />
          <Button value={6} onClick={() => handleAddNumber('6')} />
          <Button value={'+'} onClick={() => handleAddNumber('+')} />
        </div>
        <div className="flex justify-around mt-[-10px] px-[3px]">
          <Button value={1} onClick={() => handleAddNumber('1')} />
          <Button value={2} onClick={() => handleAddNumber('2')} />
          <Button value={3} onClick={() => handleAddNumber('3')} />
          <Button value={'='} onClick={() => handleCalculate()} />
        </div>
      </div>
    </div>
  );
}

export default App;
