import { knuthShuffle as shuffle } from 'knuth-shuffle';
import nanoid from 'nanoid';

const composeState = (oldState, newState) =>
  Object.assign({}, oldState, newState);

const getInitialState = () => ({
  user: {
    name: ''
  },
  game: {
    activeTokens: [],
    tokens: []
  }
});

const rootReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'GET_TOKENS': {
      const originalTokens = new Array(6)
        .fill('https://place-hold.it/300/ccf0c3')
        .map(tokenURL => ({
          id: nanoid(2),
          imageURL: tokenURL
        }));

      const duplicatedTokens = [
        ...originalTokens.slice(0),
        ...originalTokens.slice(0)
      ];
      const shuffledTokens = shuffle(duplicatedTokens);

      return composeState(state, {
        game: {
          ...state.game,
          tokens: shuffledTokens
        }
      });
    }
    case 'SET_CARD_AS_SHOWN': {
      const tokenIndex = state.game.activeTokens.find(
        tokenIndex => tokenIndex === action.payload
      )
        ? null
        : action.payload;

      return composeState(state, {
        game: {
          ...state.game,
          activeTokens: tokenIndex
            ? [...state.game.activeTokens, tokenIndex]
            : state.game.activeTokens
        }
      });
    }
    case 'SET_USER_NAME':
      return composeState(state, {
        user: {
          ...state.user,
          name: action.payload
        }
      });
    default:
      return state;
  }
};

export default rootReducer;
