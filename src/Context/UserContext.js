import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    };

    const githubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    };


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }


    const emailPasswordLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        googleLogIn,
        logOut,
        createUser,
        verifyEmail,
        updateUserProfile,
        emailPasswordLogIn,
        githubLogIn,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;