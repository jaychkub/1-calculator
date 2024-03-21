import React from 'react';

const Button = (props) => {
    const value = props.value;
    const color = props.color;
    const onClick = props.onClick

    return (
        <input onClick={onClick} type='button' value={value} className='bg-[var(--user-color)] text-black text-4xl font-semibold rounded-full w-full aspect-square m-auto active:opacity-75' style={{"--user-color": color,}} />
    )
}

const Keyboard = (props) => {  
    const onClick = props.onClick
    const operator = props.operator
    const clear = props.clear
    const calculate = props.calc
    const backspace = props.backspace

    return (
        <div className='bg-black h-3/5 grid grid-cols-4 gap-4 p-6'>
            <Button value="AC" color="white" onClick={clear} />
            <Button value="+/-" color="white" onClick={clear} />
            <Button value="%" color="white" onClick={onClick} />
            <Button value="/" color="orange" onClick={operator} />
            <Button value="7" color="gray" onClick={onClick} />
            <Button value="8" color="gray" onClick={onClick} />
            <Button value="9" color="gray" onClick={onClick} />
            <Button value="*" color="orange" onClick={operator} />
            <Button value="4" color="gray" onClick={onClick} />
            <Button value="5" color="gray" onClick={onClick} />
            <Button value="6" color="gray" onClick={onClick} />
            <Button value="-" color="orange" onClick={operator} />
            <Button value="1" color="gray" onClick={onClick} />
            <Button value="2" color="gray" onClick={onClick} />
            <Button value="3" color="gray" onClick={onClick} />
            <Button value="+" color="orange" onClick={operator} />
            <Button value="<" color="gray" onClick={backspace} />
            <Button value="0" color="gray" onClick={onClick} />
            <Button value="." color="gray" onClick={onClick} />
            <Button value="=" color="orange" onClick={calculate} />
        </div>
    );
}

export default Keyboard;
