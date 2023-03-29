import React from 'react';
import styled from 'styled-components';

interface ContainerType {
    width?: string,
    height?: string,
    children: React.ReactNode
}

interface DivObj {
    width?: string,
    height?: string
}

const CenterDiv = styled.div<DivObj>`
    width: ${props => props.width};
    height: ${props => props.height};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

function CenterContainer({ width, height, children }: ContainerType) {
    return (
        <CenterDiv width={width} height={height}>
            {children}
        </CenterDiv>
    )
}

export { CenterContainer };