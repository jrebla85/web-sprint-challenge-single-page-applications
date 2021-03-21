import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 5%;
`
const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledP = styled.p`
    width: 100%;
    height: 100px;
    background-color: #d42d2f;
    color: #e0c9af;
    text-align: center;
    font-size: large;
    vertical-align: middle;
    line-height: 90px;
`
const StyledButton = styled.button`
    margin-top: 5%;
    border: none;
    background-color: #e0c9af;
`
const StyledA = styled.a `
    text-align: center; 
    width: 15%;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: #e0c9af;
    color: #d42d2f;
    padding: 5px;
    margin: 25% auto;
    text-decoration: none;
    border: solid 1px black;
    box-shadow: 2px 1px 1px grey;
    border-radius: 15px;

    :hover {
        background-color: #d42d2f;
        color: #e0c9af;
    }
`

const Pizza = () => {

    return(
        <StyledDiv>
            <StyledForm>
            <StyledP>
                Size
            </StyledP>
                <select name="crust">
                    <option value="">
                        Select a Size
                    </option>
                    <option name="small">
                        Small
                    </option>
                    <option value="medium">
                        Medium
                    </option>
                    <option value="large">
                        Large
                    </option>
                </select>
                <StyledP>
                    Sauce
                </StyledP>
                <div>
                <input type="radio" value="classic-tomato" name="sauce" /> Classic Tomato
                <input type="radio" value="garlic-parmesan" name="sauce" /> Garlic Parmesan
                <input type="radio" value="bbq" name="sauce" /> BBQ
                </div>
                <StyledP>
                    Toppings
                </StyledP>
                <div>
                    <input type="checkbox" name="pepperoni" />
                    Pepperoni
                    <input type="checkbox" name="italian-sausage" />
                    Italian Sausage
                    <input type="checkbox" name="bacon" />
                    Bacon
                    <input type="checkbox" name="tomato" />
                    Fresh Garden Tomato
                    <input type="checkbox" name="olive" />
                    Olives
                </div>
                <StyledP>
                    Any special instructions?
                </StyledP>
                <div>
                    <textarea placeholder="Let us know!" />
                </div>
                <StyledButton>
                    <StyledA href="./Success">Order Now!</StyledA>
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
}

export default Pizza