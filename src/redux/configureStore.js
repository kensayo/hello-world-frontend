import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
const initialState = {
  messages: []
}

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
      case GET_MESSAGES_SUCCESS:
          return { messages: action.json.message }
      default:
          return state
  }    
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}