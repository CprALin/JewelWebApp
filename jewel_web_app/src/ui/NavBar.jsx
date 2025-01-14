import { Link, useNavigate } from 'react-router-dom';
import logo from '/white-logo.png';
import { useEffect, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import test from '/test.jpg';
import { useAuth } from '../context/authContext';
import DropDownList from './DropDownList';


export default function NavBar() {
    
    const { isAuth , user } = useAuth();
    const [ isHidden ] = useState(false); //setIsHidden
    //const [ prevScrollPos , setPrevScrollPos ] = useState(0);
    const [ currentHash , setCurrentHash ] = useState('#home');
    const [ visibleLogin , setVisibleLogin ] = useState(false);
    const [ visibleSignUp , setVisibleSignUp ] = useState(false);
    const [ isLogin , setIsLogin ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth){
           setIsLogin(true);
        }else{
           setIsLogin(false);
        }
    },[isAuth]);
    

    const handleProfilePage = () => {
        navigate('/show/profile');
    }

    const handleOpenLogin = () => {
        setVisibleLogin(true);
    }

    const handleCloseLogin = () => {
        setVisibleLogin(false);
    }

    const handleOpenSignUp = () => {
      setVisibleSignUp(true);
  }

  const handleCloseSignUp = () => {
      setVisibleSignUp(false);
  }

  const handleSwitchLogIn = () => {
      setVisibleSignUp(false);
      setVisibleLogin(true);
  }

  const handleSwitchSignUp = () => {
      setVisibleLogin(false);
      setVisibleSignUp(true);
  }

    useEffect(() => {
      //detect visible section
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentHash(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.6 } // 60% of section need to be visible
      );

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);


    return (
    <>
      <div className={`w-full h-20 fixed transition-transform duration-300 ${isHidden ? 'transform -translate-y-full' : ''}`}>
          <div className="bg-black opacity-45 absolute inset-0"/>
          <div className="relative z-10 flex items-center justify-between h-full">
              <img src={logo} alt='logo' className='h-20 w-30 cursor-pointer'/>
              <ul className='flex items-center space-x-10 m-10 text-primary-100 font-sans font-semibold text-lg'>
                  <li><Link to="/#home" className={`text-glow ${currentHash === '#home' ? 'text-glow-active' : ''}`}>Home</Link></li>
                  <li><Link to='/#about' className={`text-glow ${currentHash === '#about' ? 'text-glow-active' : ''}`}>About</Link></li>
                  <li><Link to="/show/shop" className='text-glow'>Shop</Link></li>
                  {!isLogin ? (
                    <li className='space-x-2'>
                       <button onClick={handleOpenLogin} className='hover:bg-dark-900 w-20 h-15 hover:border hover:border-dark-700 rounded-xl transition-all duration-300 ease-in'>LogIn</button>
                       <button onClick={handleOpenSignUp} className='bg-dark-900 w-20 h-15 border border-dark-700 rounded-xl'>SignUp</button>
                   </li>
                  ) : (
                    <li>
                       <div className='flex justify-center items-center border-l-2 border-text-1 cursor-pointer'>
                        <img src={test} alt='user' className='m-3 w-10 h-10 rounded-full border-2 border-text-1'/>
                        <p>{user.data.data.response[0].UserName}</p>
                        <DropDownList onClick={handleProfilePage}/>
                       </div>
                    </li>
                  )}
              </ul>
          </div>
      </div>
      {visibleLogin && <Login onClose={handleCloseLogin} handleSwitchSignUp={handleSwitchSignUp}/>}
      {visibleSignUp && <SignUp onClose={handleCloseSignUp} handleSwitchLogin={handleSwitchLogIn} />}
    </>
    )
}
