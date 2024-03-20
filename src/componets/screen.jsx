import React from 'react';

const Screen = (props) => {
    const result = props.result

    return (
        <input disabled={true} type='text' placeholder={result} className='bg-black w-screen placeholder:text-white text-right text-wrap text-6xl' />
    );
}

export default Screen;
