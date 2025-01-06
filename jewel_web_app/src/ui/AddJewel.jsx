import { useState } from 'react';
import test from '/test.jpg';

export default function AddJewel() {
  const [description, setDescription] = useState('');
  const maxLength = 500;

  const handleChange = (e) => {
    setDescription(e.target.value);
  };  

  return (
    <form className="flex justify-center flex-col items-center mt-5">
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
                        required
                        />
                        <label
                        htmlFor="category"
                        className="absolute left-3 top-0 transform -translate-y-1/2 text-text-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-text-1 transition-all duration-300"
                        >
                          Category
                        </label>
                </div>
                <div className="mt-32 relative">
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleChange}
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
        <button className="w-[20rem] h-[3rem] mt-10 bg-black text-text-1 border border-black rounded-md font-semibold hover:text-glow hover:shadow-xl">
            List for sale
        </button>
    </form>
  )
}
