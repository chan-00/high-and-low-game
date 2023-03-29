//import styled
import styled from "styled-components"

//typescript interface
interface ButtonObj {
    padding: string,
    fontsize: string,
    margin?: string,
    width?: string
}

interface ButtonType {
    onClick: any,
    size?: string,
    text: string,
    margin?: string,
    width?: string
}

//button styled
const ButtonBox = styled.button<ButtonObj>`
    display: inline-block;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    transition-duration: 0.3s;

    :hover {
        color: white;
        background-color: black;
    }

    font-size: ${props => props.fontsize};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    width: ${props => props.width};
`;

function Button({ onClick, size, text, margin, width }: ButtonType) {

    /*
    let paddingSize: string = "10px 15px";
    let fontSize: string ="1.2rem";

    const sizeCheck = (size?: string): void => {
        if(size === "small") {
            paddingSize = "5px 10px";
            fontSize = "0.8rem";
        }
        else if(size === "big") {
            paddingSize = "15px 20px";
            fontSize = "1.6rem";
        }
    }
    */

    const sizeCheckPadding = (size?: string): string => {
        //else => default
        if(size === "small") {
            return "5px 10px";
        }
        else if(size === "big") {
            return "15px 20px";
        }
        else {
            return "10px 15px";
        }
    }
    const sizeCheckFont = (size?: string): string => {
        //else => default
        if(size === "small") {
            return "0.8rem";
        }
        else if(size === "big") {
            return "1.6rem";
        }
        else {
            return "1.2rem";
        }
    }

    return (
        <ButtonBox padding={sizeCheckPadding(size)} fontsize={sizeCheckFont(size)} onClick={() => onClick()} margin={margin} width={width}>
            {text}
        </ButtonBox>
    )
}

export { Button };