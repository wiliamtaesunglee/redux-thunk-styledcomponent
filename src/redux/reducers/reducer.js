import {
  SET_VEHICLES_LIST_DATA,
  SET_VERSION_DATA,
  SET_MAKE_DATA,
  SET_MODEL_DATA,
  SET_NEW_VEHICLE_CHECKBOX,
  SET_USED_VEHICLE_CHECKBOX,
  SET_VEHICLE_TYPE,
  SET_RADIO_DATA,
  SET_FILTER_DATA,
  SET_MAKE_NAME
} from '../actions/actionsType'

const initialState = {
  newVehicle: false,
  usedVehicle: false,
  vehicleType: 'car',
  radio: 5,
  makeList: [''],
  makeId: 1,
  makeName: '',
  model: [''],
  modelId: 1,
  version: [''],
  versionName: '',
  vehiclesList: [],
  filterVehicleList: [],
  radioList: ['', 5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 150, 200, 250, 300],
  vehicleYear: ['', 2015, 2016, 2017, 2018, 2019, 2020, 2021],
  priceRange: [8000, 10000, 15000, 20000, 30000]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES_LIST_DATA:
      return { ...state, vehiclesList: action.payload }
    case SET_VERSION_DATA:
      return { ...state, version: action.payload }
    case SET_MAKE_DATA:
      return { ...state, makeList: action.payload }
    case SET_MODEL_DATA:
      return { ...state, model: action.payload }
    case SET_NEW_VEHICLE_CHECKBOX:
      return { ...state, newVehicle: !state.newVehicle }
    case SET_USED_VEHICLE_CHECKBOX:
      return { ...state, usedVehicle: !state.usedVehicle }
    case SET_VEHICLE_TYPE:
      return { ...state, vehicleType: action.payload }
    case SET_RADIO_DATA:
      return { ...state, radio: action.payload }
    case SET_FILTER_DATA:
      return { ...state, filterVehicleList: action.payload }
    case SET_MAKE_NAME:
      return { ...state, makeName: action.payload }
    default:
      return { ...state }
  }
}

export default reducer
