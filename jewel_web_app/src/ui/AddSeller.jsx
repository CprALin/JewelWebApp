import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiKeepassxc } from "react-icons/si";

export default function AddSeller() {
  return (
    <div className="mt-36 flex flex-col justify-center items-center text-text-1">
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
            <div className="mb-4 relative">
                <input
                  type="userrole"
                  id="userrole"
                  className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                  placeholder="userrole"
                  required
                />
                <label
                    htmlFor="userrole"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                >
                  <SiKeepassxc />
                </label>
            </div>
            <button className="w-[8rem] h-[3rem] mt-2 bg-black text-text-1 border border-black rounded-md font-semibold hover:text-glow hover:shadow-xl">
                Edit
            </button>
          </form>
    </div>
  )
}
