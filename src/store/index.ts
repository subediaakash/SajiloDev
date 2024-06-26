import { onAuthStateChanged } from "firebase/auth";
import { atom, selector, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";

export const isLoggedIn = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const currentUser = get(currUser);
    return !!currentUser.email;
  },
});

export const currUser = atom({
  key: "currUser",
  default: {
    email: null as string | null, // Update the default value to null
  },
});

// Function to listen for authentication state changes
export const listenForAuthChanges = () => {
  const setCurrentUser = useSetRecoilState(currUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser({ email: user ? user.email : "" });
    });
    return () => unsubscribe();
  }, [setCurrentUser]);
};
