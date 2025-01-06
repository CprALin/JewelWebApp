import { useNavigate } from "react-router";
import { Alert } from "./Alert";

export function AlertLogIn() {
    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate("/");
    }

    return(
       <Alert>For more features, please <button onClick={handleLogIn} className="text-glow">Log In</button>!</Alert> 
    )
}
