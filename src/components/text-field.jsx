import React, { useState } from 'react';
import styled from 'styled-components';

const TextField = ({inputValue, setInputValue, label}) => {
    return (
        <>
        <label>
            {label.toUpperCase()}
            <input value={inputValue}
                onChange={(event) => setInputValue(event.currentTarget.value)}
            />
            </label>
        </>
    )
}

export default TextField;