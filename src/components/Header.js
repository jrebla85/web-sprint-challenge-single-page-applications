import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    padding: 5%;
`

const StyledH1 = styled.h1`
    font-family: 'Berkshire Swash', cursive;
    color: black;
`

const StyledA = styled.a`
    font-weight: bold;
    letter-spacing: 2px;
    background-color: white;
    color: black;
    padding: 5px;
    margin: 2px;
    text-decoration: none;
    border: solid 1px black;
    box-shadow: 2px 1px 1px grey;
    border-radius: 10px;

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
                <StyledA href="/pizza">Order</StyledA>
            </nav>
        </StyledDiv>
    )
}

export default Header