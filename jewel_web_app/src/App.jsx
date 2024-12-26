import { createBrowserRouter, RouterProvider } from "react-router"
import AppLayout from "./ui/AppLayout"
import Home from "./ui/Home"
import { HelmetProvider } from "react-helmet-async"


const router = createBrowserRouter([
      {
        element : <AppLayout />,
        children : [
            {
               path : '/',
               element : <Home />
            },
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
