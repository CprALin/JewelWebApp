import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
        <Helmet>
            <title>Cprava | Home</title>
        </Helmet>
        <div className="flex items-center justify-center">
            <div className="w-screen h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage : "url('../../public/abstract-gold-chain-presentation-rocks.jpg')"}} />
            <button className="absolute w-80 h-20 mt-96 bg-black border border-black rounded-md text-primary-100">Show me</button>
        </div>
       
    </>
  )
}
