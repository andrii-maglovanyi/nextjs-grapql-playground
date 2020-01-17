import { auth, firebase, githubProvider, googleProvider } from "./firebase";

export type FirebaseUser = firebase.User | null;
type Callback = (user: FirebaseUser) => void;

export const doCreateUserWithEmailAndPassword = (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> =>
  auth.createUserWithEmailAndPassword(email.trim(), password);

export const doPasswordReset = async (email: string): Promise<void> =>
  await auth.sendPasswordResetEmail(email.trim());

export const doPasswordUpdate = async (password: string): Promise<void> =>
  await auth.currentUser?.updatePassword(password);

export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> =>
  auth.signInWithEmailAndPassword(email.trim(), password);

export const doSignInWithGithub = (): Promise<firebase.auth.UserCredential> =>
  auth.signInWithPopup(githubProvider);

export const doSignInWithGoogle = (): Promise<firebase.auth.UserCredential> =>
  auth.signInWithPopup(googleProvider);

export const doSignOut = async (): Promise<void> => await auth.signOut();

export const getIdToken = async (): Promise<string | undefined> =>
  await auth.currentUser?.getIdToken(true);

export const onAuthStateChanged = (cb: Callback): firebase.Unsubscribe =>
  auth.onAuthStateChanged(cb);
