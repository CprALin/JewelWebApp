import PropTypes from "prop-types"


export default function Login({onClose , handleSwitchSignUp}){
    return(
       <div className="absolute z-30 w-full h-full">
           <div className="bg-black opacity-70 w-full h-full" />
           <div className="absolute z-40 blur rounded-3xl opacity-80 bg-black w-[350px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute flex justify-center items-center z-50 rounded-3xl w-[350px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-text-1">
                 <button onClick={onClose} className="absolute top-5 right-10 text-text-1 text-glow text-3xl font-semibold cursor-pointer">X</button>
                 <p className="absolute top-20 text-3xl font-semibold">Login</p>
                 <form className="flex justify-center items-center flex-col">
                    <div className="mb-4 relative">
                        <input
                            type="email"
                            id="email"
                            className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                            placeholder="Email"
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
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                            Password
                        </label>
                    </div>

                    <button className="w-[5rem] h-[2rem] mt-2 bg-text-1 text-black border border-black rounded-md font-semibold hover:text-glow hover:shadow-xl">
                        Log In
                    </button>
                    <p className="mt-5">Don&apos;t have an account ? | <button onClick={handleSwitchSignUp} className="text-glow">SignUp</button></p>
                 </form>
           </div>
       </div>
    )
}

Login.propTypes = {
    onClose : PropTypes.func.isRequired,
    handleSwitchSignUp : PropTypes.func.isRequired
}