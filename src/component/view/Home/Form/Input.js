import React, { useEffect, useRef } from 'react';
import { useField } from "@unform/core";

const Input = ({ name, ...props }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, inputRef, registerField]);

    return (
        <>
            <input className='validate' ref={inputRef} {...props} />
            {error && <span className="error" style={{color: '#f00'}} >{error}</span>}
        </>
    );
}

export default Input;
