export const getTokens = () => ({
  type: 'GET_TOKENS'
});

export const setCardAsShown = id => ({
  type: 'SET_CARD_AS_SHOWN',
  payload: id
});

export const setUserName = userName => ({
  type: 'SET_USER_NAME',
  payload: userName
});
