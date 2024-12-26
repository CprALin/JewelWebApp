import Main from "./Main";
import NavBar from "./NavBar";


export default function AppLayout() {
  return (
    <div className="bg-primary-50 h-screen w-screen">
        <NavBar />
        <Main />
    </div>
  )
}
