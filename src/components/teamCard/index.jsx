import cardbg from '../../assets/team-outline.svg'

export default function TeamCard(props) {
    return (
        <div className="relative flex items-center w-48 h-56 lg:w-56 lg:h-72 justify-center m-6">
            <div className='p-4 lg:p-8 w-full h-full flex flex-col items-center justify-start'>
                <img src={props.img} className="w-2/3 mt-4 p-1 outline-double outline-offset-4 outline-blue-300" />
                <div className='h-full w-full flex flex-col items-center justify-end lg:justify-center'>
                    <h1 style={{ fontFamily: 'Anton' }} class="lg:text-xl w-full text-center text-lg text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">{props.name}</h1>
                    <h1 className='text-xs text-center lg:text-base'>{props.designation}</h1>
                </div>
            </div>
            <img src={cardbg} className="w-full absolute" alt="" />
        </div>
    )
}