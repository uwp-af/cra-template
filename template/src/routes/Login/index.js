import { useLocation, useNavigate, Navigate } from "react-router-dom"
import { useAuth, useSigninCheck } from "reactfire";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export default function Login() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    let { data: signInCheckResult, status: signInCheckStatus} = useSigninCheck();

    let [hidden, setHidden] = useState(true);

    let from = location.state && location.state.from ? location.state.from.pathname : "/user/";

    function handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(document.getElementById("login-form"));
        // One lining an assignment for brevity
        let [username, password] = [formData.get("username"), formData.get("password")];

        signInWithEmailAndPassword(auth, username, password).then(user => {
            console.log("Running");
            navigate(from, {replace: true})
        }).catch(err => {
            setHidden(false)
            setTimeout(() => {setHidden(true)}, 5000)
        })
    }

    function showPassword(e) {
        e.preventDefault();
        let password = document.getElementById("password");
        if (password.type === "password") {
            password.type = "text"
        } else {
            password.type = "password"
        }
    }

    if (signInCheckStatus !== "success") {
        return (
            <main
                style={{
                    padding: "20px"
                }}
            >
                <p>Checking Login Status</p>
            </main>
        )
    }

    if (signInCheckResult.signedIn) {
        return <Navigate to={"/user/"} replace={true} />
    }

    return (
        <main style={{ padding: "20px" }}>
            <h1>Login Here!</h1>
            <p hidden={hidden}>Please try again</p>
            <form onSubmit={handleSubmit} id="login-form" style={{ display: 'grid', rowGap: '10px', width: "20%", justifyContent: "center" }}>
                <div>
                    <label htmlFor="username" style={{width: "100px", display: "inline-block"}}>Username:</label>
                    <input type='text' name='username' id='username' style={{ marginLeft: "10px", width: "250px" }} />
                </div>
                <div>
                    <label htmlFor="password" style={{width: "100px", display: "inline-block"}}>Password:</label>
                    <input type='password' name='password' id='password' style={{ marginLeft: "10px", width: "200px", paddingRight: "52px" }} />
                    <button type="button" onClick={showPassword} style={{border: "none", background: "none", width: "50px", marginLeft: "-50px"}}>show</button>
                </div>
                <button type="submit" style={{width: "20%", minWidth: "60px", justifySelf:"center", borderRadius: "10px"}}>Login!</button>
            </form>
        </main>
    )
}

