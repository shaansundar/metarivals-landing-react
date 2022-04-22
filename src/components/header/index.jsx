import logo from '../../assets/logo.png'
export default function Header() {
    return (
        <div className="w-screen overflow-hidden text-white px-4 h-20 md:h-16 lg:h-20 bg-black bg-opacity-50 z-20 fixed flex items-center justify-center md:justify-between">
            <div className="w-auto text-[0px] md:text-xs lg:text-base h-full flex items-center justify-center">
                <a className="font-semibold focus:text-yellow-400 mx-4 focus:underline focus:underline-offset-8" href="">Home</a>
                <a className="font-semibold focus:text-yellow-400 mx-4 focus:underline focus:underline-offset-8" href="">Documents</a>
                <a className="font-semibold focus:text-yellow-400 mx-4 focus:underline focus:underline-offset-8" href="">Roadmap</a>
            </div>
            <img src={logo} className="h-16 md:h-12 lg:h-16" alt="" />
            <div className="w-auto text-[0px] md:text-xs lg:text-base h-full flex items-center justify-center">
                <a className="font-semibold focus:text-yellow-400 mx-4 focus:underline focus:underline-offset-8" href="">MRVL</a>
                <a className="font-semibold focus:text-yellow-400 mx-4 focus:underline focus:underline-offset-8" href="">Partners</a>
                <a className="font-semibold focus:text-yellow-400 mx-4 focus:underline focus:underline-offset-8" href="">NewsLetter</a>
            </div>
        </div>
    )
}