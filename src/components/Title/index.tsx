import React from 'react';
import styled from 'styled-components'

interface IProps {
    title: string;
}

const Title: React.FC<IProps> = ({ title }) => {
    return (
        <>
            <div>
                <StyledTitle>{title}</StyledTitle>
            </div>
        </>
    )
}

export default Title;

const StyledTitle = styled.h1`
    font-size: 20px;
`