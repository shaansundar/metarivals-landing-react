import genericBg from '../../assets/genericBg4.png'
import hero from '../../assets/nftmarketplace-hero.png'
import img1 from '../../assets/nftmarketplace/1.png'
import img2 from '../../assets/nftmarketplace/2.png'
import img3 from '../../assets/nftmarketplace/3.png'
import img4 from '../../assets/nftmarketplace/4.png'
import img5 from '../../assets/nftmarketplace/5.png'
import img6 from '../../assets/nftmarketplace/6.png'
import Button from '../../components/button'

export default function Page4() {
    return (
        <div className="w-full text-white h-screen md:h-[65vw] max-h-[2273px] relative">
            <div className='w-full h-full flex md:flex-row flex-col absolute items-start z-10 justify-start'>
                <div className='h-2/5 w-full md:w-2/5 md:h-full flex flex-col items-center justify-center p-4'>
                    <img src={hero} className="h-4/5 w-auto md:w-4/5 md:h-auto" alt="" />
                </div>
                <div className='h-3/5 w-full px-4 md:w-3/5 md:h-full flex flex-col items-center justify-start md:justify-center'>
                    <h1 style={{ fontFamily: 'Anton' }} class="lg:text-6xl w-full p-4 italic text-center md:text-left text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">MetaRivals NFT Marketplace</h1>
                    <p class="text-center md:text-left px-4 md:px-0 ml-0 md:ml-4">Every Character and Weapon NFT represents the real Character or weapon that will be used in the MetaRivals Game</p>
                    {/* 
            <div class="flex flex-wrap items-center lg:items-start justify-center lg:justify-start w-full my-4">
                    <!-- <img *ngFor="let item of list" src="../../../assets/nftmarketplace/{{item}}.svg" class="m-5 w-20 lg:w-40 lg:h-40" alt="" srcset="">  -->
                    <img src="../../../assets/nftmarketplace/{{item}}.svg" class="m-5 w-20 lg:w-40 lg:h-40" alt="" srcset=""> 
            </div>
                    */}
                    {/* <div clasname="flex flex-row w-full items-start justify-start">
            </div> */}
                    <div className='flex flex-wrap items-center mt-4 justify-center md:justify-start w-full px-4'>
                        <img src={img1} className="w-24 md:w-20 lg:w-24 mb-4 mr-4 z-0" alt="" />
                        <img src={img2} className="w-24 md:w-20 lg:w-24 mb-4 mr-4 z-0" alt="" />
                        <img src={img3} className="w-24 md:w-20 lg:w-24 mb-4 mr-4 z-0" alt="" />
                    </div>
                    <div className='flex flex-wrap items-center justify-center md:justify-start w-full px-4'>
                        <img src={img4} className="w-24 md:w-20 lg:w-24 mb-4 mr-4 z-0" alt="" />
                        <img src={img5} className="w-24 md:w-20 lg:w-24 mb-4 mr-4 z-0" alt="" />
                        <img src={img6} className="w-24 md:w-20 lg:w-24 mb-4 mr-4 z-0" alt="" />
                    </div>
                    <div className='w-full pl-4 flex items-center justify-center md:justify-start'>
                        <Button name="Sale Coming Soon!" style={{ width: "230px", height: "60px", fontSize: '12px', margin: '10px' }} />
                    </div>
                </div>
            </div>
            <img src={genericBg} className="absolute w-full h-full overflow-hidden z-0" alt="" />
        </div>
    )
}