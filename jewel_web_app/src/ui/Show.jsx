import { Outlet } from "react-router";
import UserNav from "./UserNav";

export default function Show() {
    return(
       <div className="relative w-screen h-screen bg-background-1">
           <UserNav />
           <div className="absolute z-20 w-[92.5%] h-[86%] bg-background-1 right-0 top-24">
                <Outlet />
           </div>
       </div> 
    )
}