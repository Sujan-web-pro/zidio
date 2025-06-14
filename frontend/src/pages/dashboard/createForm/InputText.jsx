import React, { useState } from 'react'

const InputText = ({ onAddInput }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
        setIsVisible(true);
        onAddInput();
    };

    return (
        <button
            className="flex bg-white light:bg-slate-600 text-black p-2 shadow-lg rounded-full border dark:text-slate-600 font-bold"
            onClick={handleClick}
        >
            Input Text
            {isVisible && <span className="bg-gray-200 rounded-full px-2 ml-1">{count}</span>}
        </button>
    )
}

export default InputText