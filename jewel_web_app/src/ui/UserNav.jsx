import logo from '/white-logo.png';

export default function UserNav() {
    return(
       <>
        <div className="w-screen h-20 ">
            <div className="w-full h-full bg-black opacity-40"/>
            <div className="relative">
                <img src={logo} alt='logo' className='h-20 w-30'/>
            </div>
        </div> 
        <div className="w-20 h-[88.5%] bg-black opacity-40">

        </div>
       </> 
    )
}