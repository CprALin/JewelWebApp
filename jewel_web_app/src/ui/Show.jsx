import { Outlet } from "react-router";
import UserNav from "./UserNav";
import { /*useEffect ,*/ useState } from "react";
import Snipper from "../components/Spinner";

export default function Show() {
    const [isLoading , /*setIsLoading*/] = useState(false);

    return(
       <div className="relative w-screen h-screen bg-background-1">
           <UserNav />
           <div className="absolute z-20 w-[92.5%] h-[86%] bg-background-1 right-0 top-24 scrollbar-hide overflow-y-auto">
            {isLoading ? (
                <Snipper />
            ) : 
            (
                <Outlet />
            )}
            </div>
       </div> 
    )
}