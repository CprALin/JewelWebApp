import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '/white-logo.png';
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { TbDeviceIpadDollar } from "react-icons/tb";
import { AlertLogIn } from "../messages/Messages";
import { useAuth } from "../context/authContext";

export default function UserNav() {
    const { userRole , isAuth } = useAuth();
    const [activePage, setActivePage] = useState(""); 
    const navigate = useNavigate();
    const [user_role , setUserRole] = useState("");

    useEffect(() => {
        if(isAuth)
        {
            setUserRole(userRole);
        }
    },[isAuth , userRole])

    const handleNavigation = (id) => {
        setActivePage(id);
        if(id === "/"){
            navigate('/');    
        }else{
            navigate(`/show/${id}`);
        }
    }

    useEffect(() => {
        const path = window.location.pathname;
        const segment = path.split('/');
        const last = segment.pop();
        setActivePage(last);
    },[setActivePage]);


    const menuItems = [
        ...(isAuth ? [ { id: "profile", icon: <CgProfile /> } ] : []),
        { id: "/", icon: <IoHome /> },
        { id: "shop", icon: <FaBasketShopping /> },
        { id: "cart", icon: <HiShoppingCart /> },
        ...(isAuth ? [ 
            { id: "history", icon: <FaHistory /> } ] : []),
        ...(user_role === 'admin' ? [ { id: "addSeller" , icon : <TiUserAdd />} ] : []),
        ...(user_role === 'seller' ? [ { id : "addJewel" , icon : <TbDeviceIpadDollar />} ] : [])
    ];

    return (
        <>
            <div className="w-screen h-24">
                <div className="w-full h-full bg-black opacity-40" />
                <div className="absolute top-2 left-[-4px]">
                    <img src={logo} alt="logo" className="h-20 w-30 cursor-pointer" />
                </div>
            </div>
            <div className="w-28 h-[86%] relative">
                <div className="w-full h-full bg-black opacity-40" />
                <div className="absolute top-0  left-0 w-full h-full flex flex-col items-center justify-start">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group mb-8 mt-10`}
                            style={{ position: "absolute", top: `${index * 50}px` }}
                            onClick={() => handleNavigation(item.id)}
                        >
                            <div
                                className={`text-3xl text-text-1 transition-transform duration-300 cursor-pointer ${
                                    activePage === item.id ? "scale-125 text-primary-100" : ""
                                } group-hover:scale-125`}
                            >
                                {item.icon}
                            </div>
                            <span
                                className={`absolute w-0 h-[2px] bg-primary-100 bottom-[-6px] left-0 transition-all duration-300 ${
                                    activePage === item.id || "group-hover:w-full"
                                }`}
                                style={{
                                    width: activePage === item.id ? "100%" : "0",
                                }}
                            ></span>
                        </div>
                    ))}
                </div>
            </div>

            {!isAuth && <AlertLogIn />}
        </>
    );
}
