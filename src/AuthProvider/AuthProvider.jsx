import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firbase/firebase.config";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// import auth from "../Firbase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return (() => {
            unSubscribe();
        })
    }, [])

    useEffect(() => {
        fetch(' https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/addproduct')
        .then(res => res.json())
        .then(data => {
            const sortedData = data.sort((a, b) => b.price - a.price)
            setData(sortedData)
        } )
    },[])

    // useEffect(() => {
    //     const sortedData = [...jsonData].sort((a, b) => b.price - a.price);
    //     setJsonData(sortedData);
    // },[])

    // google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    const authInfo = {
        user,
        loading,
        data,
        createUser,
        userSignIn,
        userSignOut,
        signInWithGoogle


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node

}

export default AuthProvider;