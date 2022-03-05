import Types from '../Auth/Types';

const initialState = {
  isAppLoading: true,
  token: '',
  isFirstTimeUse: true,
};

const AuthReducers = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_IS_APP_LOADING:
      return {...state, isAppLoading: action.payload};
    case Types.SET_TOKEN:
      return {...state, token: action.payload};
    case Types.SET_FIRST_TIME_USE:
      return {...state, isFirstTimeUse: action.payload};
    default:
      return state;
  }
};

export default AuthReducers;
