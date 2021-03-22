import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d42d2f;
`

const Footer = () => {

    return(
        <StyledFooter>
            <h4>© Lambda Eats 2021</h4>
        </StyledFooter>
    )
}

export default Footer