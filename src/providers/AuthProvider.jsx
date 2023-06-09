import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState('');

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
     
    const provider = new GoogleAuthProvider();
    const logInByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const updateProfileUser = (name, photoUrl) => {
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: photoUrl
          });
    }

    const logOutUser = () => {
        setLoading(true);
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const userInfo = {
        createUser,
        logInUser,
        logInByGoogle,
        updateProfileUser,
        loading,
        logOutUser,
        user
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;