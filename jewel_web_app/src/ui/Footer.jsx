import logo from '/white-logo.png';
import { IoLogoInstagram } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return(
       <div className="flex w-full h-[11rem] bg-background-1 text-text-1">
           <div className="bg-black w-full opacity-45"/>
           <div className="absolute z-10 w-full flex justify-center items-center flex-col">
              <div className="flex justify-between w-full">
                <img src={logo} alt='logo' className='h-30 w-40 pt-6 cursor-pointer'/>
                <div className='flex justify-center border-l-4 mt-6 w-80'>
                  <div className='pl-36'>
                   <ul className='text-center font-semibold cursor-pointer'>
                     <li className='pb-2'>Legal</li>
                     <li>Terms & Conditions</li>
                     <li>Privacy Policy</li>
                     <li>Cookie Policy</li>
                   </ul>
                  </div>
                </div>
                <div className='flex justify-center items-center mt-6 border-l-4 w-[408px]'>
                  <div className='pl-40'>
                   <ul className='text-center font-semibold cursor-pointer'>
                      <li>Discover timeless elegance ...</li>
                      <li>FAQs</li> 
                      <li>New Arrivals</li>
                   </ul>
                  </div>
                </div>
                <div className='flex justify-center items-center border-l-4 flex-col font-semibold w-[200px] mt-6'>
                    <p className='pb-3'>Follow Us</p>
                    <ul className='text-2xl space-y-1 cursor-pointer'>
                       <li><IoLogoInstagram/></li>
                       <li><LuFacebook/></li>
                       <li><FaSquareXTwitter/></li>
                    </ul>
                </div>
              </div>
              <p className='pt-2 opacity-85'> &copy; Cprava {new Date().getFullYear()} . All Rights Reserved</p> 
           </div>
       </div>     
    )
}