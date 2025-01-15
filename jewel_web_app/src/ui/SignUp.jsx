import PropTypes from "prop-types"
import { useState } from "react"
import { useAuth } from "../context/authContext";

export default function SignUp({onClose , handleSwitchLogin}){
    const { signUp ,error , success } = useAuth();
    const [userName , setUserName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(userName , email , password);
    }

    return(
       <div className="absolute z-30 w-full h-full">
           <div className="bg-black opacity-70 w-full h-full" />
           <div className="absolute z-40 blur rounded-3xl opacity-80 bg-black w-[350px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute flex justify-center items-center z-50 rounded-3xl w-[350px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-text-1">
                 <button onClick={onClose} className="absolute top-5 right-10 text-text-1 text-glow text-3xl font-semibold cursor-pointer">X</button>
                 <p className="absolute top-20 text-3xl font-semibold">SignUp</p>
                 <form className="flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <div className="mt-6 mb-4 relative">
                        <input
                            type="username"
                            id="username"
                            className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                            placeholder="username"
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                            User name
                        </label>
                    </div>

                    <div className="mb-4 relative">
                        <input
                            type="email"
                            id="email"
                            className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                            Email
                        </label>
                    </div>

                    <div className="mb-4 relative">
                        <input
                            type="password"
                            id="password"
                            className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                            placeholder="Email"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                            Password
                        </label>
                    </div>

                    <button type="submit" className="w-[5rem] h-[2rem] mt-2 bg-text-1 text-black border border-black rounded-md font-semibold hover:text-glow hover:shadow-xl">
                        Sign Up
                    </button>
                    <p className="mt-5">Have an account ? | <button onClick={handleSwitchLogin} className="text-glow">LogIn</button></p>
                 </form>
           </div>
           <div>
                {error}
                {success}
           </div>
       </div>
    )
}

SignUp.propTypes = {
    onClose : PropTypes.func.isRequired,
    handleSwitchLogin : PropTypes.func.isRequired
}