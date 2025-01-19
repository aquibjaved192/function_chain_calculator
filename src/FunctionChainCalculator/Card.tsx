import React from 'react';

type Card = {
  equation: Equations;
  onEquationChange: (id: number, newEquation: string) => void;
};

type Equations = {
    id: number;
    next: number | null;
    value: string;
}

const Card: React.FC<Card> = ({ equation, onEquationChange }) => {
  return (
    <div className="shadow-[0px_0px_6px_0px_#0000000D] bg-white flex flex-col rounded-[15px] w-[235px] h-[251px] border-1 border[#DFDFDF] pl-[20px] pr-[20px]">
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" id={`line-${equation.id}-${equation.next}`}></svg>
      <h3 className="font-semibold mt-[15px] mb-[20px] text-[14px] text-[#A5A5A5]">
        Function: {equation.id}
      </h3>
      <label className='card-label text-[12px] font-[500] text-[#252525]'>Equation</label>
      <input
        type="text"
        value={equation.value}
        onChange={(e) => onEquationChange(equation.id, e.target.value)}
        className="border border-gray-300 p-1 rounded-lg text-sm focus:outline-none"
        placeholder="Enter equation"
      />
      <label className='card-label text-[12px] font-[500] mt-[17px]'>Next Function</label>
      <select disabled className="p-1 rounded-lg border border-[#D3D3D3] bg-[#F5F5F5] text-[#252525] text-sm font-medium opacity-30">
        <option>{equation.next ? `Function ${equation.next}` : "-"}</option>
      </select>
      <div className='mt-[46px] flex justify-between'>
        <div className="flex items-center space-x-1">
            <div className="w-[15px] h-[15px] border-2 border-[#DBDBDB] rounded-full flex justify-center items-center">
            <div className="w-[7px] h-[7px] bg-[#0066FF] rounded-full" id={`card-${equation.id}-input-circle`}></div>
            </div>
            <span className="text-gray-700 text-[10px] text-[#585757]">input</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-gray-700 text-[10px] text-[#585757]">output</span> 
          <div className="w-[15px] h-[15px] border-2 border-[#DBDBDB] rounded-full flex justify-center items-center">
              <div className="w-[7px] h-[7px] bg-[#0066FF] rounded-full relative" id={`card-${equation.id}-output-circle`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;