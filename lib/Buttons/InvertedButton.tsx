import React from 'react'
import styled from 'styled-components'
import {
    Neutral800
} from '../colors.tsx'
import { LoadFontLato } from '../fonts.tsx'

interface ButtonProps {
    children: React.ReactNode
}

const StyledInvertedButton = styled.button`
    background: ${Neutral800};
    border: 1px solid ${Neutral800};
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: "Lato",nunito,roboto,proxima-nova,"proxima nova",sans-serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 16px;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
    text-rendering: geometricprecision;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;

    &:hover,
    &:active {
        background-color: initial;
        background-position: 0 0;
        color: ${Neutral800};
    }

    &:active {
        opacity: .5;
    }
`

function InvertedButton({ children }: ButtonProps) {
    const handleClick = () => {
        alert("Worked")
    }

    return (
        <>
            <LoadFontLato />
            <StyledInvertedButton onClick={handleClick}>
                {children}
            </StyledInvertedButton>
        </>
    )
}

export default InvertedButton
