import React, { useState, useEffect } from 'react';
import Card from './Card';
import InitialInput from './initialInput';
import FinalOutput from './finalOutput';
import { calculateEquation, connectElements } from '../helpers';

type Equation = {
  id: number;
  next: number | null;
  value: string;
}

const FunctionChainCalculator: React.FC = () => {
  const [equations, setEquations] = useState<Array<Equation>>([
    {id: 1, next: 2, value:''}, 
    {id: 2, next: 4, value:''}, 
    {id: 3, next: null, value:''}, 
    {id: 4, next: 5, value:''}, 
    {id: 5, next: 3, value:''}
  ]);
  const [inputValue, setInputValue] = useState<number>(0);
  const [output, setOutput] = useState<number>(0);

  const handleEquationChange = (id: number, value: string) => {
    const updatedEquations: any = [ ...equations ].map((item: Equation) => {
      const newEquation = { ...item };
      if(newEquation.id === id) {
        newEquation.value = value;
      }
      return newEquation;
    });
    setEquations(updatedEquations);
  };

  const calculateFunctionChain = () => {
    let currentValue = inputValue;
    let currentEquation: any = equations[0];
    while(currentEquation.next !== null) {
      if(currentEquation.value) {
        currentValue = calculateEquation(currentEquation.value, currentValue);
      }
      currentEquation = equations.find(item => item.id === currentEquation.next);
    }
    if(currentEquation.value) {
      currentValue = calculateEquation(currentEquation.value, currentValue);
    }
    setOutput(currentValue);
  };

  useEffect(() => {
    calculateFunctionChain();
  }, [equations, inputValue]);

  useEffect(() => {
    connectElements('initial-input-circle','card-1-input-circle', 'line-input-1');
    let currentEquation: any = equations[0];
    while(currentEquation.next !== null) {
      connectElements(`card-${currentEquation.id}-output-circle`,`card-${currentEquation.next}-input-circle`, `line-${currentEquation.id}-${currentEquation.next}`);
      currentEquation = equations.find(item => item.id === currentEquation.next);
    }
    connectElements('card-3-output-circle', 'final-output-circle', 'line-3-output');
  }, [])

  return (
    <div className="flex py-10 space-x-4 w-[80%] m-auto">
      <InitialInput inputValue={inputValue} setInputValue={setInputValue}/>
      <div className="flex flex-wrap gap-[130px] justify-center w-[90%]">
        {equations.map(equation => (
          <Card
            key={equation.id}
            equation={equation}
            onEquationChange={handleEquationChange}
          />
        ))}
      </div>
      <FinalOutput output={output}/>
    </div>
  );
};

export default FunctionChainCalculator;
