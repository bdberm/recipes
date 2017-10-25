import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => (
  {
    type: RECEIVE_CURRENT_USER,
    user,
  }
);

const removeCurrentUser = () => (
  { type: REMOVE_CURRENT_USER }
);

const receiveSessionErrors = (errors) => (
  {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  }
);

export const removeSessionErrors = () => (
  {
    type: REMOVE_SESSION_ERRORS,
  }
);

export const signup = (user) => (dispatch) => (
  SessionAPIUtil.signup(user).then(
    ((userRes) => dispatch(receiveCurrentUser(userRes))),
    ((errors) => dispatch(receiveSessionErrors(errors)))
  )
);

export const login = (user) => (dispatch) => (
  SessionAPIUtil.login(user).then(
    ((userRes) => dispatch(receiveCurrentUser(userRes))),
    ((errors) => dispatch(receiveSessionErrors(errors)))
  )
);

export const logout = () => (dispatch) => (
  SessionAPIUtil.logout().then(
    (() => dispatch(removeCurrentUser()))
  )
);
