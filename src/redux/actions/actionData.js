import axios from '../../assets/helper/axios'
const REACT_APP_URL = 'http://192.168.43.133:1000/'

// action transaction
export const addTrans = (data,token) =>{
     const url = `${REACT_APP_URL}trans`
  return {
    type: 'BOOK',
    payload: axios(token).post(url, data)
  }
}
export const deleteTrans = (id,token) => {
	const url = `${REACT_APP_URL}trans/${id}`
	return {
    type: 'BOOK',
    payload: axios(token).delete(url)
  }
}
// clear
export const clear = () => {
  return {
    type: 'CLEAR'
  }
}