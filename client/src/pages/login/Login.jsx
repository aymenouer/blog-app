import { useContext, useRef } from "react"
import "./login.css"
import { Context } from './../../context/Context';
import axios from "axios";

function Login() {
    const usernref = useRef();
    const passwordnref = useRef();
    const {dispatch , isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("/auth/login", {
                username: usernref.current.value,
                password: passwordnref.current.value,

            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"}) 
        }
        }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form  className="loginForm" onSubmit={handleSubmit} >
            <label >Username </label>
            <input  className="loginInput" ref={usernref} type="text" placeholder="Enter your Username ..." />
            <label >Password</label>
            <input className="loginInput" ref={passwordnref}  type="password" placeholder="Enter your password..." />
            <button className="loginButton" type="submit" disabled={isFetching} >Login</button>
            </form>
       
        </div>
    )
}

export default Login
