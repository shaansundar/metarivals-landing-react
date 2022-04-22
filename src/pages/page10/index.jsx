import footerBg from '../../assets/v2/footer.png'
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

export default function Page10() {
    return (
        <div className="w-full h-[80vh] md:h-[50vw] relative">
            <div className='w-full text-white h-full flex flex-col z-10 items-center absolute justify-center'>
                <h1 style={{ fontFamily: 'Anton' }} class="lg:text-6xl w-full p-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Contact Us</h1>
                <h1 class="my-5">Communication is Key</h1>
                <div class="flex flex-wrap lg:flex-nowrap my-4 items-center justify-center">
                    <div class="flex lg:ml-10 h-full items-center justify-start">
                        <a
                            class="mx-4 transition-all hover:underline-offset-2 cursor-pointer text-white font-semibold hover:text-yellow-400 hover:underline">Home</a>
                        <a
                            class="mx-4 transition-all hover:underline-offset-2 cursor-pointer text-white font-semibold hover:text-yellow-400 hover:underline">Documents</a>
                        <a
                            class="mx-4 transition-all hover:underline-offset-2 cursor-pointer text-white font-semibold hover:text-yellow-400 hover:underline">Roadmap</a>
                    </div>
                    <div class="flex lg:mr-10 h-full items-center justify-end">
                        <a class="mx-4 cursor-pointer text-white font-semibold hover:text-yellow-400 hover:underline">$MRVL</a>
                        <a class="mx-4 cursor-pointer text-white font-semibold hover:text-yellow-400 hover:underline">Partners</a>
                        {/* <!-- <a class="mx-4 cursor-pointer text-white font-semibold hover:text-yellow-400 hover:underline">NFTs Game</a> --> */}
                    </div>
                </div>
                <div class="mt-4">
                    <FontAwesomeIcon className='m-2 text-2xl' icon={faTelegramPlane} />
                    <FontAwesomeIcon className='m-2 text-2xl' icon={faTwitter} />
                    <FontAwesomeIcon className='m-2 text-2xl' icon={faInstagram} />
                    <FontAwesomeIcon className='m-2 text-2xl' icon={faFacebookF} />
                </div >
                <div class="w-full mt-8 flex flex-col items-center justify-center">
                    <h1 style={{ fontFamily: 'Anton' }} class="lg:text-6xl w-full p-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Subscribe to the Newsletter!</h1>
                    <input class="border-2 md:border-4 border-white text-lg lg:text-4xl text-white text-center px-4 w-1/2 h-12 md:h-20 bg-transparent" placeholder="meta@rivals.com" type="text" name="news" id="news" />
                    <div className="hidden md:block">
                        <Button name="Submit" style={{ width: "350px", height: "60px", fontSize: '12px', margin: '10px' }} />
                    </div>
                    <div className="md:hidden block">
                        <Button name="Submit" style={{ width: "350px", height: "40px", fontSize: '12px', margin: '10px' }} />
                    </div>
                </div>
            </div>
            <img src={footerBg} className="absolute bottom-0 w-full overflow-hidden z-0" alt="" />
        </div>
    )
}