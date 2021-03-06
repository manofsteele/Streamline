import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_WORKOUTS } from '../actions/workout_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { LOGOUT_CURRENT_USER , LOGIN_USER} from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {

  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
    case RECEIVE_WORKOUTS:
      return merge({}, newState, action.users)
    case RECEIVE_USER:
    case LOGIN_USER:
    case RECEIVE_CURRENT_USER:
      return merge({}, newState, {[action.user.id]: action.user})
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
