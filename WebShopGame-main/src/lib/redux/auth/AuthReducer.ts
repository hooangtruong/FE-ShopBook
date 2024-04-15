const INITIAL_STATE = {
  accessToken: null,
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_AUTH_TOKEN":
      const auth = {
        ...state,
        accessToken: action.payload,
      };
      return auth;
    default:
      return state;
  }
};

export default authReducer;
