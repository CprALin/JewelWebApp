
import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { AlertAfterLogIn, ErrorLogin, LogOutMessage, SignUpError, SignUpMessage } from '../messages/Messages';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null); 
  const [userRole , setUserRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuth , setIsAuth] = useState(false); 
  const [error , setError] = useState(null);
  const [success , setSuccess] = useState(null);

  const signUp = async (userName , email , password) => {
      setLoading(true);
     
      try{
        await axios.post('http://localhost:3000/api/v1/users/signup' , {
            userName,
            email,
            password
        });

        setSuccess(<SignUpMessage />)
        setTimeout(() => {
          setSuccess(null);    
      },3000)
      }catch(err){
        console.log(err);
        setError(<SignUpError />)
        setTimeout(() => {
          setError(null);    
        },3000)
      }finally{
        setLoading(false);
      }
  }

  const login = async (email, password) => {
      setLoading(true);
      try {
          const response = await axios.post('http://localhost:3000/api/v1/users/login', {
              email,
              password,
            });
            const userId = response.data.data.data.user;
            const token = response.data.data.token;
            localStorage.setItem('token' , token);

            const responseUser = await axios.post('http://localhost:3000/api/v1/users/getUserById' , {
                userId : userId
            });
            
            setUser(responseUser);
            setUserRole(user.data.data.response[0].UserRole);         
            setIsAuth(true);
            setSuccess(<AlertAfterLogIn />)
            setTimeout(() => {
                setSuccess(null);    
            },3000)
        } catch (err) {
            console.log(err);
            setIsAuth(false);
            setError(<ErrorLogin />)
            setTimeout(() => {
               setError(null)     
            },3000)
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
      setUser(null);
      localStorage.removeItem('token');
      setIsAuth(false);
      setUser(null);
      setSuccess(null);
      setError(null);
      setUserRole(null);
      setSuccess(<LogOutMessage />)
    };

  return (
    <AuthContext.Provider value={{isAuth , user, loading, error, login, logout , signUp , success , userRole}}>
      {children}
    </AuthContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
    children : PropTypes.node
}