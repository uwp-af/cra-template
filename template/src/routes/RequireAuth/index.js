import { Navigate, useLocation } from "react-router-dom";
import { useSigninCheck } from "reactfire";

export default function RequireAuth({children}) {
    let {data: signInCheckResult, status: signInCheckStatus} = useSigninCheck();
    let location = useLocation();

    if (signInCheckStatus !== "success") {
        return <p>{signInCheckStatus}</p>
    }

    if (!signInCheckResult.user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
}