import React, { useState, useEffect } from 'react'
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
    border-radius: 15px;
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

    const [form, setForm] = useState({
        size: '',
        sauce: '',
        pepperoni: false,
        sausage: false,
        bacon: false,
        tomato: false,
        olive: false,
        instructions: ''
    })

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({ ...form, [name]: valueToUse })
    }

    return(
        <StyledDiv>
            <StyledForm>
            <StyledP>
                Size
            </StyledP>
                <select onChange={change} value={form.size} name="size">
                    <option value="">
                        Select a Size
                    </option>
                    <option value="small">
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
                <label> Tomato Sauce
                    <input onChange={change} checked={form.sauce === 'tomato'} type="radio" value="tomato" name="sauce" /> 
                </label>
                <label>Garlic Parmesan
                    <input onChange={change} checked={form.sauce === 'parmesan'} type="radio" value="parmesan" name="sauce" /> 
                </label>
                <label> BBQ Sauce
                    <input onChange={change} checked={form.sauce === 'bbq'} type="radio" value="bbq" name="sauce" />
                </label>
                </div>
                <StyledP>
                    Toppings
                </StyledP>
                <div>
                    <input onChange={change} checked={form.pepperoni} type="checkbox" name="pepperoni" />
                    Pepperoni
                    <input onChange={change} checked={form.sausage} type="checkbox" name="sausage" />
                    Italian Sausage
                    <input onChange={change} checked={form.bacon} type="checkbox" name="bacon" />
                    Bacon
                    <input onChange={change} checked={form.tomato} type="checkbox" name="tomato" />
                    Fresh Garden Tomato
                    <input onChange={change} checked={form.olive} type="checkbox" name="olive" />
                    Olives
                </div>
                <StyledP>
                    Any special instructions?
                </StyledP>
                <div>
                    <textarea onChange={change} value={form.instructions} name="instructions" placeholder="Let us know!" />
                </div>
                <StyledButton>
                    <StyledA href="./Success">Order Now!</StyledA>
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
}

export default Pizza