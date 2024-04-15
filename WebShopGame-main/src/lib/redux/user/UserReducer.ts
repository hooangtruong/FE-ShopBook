const INITIAL_STATE = {
  _id: "",
  username: "",
  urlavatar: "",
  address: "",
  email: "",
  admin: false,
  createdAt: "",
  updatedAt: "",
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
