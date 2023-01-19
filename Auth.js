import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const AuthContext = createContext(undefined);

const AuthProvider = (props) => {
    // Contextに持たせるcurrentUserは内部的にはuseStateで管理
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserDetails = () => {
            console.log("認証呼び出しタイミング")
            // デプロイ時に修正
            // return axios.get("https://ddd.herokuapp.com/api/auth/status", {
            //     withCredentials: true
            // });
            return axios.get("http://localhost:5000/api/auth/status", {
                withCredentials: true
            });
        }
        getUserDetails()
            .then(({ data }) => {
                setCurrentUser(data);
                setLoading(false);
                console.log(data)
            }).catch((err) => {
                setLoading(false);
            });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser: currentUser,
                loading: loading,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };