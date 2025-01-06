import test from "/test.jpg"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center text-text-1">
      <div className="relative mt-10 flex justify-center items-center"> 
        <div className="bg-primary-100 opacity-45 w-[200px] h-[200px] rounded-full"/>
        <div className="absolute rounded-full w-[150px] h-[150px] cursor-pointer">
          <img src={test} alt='user' className="object-cover w-full h-full rounded-full"/>
        </div>
      </div>
      <form className="mt-10 flex justify-center items-center flex-col">
        <div className="mb-4 relative">
            <input
              type="username"
              id="username"
              className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
              placeholder="username"
              required
            />
            <label
                htmlFor="username"
                className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
            >
              <FaUser/>
            </label>
        </div>
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
              <MdEmail/>
            </label>
        </div>
        <button className="w-[8rem] h-[3rem] mt-2 bg-black text-text-1 border border-black rounded-md font-semibold hover:text-glow hover:shadow-xl">
            Save
        </button>
        <p className="m-3 cursor-pointer opacity-80 text-glow">Addvance settings</p>
      </form>
    </div>
  )
}
