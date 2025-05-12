import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from 'firebase/auth';

import { auth } from '@/shared/lib/firebase/firebase.ts';

export const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

export const loginWithGithub = () => {
  return signInWithPopup(auth, new GithubAuthProvider());
};

export const signOutUser = () => {
  return signOut(auth);
};
