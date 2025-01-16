import { useState } from 'react';
import test from '/test.jpg';
import { useAuth } from '../context/authContext';

export default function AddJewel() {
  const { addJewel , auditLog , success , error } = useAuth();  

  const [jewelName, setJewelName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [material , setMaterial] = useState('');
  const [status , setStatus] = useState('');
  const maxLength = 500;

  const handleSubmit = (e) => {
    e.preventDefault();
    addJewel(jewelName , description , price , discount , material , weight , length , category , quantity , brand , status);
    auditLog('POST' , 'Jewels' , 'INSERT');
  };  

  return (
    <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center mt-5">
        <div className="relative">
            <div className="w-[800px] h-[560px] bg-black opacity-35 blur-sm rounded-2xl"/>
            
            <div className="absolute top-8 left-8">
                <img src={test} alt='jewel' className='w-[200px] h-[200px] rounded-2xl cursor-pointer'/>
            </div>   
            <div className="absolute top-[250px] left-8 text-text-1">
                <div className="mb-4 relative">
                    <input
                    type="price"
                    id="price"
                    className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                    <label
                    htmlFor="price"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                    >
                    Price
                    </label>
                </div>
                <div className="mb-4 relative">
                    <input
                    type="discount"
                    id="discount"
                    className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                    placeholder="discount"
                    onChange={(e) => setDiscount(e.target.value)}
                    required
                    />
                    <label
                    htmlFor="discount"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                    >
                        Discount
                    </label>
                </div>
                <div className="mb-4 relative">
                    <input
                    type="length"
                    id="length"
                    className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                    placeholder="length"
                    onChange={(e) => setLength(e.target.value)}
                    required
                    />
                    <label
                    htmlFor="length"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                    >
                        Length
                    </label>
                </div>
                <div className="mb-4 relative">
                    <input
                    type="weight"
                    id="weight"
                    className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                    placeholder="weight"
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    />
                    <label
                    htmlFor="weight"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                    >
                        Weight
                    </label>
                </div>
                <div className="mb-4 relative">
                    <input
                    type="quantity"
                    id="quantity"
                    className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                    placeholder="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    />
                    <label
                    htmlFor="quantity"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                    >
                        Quantity
                    </label>
                </div>
            </div>
            <div className="absolute top-[20px] right-24 w-[300px] text-text-1">
                <div className="mb-4 relative">
                        <input
                        type="jewelname"
                        id="jewelname"
                        className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                        placeholder="jewelname"
                        onChange={(e) => setJewelName(e.target.value)}
                        required
                        />
                        <label
                        htmlFor="jewelname"
                        className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                            Jewel Name
                        </label>
                </div>
                <div className="mb-4 relative">
                        <input
                        type="brand"
                        id="brand"
                        className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                        placeholder="brand"
                        onChange={(e) => setBrand(e.target.value)}
                        required
                        />
                        <label
                        htmlFor="brand"
                        className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                            Brand
                        </label>
                </div>
                <div className="mb-4 relative">
                        <input
                        type="category"
                        id="category"
                        className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                        placeholder="category"
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        />
                        <label
                        htmlFor="category"
                        className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                          Category
                        </label>
                </div>
                <div className="mb-4 relative">
                        <input
                        type="material"
                        id="material"
                        className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                        placeholder="material"
                        onChange={(e) => setMaterial(e.target.value)}
                        required
                        />
                        <label
                        htmlFor="material"
                        className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                          Material
                        </label>
                </div>
                <div className="mb-4 relative">
                        <input
                        type="status"
                        id="status"
                        className="peer focus:outline-none transition-all bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent"
                        placeholder="status"
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        />
                        <label
                        htmlFor="status"
                        className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                          Status
                        </label>
                </div>
                <div className="mt-10 relative">
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={maxLength}
                        className="peer focus:outline-none transition-all bg-transparent border-2 w-full p-2 mt-1 border-gray-300 focus:border-text-1 placeholder-transparent resize-none scrollbar-hide overflow-auto"
                        placeholder="Enter your description"
                        required
                        style={{ height: '150px' }} 
                    />
                    <label
                        htmlFor="description"
                        className="absolute left-3 top-[-10px] transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-[-10px] peer-focus:text-text-1 transition-all duration-300"
                    >
                        Description
                    </label>
                    <div className="absolute right-3 bottom-[-15px] text-sm text-gray-500">
                        {description.length}/{maxLength}
                    </div>
                </div>                
            </div>
        </div>
        <button type='submit' className="w-[20rem] h-[3rem] mt-10 bg-black text-text-1 border border-black rounded-md font-semibold hover:text-glow hover:shadow-xl">
            List for sale
        </button>
        <div>
            {success}
            {error}
        </div>
    </form>
  )
}
