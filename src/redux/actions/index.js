import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

import { setUser } from "./actions";
export function signInAPi() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}
