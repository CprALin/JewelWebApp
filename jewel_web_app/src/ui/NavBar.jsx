import { Link } from 'react-router-dom';
import logo from '/nobg-logo.png';

export default function NavBar() {
  return (
    <div className="relative w-screen h-20">
        <div className="bg-dark-900 opacity-45 absolute inset-0"/>
        <div className="relative z-10 flex items-center justify-between h-full">
            <img src={logo} alt='logo' className='h-20 w-30 filter grayscale-0 sepia-0 brightness-50 contrast-200'/>
            <ul className='flex space-x-10 m-10'>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Shop</Link></li>
                <li><button>LogIn</button></li>
            </ul>
        </div>
    </div>
  )
}
