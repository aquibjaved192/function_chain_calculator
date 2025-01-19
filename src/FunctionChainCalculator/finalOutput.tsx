import React from 'react';

type FinalOutputType = {
  output: number;
};

const FinalOutput: React.FC<FinalOutputType> = ({ output }) => {
    return (
        <div className='mt-[165px] w-[10%]'>
            <div className='text-[12px] rounded-[14px] bg-[#4CAF79] text-[#ffffff] p-1 w-full text-center'>Final output y</div>
            <div className="rounded-[15px] border-2 border-[#2DD179] flex h-fit h-[46px] mt-2 justify-between">
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" id="line-3-output"></svg>
                <div className="flex items-center space-x-4 border-r border-[#2DD179] pl-2 pr-2">
                    <div className="w-[15px] h-[15px] border-2 border-[#DBDBDB] rounded-full flex justify-center items-center">
                    <div className="w-[7px] h-[7px] bg-[#0066FF] rounded-full relative" id="final-output-circle"></div>
                    </div>
                </div>
                <div className="w-[71px] focus:outline-none p-2 rounded-[15px]">{output}</div>
            </div>
        </div>
    )
}

export  default FinalOutput;