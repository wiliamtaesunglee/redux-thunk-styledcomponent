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

export const setVehiclesListData = payload => ({ type: SET_VEHICLES_LIST_DATA, payload })
export const setVersionListData = payload => ({ type: SET_VERSION_DATA, payload })
export const setMakeListData = payload => ({ type: SET_MAKE_DATA, payload })
export const setModelListData = payload => ({ type: SET_MODEL_DATA, payload })

export const setNewVehicleCheckbox = payload => ({ type: SET_NEW_VEHICLE_CHECKBOX, payload })
export const setUsedVehicleCheckbox = payload => ({ type: SET_USED_VEHICLE_CHECKBOX, payload })
export const setVehicleType = payload => ({ type: SET_VEHICLE_TYPE, payload })
export const setRadioData = payload => ({ type: SET_RADIO_DATA, payload })
export const setFilterData = payload => ({ type: SET_FILTER_DATA, payload })
export const setMakeName = payload => ({ type: SET_MAKE_NAME, payload })
