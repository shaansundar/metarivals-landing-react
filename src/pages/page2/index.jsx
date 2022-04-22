import genericBg1 from '../../assets/genericBg5.png'
import hero from '../../assets/about-hero.png'
export default function Page2() {
    return (
        <div id="Page2" className="w-full h-screen md:h-[50vw] relative">
            <div className='w-full h-full flex md:flex-row flex-col-reverse absolute items-start z-10 justify-center'>
                <div className='w-full md:w-1/2 h-1/2 md:h-full'>
                    <div class="text-white w-full h-full md:mx-4 flex flex-col items-center justify-center">
                        <h1 style={{ fontFamily: 'Bangers' }} class="lg:text-6xl w-full p-4 italic text-center md:text-left text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">What is Metarivals?</h1>
                        {/* <p class="block text-sm lg:text-base text-center lg:hidden"> </p> */}
                        <p className='px-4 text-base md:text-sm lg:text-base text-center md:text-left'>
                        <h1 className='inline text-Gold'>MetaRivals is an addictive</h1> arcade-style beat em up metaverse game that enables players to battle with warriors based on <h1 className='inline text-Gold'>crypto inspired Avatars.</h1> <br/><br/> Our Play2EARN metaverse gaming ecosystem aims to connect various Crypto-Communities to a single platform by offering opportunities for players to represent and express their love and rivalries for their favourite coins in a fun new way, whilst earning $MRVL in rewards <br/><br/> Players will be able to save their in-game warriors progress using the NFT technology that will be tradeable in our NFT marketplace, hence achieving value for their time in the game!
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-end md:w-1/2 h-1/2 md:h-full'>
                    <img src={hero} alt="" />
                </div>
            </div>
            <img src={genericBg1} className="absolute w-full h-full overflow-hidden z-0" alt="" />
        </div>
    )
}