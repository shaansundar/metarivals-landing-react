import herobg from '../../assets/v2/hero-bg-2.png'
import herobgsm from '../../assets/v2/sm-hero-bg.png'
import BNB from '../../assets/Powered-By.png'
import SOL from '../../assets/solana-sol-logo.svg'
import LUNA from '../../assets/terra-luna-luna-logo.svg'
import MATIC from '../../assets/polygon-matic-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

export default function Page1() {
    return (
        <div className="w-full h-screen md:h-[65vw] max-h-[2273px] relative">
            <div className='w-full h-full flex md:flex-row flex-col absolute items-start z-10 justify-center'>
                <div className='md:w-3/5 w-full h-1/2 md:h-[60vw]'></div>
                <div className='md:w-2/5 w-full h-1/2 md:h-[60vw] flex flex-col items-center md:items-start justify-center text-white'>
                    <h1 class="text-6xl md:text-3xl lg:text-6xl"><b>Meta</b>Rivals</h1>
                    <p class="lg:text-4xl md:text-2xl text-4xl text-center md:text-left mt-2 lg:mt-4">
                        First <b>Crypto <h1 class="text-Gold inline">Rivalry <br /> Game</h1></b> Based on <br /> Crypto
                        Avatars
                    </p>
                    <div class="flex w-full my-4 md:my-2 lg:my-4 items-center text-left justify-center md:justify-start">
                        <h1 class="text-base mr-4 font-bold">POWERED BY</h1>
                        <img loading="eager" src={BNB} class="w-8 md:w-4 lg:w-8 mx-2" alt="" srcset="" />
                        <img loading="eager" src={SOL} class="w-8 md:w-4 lg:w-8 mx-2" alt="" srcset="" />
                        <img loading="eager" src={LUNA} class="w-8 md:w-4 lg:w-8 mx-2" alt="" srcset="" />
                        <img loading="eager" src={MATIC} class="w-8 md:w-4 lg:w-8 mx-2" alt="" srcset="" />
                    </div>
                    <button
                        class="w-3/6 md:w-7/12 lg:w-3/6 hover:scale-105 transition-all text-lg md:text-base lg:text-lg font-bold rounded-3xl h-12 md:h-8 lg:h-12 my-4 bg-gradient-to-r from-[#FF6371] to-[#FF933C] ">
                        IDO Coming Soon!
                    </button>
                    <h1 class="text-base md:text-xs lg:text-base font-bold">
                        Backed by <h1 class="text-Gold inline">100k Strong</h1> Community Members
                    </h1>
                    <div class="mt-4">
                    <FontAwesomeIcon className='m-2 text-2xl md:text-lg lg:text-2xl' icon={faTelegramPlane} />
                    <FontAwesomeIcon className='m-2 text-2xl md:text-lg lg:text-2xl' icon={faTwitter} />
                    <FontAwesomeIcon className='m-2 text-2xl md:text-lg lg:text-2xl' icon={faInstagram} />
                    <FontAwesomeIcon className='m-2 text-2xl md:text-lg lg:text-2xl' icon={faFacebookF} />
                    </div >
                </div >
            </div >
            <img src={herobg} className="hidden md:block absolute z-0" alt="" />
            <img src={herobgsm} className="block md:hidden absolute z-0" alt="" />
        </div >
    )
}