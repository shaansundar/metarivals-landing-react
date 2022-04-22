import genericBg from '../../assets/genericBg3.png'
import hero from '../../assets/roadmap-hero.svg'

export default function Page7() {
    return (
        <div id="Page7" className="w-full text-white h-[50vh] md:h-[65vw] max-h-[2273px] relative">
            <div className='w-full h-full flex py-10 flex-col absolute items-center z-10 justify-center'>
                <h1 style={{ fontFamily: 'Bangers' }} class="lg:text-6xl w-full p-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Roadmap</h1>

                <img src={hero} className="w-4/5 md:w-3/4 m-8 overflow-hidden z-0" alt="" />
            </div>
            <img src={genericBg} className="absolute w-full h-full overflow-hidden z-0" alt="" />
        </div>
    )
}