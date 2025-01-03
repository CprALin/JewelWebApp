import { Link } from 'react-router-dom';
import logo from '/white-logo.png';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [ isHidden , setIsHidden] = useState(false);
  const [ prevScrollPos , setPrevScrollPos ] = useState(0);

  useEffect(() => {
     const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsHidden(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
     };

     window.addEventListener('scroll' , handleScroll);

     return() => {
        window.removeEventListener('scroll' , handleScroll);
     }
  },[prevScrollPos]);

  return (
    <div className={`w-full h-20 fixed transition-transform duration-300 ${isHidden ? 'transform -translate-y-full' : ''}`}>
        <div className="bg-black opacity-45 absolute inset-0"/>
        <div className="relative z-10 flex items-center justify-between h-full">
            <img src={logo} alt='logo' className='h-20 w-30'/>
            <ul className='flex items-center space-x-10 m-10 text-primary-100 font-sans font-semibold text-lg'>
                <li><Link className='text-glow'>Home</Link></li>
                <li><Link className='text-glow'>About</Link></li>
                <li><Link className='text-glow'>Shop</Link></li>
                <li className='space-x-2'>
                    <button className='hover:bg-dark-900 w-20 h-15 hover:border hover:border-dark-700 rounded-xl transition-all duration-300 ease-in'>LogIn</button>
                    <button className='bg-dark-900 w-20 h-15 border border-dark-700 rounded-xl'>SignUp</button>
                </li>
            </ul>
        </div>
    </div>
  )
}
