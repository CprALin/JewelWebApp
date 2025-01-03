import logo from '/white-logo.png';

export default function Footer() {
    return(
       <div className="flex w-full h-[10rem] bg-background-1 text-text-1">
           <div className="bg-black w-full opacity-45"/>
           <div className="absolute z-10 ">
              <div className="flex justify-center">
                <img src={logo} alt='logo' className='h-30 w-40 pt-7'/>
                <p> &copy; Cprava {new Date().getFullYear()} . All Rights Reserved</p> 
              </div>
           </div>
       </div>     
    )
}