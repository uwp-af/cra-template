import { useNavigate, useLocation } from "react-router-dom";
import { useUser, useAuth } from "reactfire";


export default function Dashboard() {
    let {data: user} = useUser();
    let auth = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    function handleSignOut(e) {
        e.preventDefault()
        auth.signOut().then(() => {
            navigate("/login", {state: {from: location}})
        })
    }
    

    return (
        <>
            <h1>Dashboard</h1>
            <p>You are signed in as {user.email}</p>
            <button style={{borderRadius: "10px"}} type="button" onClick={handleSignOut}>Sign Out</button>
        </>
    )
}