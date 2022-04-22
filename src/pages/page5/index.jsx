import genericBg from '../../assets/genericBg3.png'
import hero from '../../assets/features-hero.png'


export default function Page5() {
    return (
        <div className="w-full text-white h-screen md:h-[75vw] max-h-[2273px] relative">
            <div className='w-full h-full flex my-4 flex-col absolute items-center z-10 justify-center md:justify-between'>
                <h1 style={{ fontFamily: 'Anton' }} class="lg:text-6xl w-full p-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">$MRVL Utility</h1>
    <p class="text-center px-4">MRVL is MetaRivals’ native deflationary token which has multiple use cases ranging from rewards to staking</p>
                <img src={hero} className="overflow-hidden w-full z-0" alt="" />
            </div>
            <img src={genericBg} className="absolute w-full h-full overflow-hidden z-0" alt="" />
        </div>
    )
}