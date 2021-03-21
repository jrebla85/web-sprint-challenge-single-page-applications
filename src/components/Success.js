import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d42d2f;
    font-weight: bold;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const StyledA = styled.a`
    font-weight: bold;
    letter-spacing: 2px;
    background-color: #e0c9af;
    color: #d42d2f;
    padding: 5px;
    margin: 2px;
    text-decoration: none;
    border: solid 1px black;
    box-shadow: 2px 1px 1px grey;
    border-radius: 10px;

    :hover {
        background-color: #d42d2f;
        color: #e0c9af;
    }
`

const Success = () => {

    return(
        <div>
            <StyledP>
                Our kitchen has received your order. It will be ready in about 20 minutes!
            </StyledP>
            <StyledDiv>
                <StyledA href="/">Home</StyledA>
                <StyledA href="/pizza">Place New Order</StyledA>
            </StyledDiv>
        </div>
    )
}

export default Success