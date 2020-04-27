import React from 'react'
import propTypes from 'prop-types'

const CheckBox = ({ title, id }) => {
  return (
    <div>
      <input type='checkbox' id={id} />
      <label htmlFor={id}>{title}</label>
    </div>
  )
}

CheckBox.propTypes = {
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired
}

export default CheckBox
