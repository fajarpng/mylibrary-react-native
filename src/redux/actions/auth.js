import axios from '../../assets/helper/axios'
const REACT_APP_URL = 'http://192.168.43.133:1000/'

export const login = (data)=>{
    const url = `${REACT_APP_URL}users/login` 
  return {
    type: 'LOGIN',
    payload: axios().post(url, data)
  }
}
export const register = (data)=>{
    const url = `${REACT_APP_URL}users`
  return {
    type: 'REGISTER',
    payload: axios().post(url, data)
  }
}
export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
// clear
export const clear = () => {
  return {
    type: 'CLEAR'
  }
}