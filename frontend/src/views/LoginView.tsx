import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emeraldImage from "../assets/emerald.png";
import { handleLoginButtonPress } from "../utils/handleLoginButtonPress";
import { User } from "../utils/User";
import { CHANGE_PASSWORD, CHANGE_USERNAME } from "../utils/UserActionTypes";

export default function LoginView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    username,
    password,
    isUsernameValid,
    isPasswordValid,
    isLoginSuccessfull,
    isLoginAttemptStarted,
  } = useSelector((state: User) => state.userReducer as unknown as User);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img className="w-[25%] h-[25%]" src={emeraldImage} alt="Emerald" />
        <h1 className="font-bold">Emerald App</h1>
        <TextField
          error={isUsernameValid === false}
          helperText={
            isUsernameValid === false ? "Provide correct username" : ""
          }
          label="Username"
          variant="outlined"
          id={isUsernameValid === false ? "outlined-error" : "outlined-error"}
          onChange={(event) =>
            dispatch({ type: CHANGE_USERNAME, username: event.target.value })
          }
        />
        <TextField
          error={isPasswordValid === false}
          helperText={
            isPasswordValid === false ? "Provide correct password" : ""
          }
          label="Password"
          type="password"
          onChange={(event) =>
            dispatch({ type: CHANGE_PASSWORD, password: event.target.value })
          }
        />
        <Button
          className="mt-5"
          variant="contained"
          color="success"
          onClick={async () =>
            await handleLoginButtonPress(
              {
                username: username,
                password: password,
              },
              dispatch,
              navigate
            )
          }
        >
          Login yourself
        </Button>
        {isLoginSuccessfull === false ? (
          <Alert variant="filled" severity="error">
            Provide correct login data.
          </Alert>
        ) : (
          <></>
        )}
        {isLoginAttemptStarted && (
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 z-50">
            <CircularProgress className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>
    </div>
  );
}
