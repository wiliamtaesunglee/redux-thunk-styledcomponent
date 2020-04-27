import styled from 'styled-components'

export const Header = styled.header`
  text-align: left;
`

export const Box = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`

export const BoxHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 879px) {
    flex-direction: column;
    justify-content: left;
    div {
      padding-top: 20px;
    }
  }
`

export const VeicleType = styled.div`
  display: flex;
  width: 170px;
  height: 46px;
  justify-content: space-around;
  align-items: flex-end;
  border-bottom: 3px solid #${props => props.vehicle === 'active' ? 'CA242E' : 'C4C4C4'};
  cursor: pointer;
  span {
    color: #${props => props.vehicle === 'active' ? 'CA242E' : 'C4C4C4'};
    margin-bottom: 15px;
  }
  div {
    span {
      font-size: 16px;
      color: #C4C4C4;
      margin-bottom: 15px;
    }
    h3 {
      font-size: 24px;
      margin: 0;
      color: #${props => props.vehicle === 'active' ? 'CA242E' : 'C4C4C4'};
      margin-bottom: 15px;
    }
  }
`

export const FormContainer = styled.div`
  background-color: white;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 806px;
  height: 312px;
  margin: 0 auto;

  .form-options {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;

    @media (max-width: 879px) {
      flex-direction: column;
      justify-content: left;
      align-items: left;
    }

    &-advanced {
      cursor: pointer;
      color: #9A3246;
      font-size: 18px;
      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: 900;
      }

      @media (max-width: 879px) {
        margin-bottom: 15px;
      }
    }

    &-clear-filters {
      color: #C4C4C4;
      font-size: 16px;
      margin-right: 20px;
      background-color: white;
      border: none;
    }

    &-offers {
      width: 292px;
      height: 46px;
      border: none;
      border-radius: 5px;
      background-color: #CA242E;
      color: white;
      font-size: 20px;
      font-weight: 500;
    }
  }

  @media (max-width: 879px) {
    height: 500px;
    margin-left: 20px
    width: 879px;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const Checkbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  color: #C4C4C4;
  margin-right: 20px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 2px;
    border: 2px solid #C4C4C4;

    &:after {
      left: 4px;
      top: 0px;
      width: 5px;
      height: 10px;
      border: solid #9A3246;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  input:checked ~ .checkmark {
    background-color: white;

    &:after {
      display: block;
    }
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CustomInput = styled.div`
  max-width: 397px;
  width: 100%;
  border: 2px solid #C4C4C4;
  border-radius: 5px;
  color: #C4C4C4;
  margin-top: 15px;
  align-items: center;
  .city {
    display: flex;
    align-items: center;
    width: 65%;
    padding: 0 6px 0 6px;
    height: 36px;
    input {
      border: none;
      width: 100%;
      padding-left: 15px;
    }
  }
  .distance {
    display: flex;
    align-items: center;
    width: 35%;
    padding: 0 6px 0 6px;
    border-left: 2px solid #C4C4C4;
    height: 36px;
    position: relative;

    select {
      background: none;
      border: none;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 36px;
      padding-left: 50px;
      background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
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
  }

  @media (max-width: 879px) {
    display: flex;
    flex-direction: column;
    border: none;
    max-width: 100%;
    .city {
      width: 397px;
      max-width: 100%;
      border: 2px solid #C4C4C4;
      border-radius: 5px;
      input {
        width: 80%;
      }
    }
    .distance {
      margin-top: 15px;
      border: 2px solid #C4C4C4;
      width: 397px;
      max-width: 100%;
      border-radius:5px;
    }
  }

  @media (max-width: 431px) {
   .city {
      width: 200px;
      max-width: 100%;
      border: 2px solid #C4C4C4;
      border-radius: 5px;
      input {
        width: 80%;
      }
    }
    .distance {
      margin-top: 15px;
      border: 2px solid #C4C4C4;
      width: 200px;
      max-width: 100%;
      border-radius:5px;
    }
  }
`

export const VeicleContainer = styled.div`
  display: flex;
`
export const SellButton = styled.button`
  width: 185px;
  height: 40px;
  font-size: 16px;
  color: #d9a448;
  background: none;
  border: 2px solid #d9a448;
  margin-bottom: 10px;

`

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 879px) {
    div {
      display: block;
    }
  }

`

export const ListVahicles = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`

export const Vehicle = styled.div`
  border: 2px solid black;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  .image-container {
    max-width: 200px;
    max-height: 100%;

    image {
      max-width: 100%;
    }
  }
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }
`
