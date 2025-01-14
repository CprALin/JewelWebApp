import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import { HelmetProvider } from "react-helmet-async"
import Main from "./ui/Main"
import Show from "./ui/Show"
import Shop from "./ui/Shop"
import Cart from "./ui/Cart"
import Profile from "./ui/Profile"
import History from "./ui/History"
import NotFound from "./NotFound"
import AddSeller from "./ui/AddSeller"
import AddJewel from "./ui/AddJewel"
import { AuthProvider, useAuth } from "./context/authContext"
import PropTypes from "prop-types"


function RoleProtectedRoute({element , requiredRole , redirectPath}) {
   const { userRole } = useAuth();

   if(userRole !== requiredRole) {
      return <Navigate to={redirectPath} />
   }
   return element;
}

function AuthProtectRoute({element , redirectPath}) {
   const { isAuth } = useAuth();

   if(!isAuth){
       return <Navigate to={redirectPath} />
   }
   return element;
}

const router = createBrowserRouter([
      {
        element : <AppLayout />,
        children : [
            {
               path : '/',
               element : <Main />
            },
            {
              path : '/show',
              element : <Show />,
              children : [
                 {
                    path : 'shop',
                    element : <Shop/>
                 },
                 {
                    path : 'cart',
                    element : <Cart />
                 },
                 {
                    path : 'profile',
                    element : (
                     <AuthProtectRoute element={<Profile />} redirectPath="/" /> 
                    )
                 },
                 {
                    path : 'history',
                    element : (
                     <AuthProtectRoute element={<History />} redirectPath="/" /> 
                    )
                 },
                 {
                    path : 'addSeller',
                    element : (
                       <AuthProtectRoute element={<RoleProtectedRoute element={<AddSeller />} requiredRole="admin" redirectPath="/"/>} redirectPath="/"/> 
                    )
                 },
                 {
                    path : 'addJewel',
                    element : (
                        <AuthProtectRoute element={<RoleProtectedRoute element={<AddJewel />} requiredRole="seller" redirectPath="/" />} redirectPath="/" />
                    )
                 }
              ]
            }
        ]
      },
      {
         path : '*',
         element : <NotFound />
      }
])

function App() {

  return (
    <HelmetProvider>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App

RoleProtectedRoute.propTypes = {
    element : PropTypes.any,
    requiredRole : PropTypes.any,
    redirectPath : PropTypes.any
}

AuthProtectRoute.propTypes = {
   element : PropTypes.any,
   redirectPath : PropTypes.any
}