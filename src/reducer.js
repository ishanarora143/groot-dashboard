import { combineReducers } from 'redux';

import login from './views/login/loginState';
import fetch from './views/chats/chatState'
export default combineReducers({
  login,
  fetch,
});
