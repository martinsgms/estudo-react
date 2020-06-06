import React, { useEffect, useRef } from 'react';
import { useField } from "@unform/core";

const Input = ({ name, ...props }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, inputRef]);

    return (
        <input ref={inputRef} {...props} />
    );
}

export default Input;
