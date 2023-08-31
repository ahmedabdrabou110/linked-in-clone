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

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutApi() {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(setUser(null));
    }).catch(error => alert(error.message));
  };
}
