import React from 'react'
import styled from 'styled-components'
import {
    Neutral100, Neutral200, Neutral800
} from '../colors.tsx'

const StyledGithubButton = styled.button`
    appearance: none;
    background-color: ${Neutral100};
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: ${Neutral800};
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;

    &:hover {
        background-color: ${Neutral200};
        text-decoration: none;
        transition-duration: 0.1s;
    }

    &:disabled {
        background-color: #FAFBFC;
        border-color: rgba(27, 31, 35, 0.15);
        color: #959DA5;
        cursor: default;
    }

    &:active {
        background-color: #EDEFF2;
        box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
        transition: none 0s;
    }

    &:focus {
        outline: 1px transparent;
    }

    &:before {
        display: none;
    }

    &:-webkit-details-marker {
        display: none;
    }
`

interface ButtonProps {
    children: React.ReactNode
}

function GithubButton({ children }: ButtonProps) {
    const handleClick = () => {
        alert("Worked!")
    }

    return (
        <>
            <StyledGithubButton onClick={handleClick}>
                {children}
            </StyledGithubButton>
        </>
    )
}

export default GithubButton
