import footerBg from '../../assets/v2/footer.png'
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF, faTelegramPlane, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Page10() {
    return (
        <div id="Page10" className="w-full h-[80vh] md:h-[50vw] relative">
            <div className='w-full text-white h-full flex flex-col z-10 items-center absolute justify-center'>
                <h1 style={{ fontFamily: 'Bangers' }} class="lg:text-6xl w-full p-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Contact Us</h1>
                <h1 class="my-5">Communication is the Key to Success</h1>
                <div class="flex flex-wrap lg:flex-nowrap my-4 items-center justify-center">
                    <div class="flex lg:ml-10 h-full items-center justify-start">
                        <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="#Page1">Home</a>
                        <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="https://metarivals.gitbook.io/docs/">Documents</a>
                        <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="#Page7">Roadmap</a>
                    </div>
                    <div class="flex lg:mr-10 h-full items-center justify-end">
                        <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="https://link.medium.com/DjTxHotvqpb">$MRVL</a>
                        <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="#Page9">Partners</a>
                        {/* <!-- <a class="mx-4 cursor-pointer text-white font-semibold hover:text-yellow-400 hover:underline">NFTs Game</a> --> */}
                    </div>
                </div>
                <div class="mt-4">
                    <a href="https://t.me/MetaRivals"><FontAwesomeIcon className='hover:scale-110 transition-all m-2 text-2xl md:text-lg lg:text-2xl' icon={faTelegramPlane} /></a>
                    <a href="https://twitter.com/RealMetaRivals"><FontAwesomeIcon className='hover:scale-110 transition-all m-2 text-2xl md:text-lg lg:text-2xl' icon={faTwitter} /></a>
                    <a href="https://instagram.com/meta_rivals/"><FontAwesomeIcon className='hover:scale-110 transition-all m-2 text-2xl md:text-lg lg:text-2xl' icon={faInstagram} /></a>
                    <a href="https://facebook.com/MetaRivals"><FontAwesomeIcon className='hover:scale-110 transition-all m-2 text-2xl md:text-lg lg:text-2xl' icon={faFacebookF} /></a>
                    <a href="https://www.youtube.com/channel/UC2rkPFlYatISUZvDUDsmqyA"><FontAwesomeIcon className='hover:scale-110 transition-all m-2 text-2xl md:text-lg lg:text-2xl' icon={faYoutube} /></a>
                </div >
                <div class="w-full mt-8 flex flex-col items-center justify-center">
                    <h1 style={{ fontFamily: 'Bangers' }} class="lg:text-6xl w-full p-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Subscribe to the Newsletter!</h1>
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