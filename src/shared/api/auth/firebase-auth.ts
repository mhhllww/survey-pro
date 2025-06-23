import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  reauthenticateWithCredential,
  GithubAuthProvider,
  EmailAuthProvider,
  updatePassword,
  AuthError,
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

export const resetPassword = async (
  currentPassword: string,
  newPassword: string
) => {
  const user = auth.currentUser;

  if (!user) {
    return { success: false };
  }
  if (currentPassword === newPassword) {
    return { success: false };
  }

  if (user && user.email) {
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      return { success: true };
    } catch (error: unknown) {
      const authError = error as AuthError;

      switch (authError.code) {
        case 'auth/wrong-password':
          break;
        case 'auth/requires-recent-login':
          break;
        case 'auth/invalid-credential':
          return { success: false };
        default:
          console.error(authError);
          return { success: false };
      }
    }
  }
};

export const signOutUser = () => {
  return signOut(auth);
};
