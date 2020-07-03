import axioss from '../../assets/helper/axios'
const REACT_APP_URL = 'http://localhost:1000/'
import axios from 'axios'

export const fetchBook = (param) =>{
    const url = `${REACT_APP_URL}books?${param}`
  return {
    type: 'GET',
    payload: axios.get(url)
  }
}
export const fetchGenre = () =>{
    const url = `${REACT_APP_URL}genres`
  return {
    type: 'GENRE',
    payload: axioss().get(url)
  }
}
export const fetchAuthor = () =>{
    const url = `${REACT_APP_URL}authors`
  return {
    type: 'AUTHOR',
    payload: axioss().get(url)
  }
}
export const fetchTrans = () =>{
    const url = `${REACT_APP_URL}trans`
  return {
    type: 'TRANS',
    payload: axioss().get(url)
  }
}