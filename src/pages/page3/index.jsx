import genericBg from '../../assets/genericBg3.png'
import hero from '../../assets/why-hero.png'
import Button from '../../components/button'
export default function Page3() {
    return (
        <div id="Page3" className="w-full h-screen md:h-[50vw] relative">
            <div className='w-full md:mx-4 h-full flex md:flex-row flex-col absolute items-start z-10 justify-center'>
                <div className='w-full flex flex-col items-center justify-center md:w-1/3 h-1/2 md:h-full'>
                    <img src={hero} className="w-1/2 md:w-3/4" alt="" />
                </div>
                <div className='flex-col flex items-center justify-center w-full md:w-1/3 text-white text-center h-1/3 md:h-full'>
                    <h1 style={{ fontFamily: 'Bangers' }} class="lg:text-6xl w-full py-4 italic text-center md:text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Why Metarivals?</h1>
                    <h1 class="mt-10 text-2xl uppercase">Enough with <br />
                        <h1 class="text-2xl lg:text-5xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Online </h1>
                        trolling and littering
                        <h1 class="text-2xl lg:text-5xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Crypto Social media</h1></h1>
                        <Button name= "Time For Some Real Action" style={{width: "350px", height: "65px", fontSize:'12px', margin:'10px'}}/>
                </div>
                <div className='hidden md:flex w-full md:w-1/3 h-1/2 md:h-full'>
                </div>
            </div>
            <img src={genericBg} className="absolute w-full h-full overflow-hidden z-0" alt="" />
        </div>
    )
}