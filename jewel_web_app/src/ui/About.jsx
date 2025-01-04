
export default function About() {
    return(
    
        <div className="w-full h-[700px] bg-background-1 pt-20 grid-rows-2 place-items-center text-text-1">
            <h1 className="text-3xl">About Us</h1>
            <div className="flex justify-between w-[1300px] pt-16">
                <div className="grid-rows-2 place-items-center w-80 h-96 bg-cards-1 cursor-pointer rounded-2xl shadow-down-right text-text-1">
                    <h1 className="text-2xl font-semibold mt-5 mb-5">Our Story</h1>
                    <p className="leading-relaxed text-justify break-words w-[90%]">
                        At Cprava , we believe jewelry is more than just an accessory, it&apos;s a symbol of cherished memories, timeless elegance, 
                        and personal expression. Founded with a passion for craftsmanship and a love for design, our mission is to create stunning 
                        pieces that resonate with the beauty and individuality of every customer.
                    </p>
                </div>
                <div className="grid-rows-2 place-items-center w-80 h-96 mt-16 bg-cards-1 cursor-pointer rounded-2xl shadow-down-right text-text-1">
                    <h1 className="text-2xl font-semibold mt-5 mb-5">Our Craftsmanship</h1>
                    <p className="leading-relaxed text-justify break-words w-[90%]">
                        Every piece of jewelry is crafted with precision, care, and attention to detail. From selecting the finest materials to designing modern and classic styles, 
                        we ensure each creation meets the highest standards of quality and artistry.
                        Whether you&apos;re looking for a delicate necklace, a bold statement ring, or custom-made jewelry,
                        our collections are designed to bring your vision to life.
                    </p>
                </div>
                <div className="grid-rows-2 place-items-center w-80 h-96 bg-cards-1 cursor-pointer rounded-2xl shadow-down-right text-text-1">
                    <h1 className="text-2xl font-semibold mt-5 mb-5">Our Vision</h1>
                    <p className="leading-relaxed text-justify break-words w-[90%]">
                        We aim to be more than just a jewelry store, we want to be part of your most meaningful moments. 
                        From engagements to anniversaries and everything in between, 
                        our designs are created to celebrate life&apos;s special milestones.
                    </p>
                </div>
            </div>
        </div>
        
    )
}