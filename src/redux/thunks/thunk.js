// import { fetchMakeData } from '../../services/HttpServices'
import {
  setMakeListData,
  setVehiclesListData,
  setModelListData,
  setVersionListData
} from '../actions/actions'

export const thunk = {
  getMakeListData: () => {
    return dispatch => {
      return fetch('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make')
        .then(response => response.json())
        .then(response => dispatch(setMakeListData(response)))
    }
  },

  getVehicleListData: page => {
    return dispatch => {
      return fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=${page}`)
        .then(response => response.json())
        .then(response => dispatch(setVehiclesListData(response)))
    }
  },

  getModelListData: makeId => {
    return dispatch => {
      return fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${makeId}`)
        .then(response => response.json())
        .then(response => dispatch(setModelListData(response)))
    }
  },

  getVersionListData: modelId => {
    return dispatch => {
      return fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${modelId}`)
        .then(response => response.json())
        .then(response => dispatch(setVersionListData(response)))
    }
  }
}
