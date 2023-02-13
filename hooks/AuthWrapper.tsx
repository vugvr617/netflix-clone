import {
  createUserWithEmailAndPassword,
  Auth,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/usersReducer";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { setInitialUserLoading } from "../store/usersReducer";

interface IAuthWrapper {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: IAuthWrapper) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(setUser(user));
      } else {
        router.push("login");
      }
      dispatch(setInitialUserLoading(false));
    });
  }, [auth]);

  return <div>{children}</div>;
};

export default AuthWrapper;
