import button from '../../assets/button.svg'

export default function Button(props) {
    return(
        <div style={props.style} className=" text-white cursor-pointer hover:scale-105 transition-all relative flex items-center justify-center h-16">
            <img src={button}  className="h-full w-full absolute" alt="" />
            <h1 className='z-10'>{props.name}</h1>
        </div>
    )
}