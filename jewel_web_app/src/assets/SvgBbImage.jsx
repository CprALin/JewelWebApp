export default function SvgBgImage(){
    return(
        <div className="flex items-center justify-center h-full w-[700px]">
            <svg className="w-full h-full">
                
                <rect width={10} height={590} x={350} y={100} fill="#1E1E1E" />
                <polygon points="354.9,80 380,130 354.9,160 330,130" fill="#1E1E1E" />
                <polygon points="354.9,160 380,45 354.9,200 330,45" fill="#1E1E1E" />
                <polygon points="354.9,160 390,65 354.9,180 320,65" fill="#1E1E1E" />
                <polygon points="354.9,650 380,690 354.9,690 330,690" fill="#1E1E1E" />

                <rect width={160} height={10} x={350} y={250} transform="rotate(-20 , 350 , 250)" fill="#1E1E1E" />
                <rect width={180} height={10} x={350} y={400} transform="rotate(190 , 350 , 400)" fill="#1E1E1E" />
                <rect width={170} height={10} x={350} y={550} transform="rotate(-15 , 350 , 550)" fill="#1E1E1E" />

                <circle cx={520} cy={195} r={20} fill="#1E1E1E"/>
                <circle cx={520} cy={510} r={20} fill="#1E1E1E"/>
                <circle cx={160} cy={365} r={20} fill="#1E1E1E"/>
             </svg>
        </div>
    )
}