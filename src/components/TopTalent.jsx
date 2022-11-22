import {Link} from 'react-router-dom'
import topTalent from '../images/topTalent.png'
import topTalent2 from '../images/topTalent2.png'
import videoGroup from '../images/videoHolder.png'
import arrowButton from '../images/arrowButton.svg'

function TopTalent() {
  return (
    <>
    <div className="relative lg:mt-8 w-full">
        <section className='container z-0 max-w-8xl mx-auto justify-center items-center p-4 md:p-8 text-[#293135]'>
            <img className='hidden xl:block absolute top-10 left-0 h-auto w-[45%]' src={topTalent} alt="" />
            <div className="flex flex-col h-auto lg:h-[907px] items-center justify-between md:flex-row gap-8 z-10">
                <div className='hidden lg:block'></div>
                <div className="relative z-20 flex flex-col text-left max-w-[40rem] lg:pb-40 lg:pt-40 bg-white border-none md:pl-3 rounded-2xl bg-opacity-70">
                    <h2 className='text-4xl pb-8 font-oxygen font-bold'>Placing top talent in the best roles</h2>
                    <p className='pt-7 border-black border-t-1 text-2xl lg:text-4xl leading-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    
                    <Link className='flex flex-row space-x-6 pt-12 group' to='/'>
                        <button>Visit the Candidate Hub</button>
                        <img className='h-12 w-12 transition duration-300 group-hover:scale-105' src={arrowButton} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    </div>

    <div className="relative lg:mt-8 w-full">
        <section className='container z-0 max-w-8xl mx-auto justify-center items-center p-4 md:p-8 text-[#293135]'>
            <img className='hidden xl:block absolute top-10 left-[7%] h-auto w-[auto]' src={topTalent2} alt="" />
            {/* This video img causing issue */}
            <img className='block md:absolute top-10 right-0' src={videoGroup} alt="video player" />
            <div className="flex flex-col h-auto lg:h-[907px] items-center justify-between md:flex-row gap-8 z-10">
                <div className='hidden lg:block'></div>
                <div className="relative z-20 flex flex-col text-left max-w-[40rem] md:py-10 bg-white border-none md:px-3 rounded-2xl bg-opacity-70 mt-10 md:mt-[32rem] lg:mt-[48rem]">
                    <h2 className='text-4xl pb-8  font-oxygen font-bold'>Working with the best companies</h2>
                    <p className='pt-7 border-black  border-t-1 text-2xl lg:text-4xl leading-14'>No nonsense, no silly Recruitment Sales tactics, just a Trusted Partner you can rely on. We pride ourselves  on acting as a Brand Ambassador, representing you and your business to attract the best talent and get an edge on your competition.</p>
                    
                    <Link className='flex flex-row space-x-6 pt-12 group' to='/'>
                        <button>Explore our Client Zone</button>
                        <img className='h-12 w-12 transition duration-300 group-hover:scale-105' src={arrowButton} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    </div>
    
    </>
  )
}

export default TopTalent