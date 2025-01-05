import test from '/test.jpg';
import SearchBar from '../components/SearchBar';

export default function Shop() {

  const items = new Array(10).fill(null);

  return (
    <>
    <SearchBar />
    <div className="flex flex-wrap justify-start"> 
        {items.map((_,index) => (
          <div key={index} className="w-[200px] h-[300px] m-10 relative text-text-1 cursor-pointer hover:border-text-1 hover:border-2 rounded-2xl">
            <div className="w-full h-full bg-black opacity-30 blur-sm rounded-2xl"/>
            <div className="absolute w-full rounded-2xl h-1/2 top-0">
                <img src={test} alt='jewel' className='w-full h-full object-cover rounded-2xl'/>        
            </div>
            <div className="absolute mt-2 ml-2 top-1/2">
                <p>Elegancy</p>
                <p>gold</p>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}
