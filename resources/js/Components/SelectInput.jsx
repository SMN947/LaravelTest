import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput({ type = 'text', className = '', isFocused = false, options, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full' +
                className
            }
            ref={input}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))
            }
        </select>
    );
});
