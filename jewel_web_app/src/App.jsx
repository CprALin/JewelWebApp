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
import PropTypes from "prop-types"

const userRole = 'admin';

function RoleProtectedRoute({element , requiredRole , redirectPath}) {
   if(userRole !== requiredRole) {
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
                    element : <Profile />
                 },
                 {
                    path : 'history',
                    element : <History />
                 },
                 {
                    path : 'addSeller',
                    element : (
                     <RoleProtectedRoute element={<AddSeller />} requiredRole="admin" redirectPath="/"/> 
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
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App

RoleProtectedRoute.propTypes = {
    element : PropTypes.any,
    requiredRole : PropTypes.any,
    redirectPath : PropTypes.any
}