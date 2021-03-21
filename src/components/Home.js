import React from 'react'
import styled from 'styled-components'
import img from '../img/pizza-hero.jpg'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    background: black url("${img}") no-repeat center;
    height: 100%;
    background-size: cover;
`
const StyledA = styled.a`
    text-align: center;
    height: 15%; 
    width: 15%;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: white;
    color: black;
    padding: 5px;
    margin: 25% auto;
    text-decoration: none;
    border: solid 1px black;
    box-shadow: 2px 1px 1px grey;
    border-radius: 15px;

    :hover {
        background-color: black;
        color: white;
    }
`

const Home = () => {

    return(
        <StyledDiv>
            <StyledA href="/pizza">Pizza?</StyledA>
        </StyledDiv>
    )
}

export default Home