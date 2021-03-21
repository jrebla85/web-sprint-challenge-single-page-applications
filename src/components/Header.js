import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    padding: 20px;
`

const StyledH1 = styled.h1`
    font-family: 'Berkshire Swash', cursive;
    color: black;
`

const StyledA = styled.a`
    letter-spacing: 2px;
    background-color: white;
    color: black;
    padding: 5px;
    margin: 2px;
    text-decoration: none;
    border: solid 1px black;

    :hover {
        background-color: black;
        color: white;
    }
`

const Header = () => {


    return (
        <StyledDiv>
            <StyledH1>Lambda Eats</StyledH1>
            <nav>
                <StyledA href="/home">Home</StyledA>
                <StyledA href="/Help">Help</StyledA>
            </nav>
        </StyledDiv>
    )
}

export default Header