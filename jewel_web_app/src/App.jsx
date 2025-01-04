import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import { HelmetProvider } from "react-helmet-async"
import Main from "./ui/Main"
import Shop from "./ui/Shop"


const router = createBrowserRouter([
      {
        element : <AppLayout />,
        children : [
            {
               path : '/',
               element : <Main />
            },
            {
              path : '/shop',
              element : <Shop />
            }
        ]
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
