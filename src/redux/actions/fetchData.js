import axios from '../../assets/helper/axios'
const REACT_APP_URL = 'http://192.168.43.133:1000/'

export const fetchBook = (param) =>{
    const url = `${REACT_APP_URL}books/${param}`
  return {
    type: 'GET',
    payload: axios().get(url)
  }
}
export const fetchGenre = () =>{
    const url = `${REACT_APP_URL}genres`
  return {
    type: 'GENRE',
    payload: axios().get(url)
  }
}
export const fetchAuthor = () =>{
    const url = `${REACT_APP_URL}authors`
  return {
    type: 'AUTHOR',
    payload: axios().get(url)
  }
}
export const fetchTrans = () =>{
    const url = `${REACT_APP_URL}trans`
  return {
    type: 'TRANS',
    payload: axios().get(url)
  }
}
export const clear = () =>{
  return {
    type: 'CLEAR'
  }
}