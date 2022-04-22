import logo from '../../assets/logo.png'
export default function Header() {
    return (
        <div className="w-screen overflow-hidden text-white px-4 h-20 md:h-16 lg:h-20 bg-black bg-opacity-50 z-20 fixed flex items-center justify-center md:justify-between">
            <div className="w-auto text-[0px] md:text-xs lg:text-base h-full flex items-center justify-center">
                <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="#Page1">Home</a>
                <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="https://metarivals.gitbook.io/docs/">Documents</a>
                <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="#Page7">Roadmap</a>
                <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="https://docsend.com/view/z997j536kgq32jej">Pitchdeck</a>
            </div>
            <img src={logo} className="h-16 md:h-12 lg:h-16" alt="" />
            <div className="w-auto text-[0px] md:text-xs lg:text-base h-full flex items-center justify-center">
                <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="https://link.medium.com/DjTxHotvqpb">$MRVL</a>
                <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="#Page9">Partners</a>
                <a className="font-semibold hover:text-yellow-400 mx-4 hover:underline hover:underline-offset-8" href="#Page10">Subscribe to NewsLetter</a>
            </div>
        </div>
    )
}