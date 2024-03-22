import React from 'react';

const Screen = (props) => {
    const equation = props.equation
    const result = props.result

    return (
        <div className=' bg-black flex flex-col h-2/5 w-full relative'>
            <label className='absolute bottom-[6.5rem] right-[3rem] bg-black text-gray-500 text-2xl'>{equation}</label>
            <label className='absolute bottom-1 right-10 bg-black text-white text-8xl'>{result}</label>
        </div>
    );
}

export default Screen;
