import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const BigInput = ({ placeHolder, options }) => {
  return (
    <CustomInput>
      <label>{placeHolder}</label>
      <select>
        <option value='default' label='' />
        {options.map((option, index) => (
          <option key={option.ID || index * Math.random() * 10}>{option.Name || option}</option>
        ))}
      </select>
    </CustomInput>
  )
}

const CustomInput = styled.div`
  border: 2px solid #C4C4C4;
  max-width: 397px;
  width: 100%;
  height: 36px;
  border-radius: 5px;
  padding: 0 6px 0 6px;
  color: #C4C4C4;
  margin-top: 15px;
  position: relative;
  select {
    padding: 0 0 5px 0;
    font-size: 12px;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 36px;
    padding-left: 70px;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    appearance:none;
    vetical-align: center;
    options {
      heigth: 36px;
      text-align: center;
      background-color: white;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

  @media (max-width: 897px) {
    padding: 6px;
    select {
      font-size: 16px;
    }
  }

  @media (max-width: 431px) {
    width: 200px;
  }
`

BigInput.propTypes = {
  placeHolder: propTypes.string.isRequired,
  options: propTypes.array.isRequired
}

export default BigInput
