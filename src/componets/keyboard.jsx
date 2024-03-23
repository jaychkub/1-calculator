import React from 'react';

const values = {
    "AC": "AC",
    "+/-": "+/-",
    "%": "%",
    "/": "÷",
    "7": "7",
    "8": "8",
    "9": "9",
    "*": "x",
    "4": "4",
    "5": "5",
    "6": "6",
    "-": "-",
    "1": "1",
    "2": "2",
    "3": "3",
    "+": "+",
    "0": "0",
    ".": ".",
    "=": "=",
}

const Button = (props) => {
    const value = props.value;
    const color = props.color;
    const onClick = props.onClick

    return (
        <button onClick={onClick} value={value} className='bg-[var(--user-color)] text-black text-4xl font-semibold rounded-full w-full aspect-square m-auto active:opacity-75' style={{"--user-color": color,}}>{values[value]}</button>
    )
}

const OperatorButton = (props) => {
    const value = props.value;
    const color = props.color;
    const onClick = props.onClick

    return (
        <button onClick={onClick} value={value} className='bg-[var(--user-color)] text-black text-4xl font-semibold rounded-full w-full aspect-square m-auto focus:bg-white' style={{"--user-color": color,}}>{values[value]}</button>
    )
}

const LongButton = (props) => {
    const value = props.value;
    const color = props.color;
    const onClick = props.onClick

    return (
        <button onClick={onClick} value={value} className='bg-[var(--user-color)] text-black text-4xl font-semibold rounded-full w-full h-[82.25px] m-auto active:opacity-75 col-span-2' style={{"--user-color": color,}}>{values[value]}</button>
    )
}

const Keyboard = (props) => {  
    const onClick = props.onClick
    const operator = props.operator
    const clear = props.clear
    const calculate = props.calc
    const perc = props.perc
    const invert = props.invert

    return (
        <div className='bg-black w-full h-[65%] grid grid-cols-4 grid-rows-5 gap-4 p-6'>
            <Button value="AC" color="white" onClick={clear} />
            <Button value="+/-" color="white" onClick={invert} />
            <Button value="%" color="white" onClick={perc} />
            <OperatorButton value="/" color="orange" onClick={operator} />
            <Button value="7" color="gray" onClick={onClick} />
            <Button value="8" color="gray" onClick={onClick} />
            <Button value="9" color="gray" onClick={onClick} />
            <OperatorButton value="*" color="orange" onClick={operator} />
            <Button value="4" color="gray" onClick={onClick} />
            <Button value="5" color="gray" onClick={onClick} />
            <Button value="6" color="gray" onClick={onClick} />
            <OperatorButton value="-" color="orange" onClick={operator} />
            <Button value="1" color="gray" onClick={onClick} />
            <Button value="2" color="gray" onClick={onClick} />
            <Button value="3" color="gray" onClick={onClick} />
            <OperatorButton value="+" color="orange" onClick={operator} />
            <LongButton value="0" color="gray" onClick={onClick} />
            <Button value="." color="gray" onClick={onClick} />
            <Button value="=" color="orange" onClick={calculate} />
        </div>
    );
}

export default Keyboard;
