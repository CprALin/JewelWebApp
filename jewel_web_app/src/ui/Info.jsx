import SvgBgImage from "../assets/SvgBbImage";

export default function Info() {
    return(
       <div className="w-full h-[700px] bg-background-2 text-text-1 flex justify-center">
            <SvgBgImage />
            <h1 className="absolute ml-[-1000px] text-5xl mt-16">Why Choose Us</h1>
            <p className="absolute mt-[320px] text-3xl bg-background-1 p-5 ml-[-779px] border-2 border-dark-900 rounded-2xl shadow-md shadow-dark-900">Personalized Experience</p>
            <p className="absolute mt-[150px] text-3xl bg-background-1 p-5 ml-[675px] border-2 border-dark-900 rounded-2xl shadow-md shadow-dark-900">Exceptional Service</p>
            <p className="absolute mt-[470px] text-3xl bg-background-1 p-5 ml-[715px] border-2 border-dark-900 rounded-2xl shadow-md shadow-dark-900">Trusted Craftsmanship</p>
       </div> 
    )
}