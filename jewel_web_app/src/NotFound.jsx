import { useNavigate } from "react-router"

export default function NotFound() {
  const navigate = useNavigate();
  
  const goBack = () => {
     navigate(-1);   
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-1 text-center p-6">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-text-1 mt-4">
            Oops! The page you&apos;re looking for is missing or does not exist.
        </p>
        <p className="text-lg text-text-1 mt-2">
             Don&apos;t worry, we&apos;re here to help. You can return to the homepage or explore other pages.
        </p>
        <div className="mt-6">
        <button
          onClick={goBack}
          className="px-6 py-2 bg-black text-text-1 rounded-lg hover:text-glow"
        >
          Go Back
        </button>
        </div>
    </div>
  )
}
