import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Pizza = () => {

    return(
        <StyledDiv>
            <p>This is the Pizza Div!</p>
            <form>
                <input type="Text" placeholder="Name"></input>
                <input type="submit"></input>
            </form>
        </StyledDiv>
    )
}

export default Pizza