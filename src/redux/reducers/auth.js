const initialState = {
    isError: false,
    msg: '',
    token: null,
    name: '',
    email: '',
    id:'',
    role: ''
  }
  
  const auth = (state=initialState, action) => {
    switch(action.type){
      case 'CLEAR': {
        return {
          ...state,
          msg: '',
        }
      }
      case 'LOGIN_PENDING': {
        return {
          ...state,
          isError: false
        }
      }
      case 'LOGIN_REJECTED': {
        return {
          ...state,
          isError: true,
          msg: action.payload.response.data.msg,
        }
      }
      case 'LOGIN_FULFILLED': {
        return {
          ...state,
          isError: false,
          msg: action.payload.data.msg,
          token: action.payload.data.token,
          name: action.payload.data.name,
          email: action.payload.data.email,
          id: action.payload.data.id,
          role: action.payload.data.role
        }
      }
      case 'REGISTER_PENDING': {
        return {
          ...state,
          isError: false
        }
      }
      case 'REGISTER_REJECTED': {
        return {
          ...state,
          isError: true,
          msg: action.payload.response.data.msg,
        }
      }
      case 'REGISTER_FULFILLED': {
        return {
          ...state,
          isError: false,
          msg: action.payload.data.msg,
        }
      }
      case 'LOGOUT': {
        return {
          ...state,
          isError: false,
          msg: '',
          token: null,
          name: '',
          email: '',
          id: '',
          role: ''
        }
      }
      default: {
        return {
          ...state
        }
      }
    }
  }
  
  export default auth