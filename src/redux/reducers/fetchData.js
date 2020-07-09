const initialState = {
    books : [],
    authors : [],
    genres : [],
    trans : [],
    isLoading: true,
    msg: '',
    pageInfo: ''
  }
  
  const fetchData = (state=initialState, action) => {
    switch(action.type){
      case 'GET_PENDING': {
        return {
            ...state,
            msg: 'PENDING',
            isLoading: true,
        }
      }
      case 'GET_FULFILLED': {
        return {
          ...state,
          msg: 'PENDING',
          isLoading : false,
          books : action.payload.data.data,
          pageInfo : action.payload.data.pageInfo
        }
      }
      case 'GENRE_PENDING': {
        return {
            ...state,
            isLoading : true,
        }
      }
      case 'GENRE_FULFILLED': {
        return {
          ...state,
          isLoading : false,
          genres : action.payload.data.data,
        }
      }
      case 'AUTHOR_PENDING': {
        return {
            ...state,
            isLoading : true,
        }
      }
      case 'AUTHOR_FULFILLED': {
        return {
          ...state,
          isLoading : false,
          authors : action.payload.data.data,
        }
      }
      case 'TRANS_FULFILLED': {
        return {
          ...state,
          isLoading : false,
          trans : action.payload.data.data,
        }
      }
      case 'CLEAR': {
        return {
          ...state,
          msg: ''
        }
      }
      default: {
        return {
          ...state
        }
      }
    }
  }
  
  export default fetchData