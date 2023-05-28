import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import Login from "./Login.js";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import {auth} from "./firebase";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName
                    })
                );
            } else {
                dispatch(
                    logout()
                );
            }
        });
    }, [dispatch]);

    return (
        <div className="app">
            {user ? (
                <>
                    <Sidebar/>
                    <Chat/>
                </>
            ) : (
                <>
                    <Login />
                </>
            )}
        </div>
    );
}

export default App;
