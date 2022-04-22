import genericBg from '../../assets/genericBg4.png'
import TeamCard from '../../components/teamCard'
import Dev from '../../assets/Dev.png'
import Louisa_Lopez from '../../assets/Louisa-Lopez.png'
import Prince_Pratap_Singh from '../../assets/Prince-Pratap-Singh.png'
import Pawan from '../../assets/Pawan.png'
import Ashish from '../../assets/Ashish.png'

export default function Page8() {
    return (
        <div className="w-full text-white min-h-fit md:h-[70vh] lg:h-[65vw] max-h-[2273px] relative">
            <div className='w-full h-full flex my-4 flex-col items-center z-10 justify-start'>
                <h1 style={{ fontFamily: 'Anton' }} class="lg:text-6xl w-full p-4 italic text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-Dark to-Light">Team</h1>
                <h1 className='mb-4'>Mind Behind MetaRivals</h1>
                <div className='w-full flex flex-wrap items-center justify-center'>
                    <TeamCard img={Ashish} name="Ashish" designation="Co-Founder, Chief Advisor" desc="Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea." />
                    <TeamCard img={Prince_Pratap_Singh} name="Prince Pratap Singh" designation="Co-Founder, COO" desc="Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea." />
                    <TeamCard img={Dev} name="Dev" designation="Co-Founder, CMO" desc="Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea." />
                    <TeamCard img={Pawan} name="Pawan" designation="Co-Founder, Global Community Head" desc="Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea." />
                    <TeamCard img={Louisa_Lopez} name="Louisa Lopez" designation="Business Development Head" desc="Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea." />
                </div>
            </div>
            {/* <img src={genericBg} className="absolute w-full h-full overflow-hidden z-0" alt="" /> */}
        </div>
    )
}