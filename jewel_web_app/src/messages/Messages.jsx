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

export function AlertAfterLogIn(){
    return(
        <Alert>User logged in successfully !</Alert>
    )
}

export function ErrorLogin() {
    return(
        <Alert>Email or Password is incorrect !</Alert>
    )
}

export function LogOutMessage() {
    return(
        <Alert>You have logged out!</Alert>
    )
}

export function SignUpMessage() {
    return(
        <Alert>User signed up successfully !</Alert>
    )
}

export function SignUpError() {
    return(
        <Alert>Registration faild . Email or Username already exist !</Alert>
    )
}