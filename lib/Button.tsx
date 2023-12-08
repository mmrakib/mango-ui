import React from 'react'
import styled from 'styled-components'

import {
    Neutral100, 
    Red500, Red600,
} from './colors.tsx'

const StyledButton = styled.button`
    display: inline-block;
    background-color: ${Red500};
    color: ${Neutral100};
    border: none;
    padding: 1em 1.25em;
    border-radius: 0.75em;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: ${Red600};
    }
`

interface ButtonProps {
    children: React.ReactNode
}

function Button({ children }: ButtonProps) {
    const handleClick = () => {
        alert("Worked!")
    }

    return (
        <>
            <StyledButton onClick={handleClick}>
                {children}
            </StyledButton>
        </>
    )
}

export default Button
