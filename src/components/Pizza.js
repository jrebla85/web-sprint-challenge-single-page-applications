import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import * as yup from 'yup'

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
    text-align: center; 
    font-weight: bold;
    margin-top: 5%;
    background-color: #e0c9af;
    color: #d42d2f;
    border: solid 1px black;
    border-radius: 15px;
    box-shadow: 2px 1px 1px grey;

    :hover {
        background-color: #d42d2f;
        color: #e0c9af;
    }
`
const schema = yup.object().shape({
    orderName: yup.string().required('Name is required').min(2, 'Name must contain at least 2 characters.'),
    size: yup.string().required('You must choose a size'),
    sauce: yup.string().required('Please choose a sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    tomato: yup.boolean(),
    olive: yup.boolean(),
    instructions: yup.string()
})

const Pizza = () => {

    const [form, setForm] = useState({
        orderName: '',
        size: '',
        sauce: '',
        pepperoni: false,
        sausage: false,
        bacon: false,
        tomato: false,
        olive: false,
        instructions: ''
    })

    const [disabled, setDisabled] = useState(true)

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({ ...form, [name]: valueToUse })
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return(
        <StyledDiv>
            <StyledForm onSubmit={event => {
                event.preventDefault();
                axios.post('./pizza', { form })
            }}>
            <StyledP>
                <input value={form.orderName} onChange={change} type="text" placeholder="Name" name="orderName"/>
            </StyledP>
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
                <StyledButton disabled={disabled}>
                    Order Now!
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
}

export default Pizza

