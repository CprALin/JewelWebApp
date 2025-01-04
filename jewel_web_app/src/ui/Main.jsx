import NavBar from "./NavBar";
import Home from "./Home"
import About from "./About"
import Info from "./Info"
import Footer from "./Footer"

export default function Main() {
  return (
    <>
      <NavBar/>
      <div className="scrollbar-hide overflow-auto w-full absolute z-[-1] inset-0 h-full">
        <section id="home">
          <Home />     
        </section>
        <section id="about">
          <About />
        </section>
        <Info />
        <Footer />
      </div>
    </>
  )
}
