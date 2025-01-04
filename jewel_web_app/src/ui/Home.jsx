import Button from "../components/Buton";

export default function Home() {
  return (
      <div className="flex items-center justify-center h-[700px]">
          <div className="w-screen h-[700px] bg-center bg-background-2 bg-cover bg-no-repeat" style={{ backgroundImage : "url('/abstract-gold-chain-presentation-rocks.jpg')"}} />
          <Button>Show Me</Button>
      </div>
  )
}
