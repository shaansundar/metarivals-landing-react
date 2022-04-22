import genericBg1 from '../../assets/genericBg5.png'
import hero from '../../assets/partners.svg'

export default function Page9() {
    return (
        <div id="Page9" className="w-full h-[35vh] relative">
            <div className='w-full h-full flex flex-col absolute items-center z-10 justify-center'>
                <h1 style={{ fontFamily: 'Bangers' }} class="lg:text-6xl w-full p-4 mb-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Partners & Investors</h1>
                <img src={hero} className="w-3/4" alt="" />
            </div>
            <img src={genericBg1} className="absolute w-full h-full overflow-hidden z-0" alt="" />
        </div>
    )
}