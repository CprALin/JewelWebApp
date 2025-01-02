import About from "./About"
import Footer from "./Footer"
import Home from "./Home"
import Info from "./Info"

export default function Main() {
  return (
    <div className="scrollbar-hide overflow-auto w-full absolute z-[-1] inset-0 h-full">
       <Home />     
       <About />
       <Info />
       <Footer />
    </div>
  )
}
