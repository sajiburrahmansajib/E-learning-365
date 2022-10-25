import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log('error', error)
            })
    };
    const githubLogIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log('error', error)
            })
    };


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const userProfile = (name, url) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
            .then(() => {
                console.log('User Profile Update')
            })
            .catch(error => {
                console.log('error', error)
            })
    };
    const emailPasswordLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert('Successfully Log Out')
            })
            .catch(error => {
                console.log('error', error)
            })
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        googleLogIn,
        logOut,
        createUser,
        userProfile,
        emailPasswordLogIn,
        githubLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;