import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";

export const provider = new OAuthProvider('microsoft.com');

export const auth = getAuth();


