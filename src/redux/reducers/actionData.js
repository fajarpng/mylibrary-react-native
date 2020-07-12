const initialState = {
    isError: false,
    isLoad: false,
    msg: '',
    token: null
  }
  
  const auth = (state=initialState, action) => {
    switch(action.type){
      case 'CLEAR': {
        return {
          ...state,
          msg: '',
        }
      }
      case 'BOOK_PENDING': {
        return {
          ...state,
          isError: false,
          isLoad: true
        }
      }
      case 'BOOK_REJECTED': {
        return {
          ...state,
          isError: true,
          msg: action.payload.response.data.msg,
          isLoad: false
        }
      }
      case 'BOOK_FULFILLED': {
        return {
          ...state,
          isError: false,
          msg: action.payload.data.msg,
          isLoad: false
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