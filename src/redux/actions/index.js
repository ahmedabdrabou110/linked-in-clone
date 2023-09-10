import { signInWithPopup } from "firebase/auth";
import { auth, fireStore, provider, storage } from "../../firebase";

import { getArticles, setLoading, setUser } from "./actions";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
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
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image) {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadRef = uploadBytesResumable(storageRef, payload?.image);
      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.trunc(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`uppload image is ${progress}  done!`);
        },
        (error) => alert(error.message),
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((url) => {
            const collectonRef = collection(fireStore, "articles");
            addDoc(collectonRef, {
              actors: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              comments: 0,
              video: payload.video,
              description: payload.description,
              shareImg: url,
            });
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      const collectionRef = collection(fireStore, "articles");
      addDoc(collectionRef, {
        actors: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        description: payload.description,
        video: payload.video,
        shareImg: payload.image,
      });
      dispatch(setLoading(false));
    } else {
      const collectionRef = collection(fireStore, "articles");
      addDoc(collectionRef, {
        actors: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        description: payload.description,
        video: payload.video,
        shareImg: payload.image,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticleAPI() {
  return (dispatch) => {
    let payload;
    const collectionRef = collection(fireStore, "articles");
    const orderedRef = query(collectionRef, orderBy("actors.date", "desc"));
    onSnapshot(orderedRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(getArticles(payload));
    });
  };
}
