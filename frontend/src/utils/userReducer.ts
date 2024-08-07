import { User } from "./User";
import {
  CHANGE_ACCOUNT_BALANCE,
  CHANGE_IS_LOGIN_ATTEMPT_STARTED,
  CHANGE_IS_LOGIN_SUCCESSFULL,
  CHANGE_IS_LOGOUT_ATTEMPT_STARTED,
  CHANGE_IS_PASSWORD_VALID,
  CHANGE_IS_USERNAME_VALID,
  CHANGE_PASSWORD,
  CHANGE_SELECTED_MAIN_PAGE_INDEX,
  CHANGE_USERNAME,
} from "./UserActionTypes";

const intialState = {
  username: "",
  password: "",
  accountBalance: 0.0,
  isUsernameValid: undefined,
  isPasswordValid: undefined,
  isLoginSuccessfull: undefined,
  isLoginAttemptStarted: false,
  isLogoutAttemptStarted: false,
  selectedMainPageIndex: 0,
};

export function userReducer(state = intialState, action: User): User {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case CHANGE_ACCOUNT_BALANCE:
      return {
        ...state,
        accountBalance: action.accountBalance,
      };
    case CHANGE_IS_USERNAME_VALID:
      return {
        ...state,
        isUsernameValid: action.isUsernameValid,
      };
    case CHANGE_IS_PASSWORD_VALID:
      return {
        ...state,
        isPasswordValid: action.isPasswordValid,
      };
    case CHANGE_IS_LOGIN_SUCCESSFULL:
      return {
        ...state,
        isLoginSuccessfull: action.isLoginSuccessfull,
      };
    case CHANGE_IS_LOGIN_ATTEMPT_STARTED:
      return {
        ...state,
        isLoginAttemptStarted: action.isLoginAttemptStarted,
      };
    case CHANGE_IS_LOGOUT_ATTEMPT_STARTED:
      return {
        ...state,
        isLogoutAttemptStarted: action.isLogoutAttemptStarted,
      };
    case CHANGE_SELECTED_MAIN_PAGE_INDEX:
      return {
        ...state,
        selectedMainPageIndex: action.selectedMainPageIndex,
      };
    default:
      return state;
  }
}
