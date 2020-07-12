const initialState = {
    isError: false,
    msg: '',
    image: null,
    token: null,
    name: '',
    isLoading: false,
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
          isLoading: true,
          isError: false
        }
      }
      case 'LOGIN_REJECTED': {
        return {
          ...state,
          isError: true,
          isLoading: false,
          msg: action.payload.response.data.msg,
        }
      }
      case 'LOGIN_FULFILLED': {
        const {msg, token, image, name, id, role, email} = action.payload.data
        return {
          ...state,
          isLoading: false,
          isError: false,
          image, 
          msg,
          token,
          name,
          email,
          id,
          role,
        }
      }
      case 'REGISTER_PENDING': {
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      }
      case 'REGISTER_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          msg: action.payload.response.data.msg,
        }
      }
      case 'REGISTER_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isError: false,
          msg: action.payload.data.msg,
        }
      }
      case 'UPLOAD_PENDING': {
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      }
      case 'UPLOAD_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          msg: action.payload.response.data.msg,
        }
      }
      case 'UPLOAD_FULFILLED': {
        const {msg} = action.payload.data
        const {image, name, email} = action.payload.data.data
        return {
          ...state,
          isLoading: false,
          isError: false,
          msg,
          image,
          name,
          email
        }
      }
      case 'LOGOUT': {
        return {
          ...state,
          isError: false,
          msg: '',
          image: null,
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