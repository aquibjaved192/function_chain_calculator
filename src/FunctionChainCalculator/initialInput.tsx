import React from 'react';

type InitialInputType = {
  inputValue: number;
  setInputValue: (val: number) => void;
};

const InitialInput: React.FC<InitialInputType> = ({ inputValue, setInputValue }) => {
    return (
        <div className='mt-[165px] w-[10%]'>
            <div className='text-[12px] rounded-[14px] bg-[#E29A2D] text-[#ffffff] p-1 w-full text-center'>Initial value of x</div>
            <div className="rounded-[15px] border-2 border-[#FFC267] flex h-fit h-[46px] mt-2">
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" id="line-input-1"></svg>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    className="w-[71px] focus:outline-none p-2 rounded-[15px]"
                    placeholder="Enter initial value (x)"
                />
                <div className="flex items-center space-x-4 border-l border-[#FFEED5] pl-2 pr-2">
                    <div className="w-[15px] h-[15px] border-2 border-[#DBDBDB] rounded-full flex justify-center items-center">
                    <div className="w-[7px] h-[7px] bg-[#0066FF] rounded-full relative" id="initial-input-circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default InitialInput;