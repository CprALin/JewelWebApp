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

export function AddRoleSuccess() {
    return(
        <Alert>You changed role successfully.</Alert>
    )
}

export function ErrorAddRole() {
    return(
        <Alert>Please provide valid info.</Alert>
    )
}

export function AddJewelsuccess() {
    return(
        <Alert>Jewel added successfully.</Alert>
    )
}

export function ErrorAddJewel() {
    return(
        <Alert>Please provide valid info.</Alert>
    )
}