import styled from "styled-components";
import React from "react";

interface InputType {
    placeholder: string,
    padding?: string,
    width?: string,
    type: string,
    changeSetNumber: React.Dispatch<React.SetStateAction<number>>
}

interface InputObj {
    padding?: string
    width?: string
}

const InputBox = styled.input<InputObj>`
    padding: ${props => props.padding};
    width: ${props => props.width};
`;

function Input({ placeholder, padding, width, type, changeSetNumber }: InputType) {

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if(!isNaN(Number(e.target.value)) && e.target.value !== undefined) {
            changeSetNumber(Number(e.target.value));
        }
        else {
            changeSetNumber(0);
        }
    }

    return (
        <InputBox
            placeholder={placeholder}
            padding={padding}
            width={width}
            type={type}
            onInput={handleChangeInput}
        />
    )
}

export { Input };