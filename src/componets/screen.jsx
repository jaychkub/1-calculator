import React from 'react';

const Screen = (props) => {
    const result = props.result

    return (
        <input disabled={true} type='text' placeholder={result} className='bg-black h-2/5 w-screen pt-[14rem] pr-9 placeholder:text-white text-right text-wrap text-8xl' />
    );
}

export default Screen;
