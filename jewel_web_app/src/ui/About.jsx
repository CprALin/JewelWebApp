
export default function About() {
    return(
    
        <div className="w-full h-[700px] bg-background-1 pt-20 grid-rows-2 place-items-center text-text-1">
            <h1 className="text-3xl">About Us</h1>
            <div className="flex justify-between w-[1300px] pt-16">
                <div className="grid-rows-2 place-items-center w-80 h-96 bg-cards-1 cursor-pointer rounded-2xl shadow-down-right text-text-1">
                    <h1>Card 1</h1>
                    <p className="leading-relaxed text-justify break-words w-[90%]">
                        Asdafgnqi nsdoanufnasn fosnudfn osuanfuionasifn ianf liqabdfbqlda nsdoanufnasnafhi
                        aljfnon sfnsaonfsnofnosanfasnfsanfasnfisanifbnasfbnas
                        asfnaisfisfbasbfsab
                    </p>
                </div>
                <div className="flex justify-center w-80 h-96 mt-16 bg-cards-1 cursor-pointer rounded-2xl shadow-down-right text-text-1">
                    <h1>Card 2</h1>
                </div>
                <div className="flex justify-center w-80 h-96 bg-cards-1 cursor-pointer rounded-2xl shadow-down-right text-text-1">
                    <h1>Card 3</h1>
                </div>
            </div>
        </div>
        
    )
}