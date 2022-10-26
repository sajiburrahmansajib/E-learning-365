import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const githubProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        googleProviderLogin,
        githubProviderLogin,
        logOut,
        updateUserProfile,
        verifyEmail,
        createUser,
        signIn
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;