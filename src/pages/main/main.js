import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/images/webmotors.svg'
import { SmallInput } from '../../components/SmallInput'
import { BigInput } from '../../components/BigInput'
import { thunk } from '../../redux/thunks/thunk'

import {
  setFilterData,
  setVehicleType,
  setNewVehicleCheckbox,
  setUsedVehicleCheckbox,
  setRadioData,
  setMakeName
} from '../../redux/actions/actions'

import {
  Header,
  Box,
  BoxHead,
  VeicleContainer,
  VeicleType,
  SellButton,
  FormContainer,
  Form,
  CheckBoxContainer,
  Checkbox,
  FilterOptions,
  CustomInput,
  ListVahicles,
  Vehicle
} from './styles'

const Main = () => {
  const searchData = useSelector(state => state)
  const dispatch = useDispatch()

  const currencyBRL = ['', ...searchData.priceRange.map(value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))]

  const [sellButton, setSellButton] = useState(true)
  const [advancedSearch, setadvancedSearch] = useState(true)
  const [vehicleSelected, setVehicleSelected] = useState({
    car: true,
    motoCicle: false
  })

  const handleVehicleChange = (vehicleType) => {
    dispatch(setVehicleType(vehicleType))
    if (vehicleType === 'car') {
      setVehicleSelected(() => {
        return {
          car: true,
          motoCile: false
        }
      })
    } else {
      setVehicleSelected(() => {
        return {
          car: false,
          motoCile: true
        }
      })
    }
  }

  const handleMakeChange = event => {
    const makeID = Number(event.target.value)
    dispatch(thunk.getModelListData(makeID))
    dispatch(setMakeName(findMakeNameById(makeID).Name))
  }

  const findMakeNameById = (makeID) => searchData.makeList.find((element) => {
    return element.ID === makeID
  })

  const handleRadioChange = event => {
    event.preventDefault()
    const value = event.target.value
    dispatch(setRadioData(value))
  }

  const handleNewVehicleCheckboxChange = () => {
    dispatch(setNewVehicleCheckbox())
  }

  const handleUsedVehicleChackBoxChange = () => {
    dispatch(setUsedVehicleCheckbox())
  }

  const handleModelChange = event => {
    const id = event.target.id || 1

    dispatch(thunk.getVersionListData(id))
  }

  // const filterVehiclesList = searchData.vehiclesList.filter(vehicle => {
  //   return vehicle.make === searchData.makeName
  // })

  const handleGetAllVehicles = (event) => {
    const page = Number(event.target.innerHTML)
    event.preventDefault()

    dispatch(thunk.getVehicleListData(page))
    setFilterVehicle('all')
  }

  const setFilterVehicle = (all) => {
    const vehiclesList = []
    searchData.vehiclesList.filter(vehicle => {
      const vehicleMake = all === 'all' ? true : vehicle.Make === searchData.makeName

      return vehicleMake && vehiclesList.push(vehicle)
        ? dispatch(setFilterData(vehiclesList))
        : null
    })
  }

  const handleSearchVehicleClick = (event) => {
    event.preventDefault()
    console.log('disparou')
    setFilterVehicle('filter')
    console.log('disparou tmb')
  }

  useEffect(() => {
    dispatch(thunk.getMakeListData())

    dispatch(thunk.getVehicleListData(1))
  }, [])

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Box>
        <BoxHead>
          <VeicleContainer>
            <VeicleType onClick={() => handleVehicleChange('car')} vehicle={vehicleSelected.car ? 'active' : null}>
              <span>Imagem</span>
              <div>
                <span>Comprar</span>
                <h3>Carro</h3>
              </div>
            </VeicleType>
            <VeicleType onClick={() => handleVehicleChange('motocicle')} vehicle={vehicleSelected.motoCile ? 'active' : null}>
              <span>Imagem</span>
              <div>
                <span>Comprar</span>
                <h3>Moto</h3>
              </div>
            </VeicleType>
          </VeicleContainer>
          <div onClick={() => setSellButton(!sellButton)}>
            {
              sellButton ? <SellButton>Vender Meu Carro</SellButton> : <p>desculpe, função inativa = (</p>
            }
          </div>
        </BoxHead>
        <FormContainer>
          <Form>
            <CheckBoxContainer>
              <Checkbox>Novo
                <input
                  type='checkbox'
                  onChange={handleNewVehicleCheckboxChange}
                />
                <span className='checkmark' />
              </Checkbox>

              <Checkbox>Usado
                <input
                  type='checkbox'
                  onChange={handleUsedVehicleChackBoxChange}
                />
                <span className='checkmark' />
              </Checkbox>
            </CheckBoxContainer>
            <FilterOptions>

              <div>
                <CustomInput>
                  <div className='city'>
                    <label id='location'>Onde: </label>
                    <input type='text' htmlFor='locaton' />
                  </div>

                  <div className='distance'>
                    <label id='radio'>Raio: </label>
                    <select onChange={handleRadioChange}>
                      <option value='default' label='' />
                      {searchData.radioList.map((option, index) => (
                        <option key={index} value={option}>{option + ' km'}</option>
                      ))}
                    </select>
                  </div>
                </CustomInput>
                <SmallInput placeHolder='Marca' options={searchData.makeList} changeEvent={handleMakeChange} />
                <SmallInput placeHolder='Modelo' options={searchData.model} changeEvent={handleModelChange} />
              </div>

              <div>
                <SmallInput placeHolder='Ano Desejado' options={searchData.vehicleYear} />
                <SmallInput placeHolder='Faixa de Preço' options={currencyBRL} />
                <BigInput placeHolder='Versão' options={searchData.version} />
              </div>

            </FilterOptions>
            <div className='form-options'>

              <div onClick={() => setadvancedSearch(false)}>
                {
                  advancedSearch
                    ? <p className='form-options-advanced'> <span>&gt;</span> Buscar Tdosos os Veículos</p>
                    : [1, 2].map(item => <button onClick={handleGetAllVehicles} key={item}>{item}</button>)

                }
              </div>
              <div>
                <button className='form-options-clear-filters'>Limpar Filtros</button>
                <button className='form-options-offers' onClick={handleSearchVehicleClick}>Filtro por marca</button>
              </div>
            </div>
          </Form>
        </FormContainer>
      </Box>

      <ListVahicles>
        {
          searchData.filterVehicleList.map(vehicle => (
            <Vehicle key={vehicle.ID}>
              <div className='image-container'>
                <img src={vehicle.Image} alt={vehicle.Name} />
              </div>
              <div>
                <h3>{vehicle.Make}</h3>
                <p>{vehicle.Model}</p>
                <p>{vehicle.Version}</p>
                <p>R$ {vehicle.Price}</p>
                <p>{vehicle.YearModel}</p>
              </div>
            </Vehicle>
          ))
        }
      </ListVahicles>
    </>
  )
}

export default Main
