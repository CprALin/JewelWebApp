
import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { AddJewelsuccess, AddRoleSuccess, AlertAfterLogIn, ErrorAddJewel, ErrorAddRole, ErrorLogin, LogOutMessage, SignUpError, SignUpMessage } from '../messages/Messages';

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
        const response = await axios.post('http://localhost:3000/api/v1/users/signup' , {
            userName,
            email,
            password,
        });

        if(response)
        {
          setSuccess(<SignUpMessage />)
          setTimeout(() => {
              setSuccess(null);    
          },3000)
        }
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
      localStorage.removeItem('token');
      setIsAuth(false);
      setUser(null);
      setSuccess(null);
      setError(null);
      setUserRole(null);
      setSuccess(<LogOutMessage />)
    };

    const addRole = async (UserName , Email , UserRole) => {
        setLoading(true)

        try{
          const response = await axios.post('http://localhost:3000/api/v1/admin/addRole' , {
             UserName,
             Email,
             UserRole
          })

          if(response && UserRole === 'admin' || UserRole === 'seller' ||  UserRole === 'user')
          {
            setSuccess(<AddRoleSuccess/>)
            setTimeout(() => {
              setSuccess(null);    
            },3000)
          }else{
            setError(<ErrorAddRole/>)
            setTimeout(() => {
              setError(null)     
            },3000)
          }
        }catch(err){
          console.log(err);
          setError(<ErrorAddRole/>)
          setTimeout(() => {
            setError(null)     
          },3000)
        }finally{
           setLoading(false);
        }
    }

    const addJewel = async (
      JewelName , 
      JewelDescription , 
      JewelPrice ,
      JewelDiscount , 
      JewelMaterial , 
      JewelWeight , 
      JewelLength , 
      JewelCategory ,
      JewelStockQuantity ,
      JewelBrand ,
      JewelStatus) => {
          setLoading(true);

        try{  
          await axios.post('http://localhost:3000/api/v1/seller/addJewel' , {
            JewelName , 
            JewelDescription , 
            JewelPrice ,
            JewelDiscount , 
            JewelMaterial , 
            JewelWeight , 
            JewelLength , 
            JewelCategory ,
            JewelStockQuantity ,
            JewelBrand ,
            JewelStatus
          })

          setSuccess(<AddJewelsuccess/>)
          setTimeout(() => {
            setSuccess(null);    
          },3000)

        }catch(err){
          console.log(err);
          setError(<ErrorAddJewel/>)
          setTimeout(() => {
            setError(null)     
          },3000)
        }finally{
          setLoading(false);
        }
      }
  
      const getUserIp = async () => {
        try {
          const response = await fetch('https://api64.ipify.org?format=json');
          const data = await response.json();
          return data.ip; 
        } catch (error) {
          console.error('Error fetching IP address:', error);
          return null;
        }
      };
          

    const auditLog = async (ActionType , TableName , ActionDescription ) => {
      const UserId = user.data.data.response[0].UserId;
      const IpAddress = await getUserIp();

      await axios.post('http://localhost:3000/api/v1/audit/auditLog' , {
          UserId , 
          ActionType , 
          TableName , 
          ActionDescription , 
          IpAddress
      })
  }


  return (
    <AuthContext.Provider value={{isAuth , user, loading, error, login, logout , addJewel , signUp , auditLog , addRole , success , userRole}}>
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