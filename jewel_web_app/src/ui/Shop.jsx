import test from '/test.jpg';
import SearchBar from '../components/SearchBar';

export default function Shop() {

  const items = [
    { id: 1, name: 'Elegancy Gold', price: 540, oldPrice: 0, stock: 10, imageUrl: test },
    { id: 2, name: 'Classic Diamond', price: 250, oldPrice: 300, stock: 0, imageUrl: test },
    { id: 3, name: 'Luxury Necklace', price: 1200, oldPrice: 1300, stock: 5, imageUrl: test },
    { id: 4, name: 'Elegant Ring', price: 850, oldPrice: 900, stock: 2, imageUrl: test },
    { id: 5, name: 'Gold Watch', price: 1500, oldPrice: 1600, stock: 7, imageUrl: test },
    { id: 6, name: 'Pearl Earrings', price: 500, oldPrice: 550, stock: 0, imageUrl: test },
    { id: 7, name: 'Diamond Bracelet', price: 2000, oldPrice: 0, stock: 3, imageUrl: test },
    { id: 8, name: 'Silver Necklace', price: 450, oldPrice: 500, stock: 12, imageUrl: test },
    { id: 9, name: 'Rose Gold Ring', price: 650, oldPrice: 700, stock: 1, imageUrl: test },
    { id: 10, name: 'Luxury Earrings', price: 750, oldPrice: 800, stock: 6, imageUrl: test },
  ];

  return (
    <>
      <SearchBar />
      <div className="flex flex-wrap justify-start">
        {items.map((item) => (
          <div
            key={item.id}
            className={`w-[200px] h-[300px] m-10 relative text-text-1 cursor-pointer hover:border-text-1 hover:border-2 rounded-2xl ${item.stock === 0 ? 'pointer-events-none' : ''}`}
          >
            {item.stock === 0 && (
              <div className="absolute inset-0 bg-gray-600 opacity-50 rounded-2xl z-10" />
            )}

            <div className={`w-full h-full ${item.stock === 0 ? 'bg-gray-400' : 'bg-black opacity-30'} blur-sm rounded-2xl`} />
            <div className="absolute w-full rounded-2xl h-1/2 top-0">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute mt-2 ml-2 top-1/2">
              <p>{item.name}</p>
            </div>
            <span className="relative inline-block bottom-4 left-1">
              <p className="absolute bottom-2 left-2">{item.price}$</p>
              {item.oldPrice != 0 && 
                <span>
                    <p className="absolute top-[-45px] left-[25px] text-red-500 line-through transform rotate-6 translate-x-2">{item.oldPrice}$</p>
                </span>
              }
            </span>
            <span className="absolute flex flex-col justify-center items-center right-2 bottom-4">
              <p>{item.stock === 0 ? 'Sold Out' : 'In Stock'}</p>
              <p>{item.stock}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
