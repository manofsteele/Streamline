import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const defaultState = {
  id: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return { id: action.user.id };
    case LOGOUT_CURRENT_USER:
      return state;
    default:
      return state;
  }
}
