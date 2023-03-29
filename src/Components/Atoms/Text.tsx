import styled from "styled-components";

interface TextType {
    text: string,
    display?: string
}

interface TextObj {
    display?: string
}

const TextBox = styled.p<TextObj>`
    display: ${props => props.display};
    margin: 0;
`;

function Text({ text, display }: TextType) {
    return (
        <TextBox display={display}>
            {text}
        </TextBox>
    )
}

export { Text };