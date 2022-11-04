import {GoogleAuthProvider,signInWithPopup, User} from 'firebase/auth'
import { SetStateAction } from "react";
import firebase from 'firebase/compat/app';
export const provider = firebase.auth.GoogleAuthProvider;

interface Props {
    setStateFunction: SetStateAction<User| undefined>
}

