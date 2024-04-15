const setAuthToken = (data: any) => {
  return {
    type: "SET_AUTH_TOKEN",
    payload: data,
  };
};

export { setAuthToken };
