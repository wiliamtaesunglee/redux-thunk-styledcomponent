import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const SmallInput = ({ placeHolder, options, changeEvent }) => {
  return (
    <CustomInput>
      <select onChange={changeEvent}>
        <p>{placeHolder}</p>
        <option value='default' label='' />
        {options.map((option, index) => (
          <option key={option.ID || index * Math.random() * 10} value={option.ID}>{option.Name || option}</option>
        ))}
      </select>
    </CustomInput>
  )
}

const CustomInput = styled.div`
  max-width: 192px;
  width: 100%;
  border: 2px solid #C4C4C4;
  height: 36px;
  border-radius: 5px;
  color: #C4C4C4;
  margin-top: 15px;
  position: relative;

  label {
    font-size: 16px;
    padding: 0 6px 0 6px;
  }

  select {
    padding: 0 0 3px 110px;
    background: none;
    border: none;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 36px;
    font-size: 12px;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    appearance:none;

    option {
      padding-left: 20px;
      text-align: center;
      background-color: white;
      color: red;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;

    }
  }

  @media (max-width: 879px) {
    max-width: 393px;
    display: flex;
    align-items: center;

    label {
      padding: 6px;
      vertical-align: middle;
      display: flex;
      align-items: center;
    }

  }

  @media (max-width: 431px) {
    max-width: 200px;
    display: flex;
    align-items: center;

    label {
      padding: 6px;
      vertical-align: middle;
      display: flex;
      align-items: center;
    }

  }
`

SmallInput.propTypes = {
  placeHolder: propTypes.string.isRequired,
  options: propTypes.array.isRequired,
  changeEvent: propTypes.func
}

export default SmallInput
