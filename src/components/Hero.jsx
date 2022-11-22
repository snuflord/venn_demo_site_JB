import architecture from '../images/architecture1.png'
import architecture2 from '../images/architecture2.png'
import search_white from '../images/whiteSearch.svg'
import arrowButton from '../images/arrowButton.svg'
import downArrow from '../images/downArrow.svg'
import {Link} from 'react-router-dom'
import {useRef} from 'react'

function Hero() {

const ref = useRef(null)

const smoothScroller = () => {
    ref.current?.scrollIntoView({behaviour: 'smooth'});
}

  return (
    <>
        {/* min-h-screen allows overflow of background for elements below white box */}
        <section className="relative min-h-screen bg-[#03363D]">

            {/* justify end here pushes white box to right of screen */}
            <div className="flex items-center justify-end">
                {/* hero container content class makes  */}
                <aside className="flex h-[80vh] items-center justify-center relative z-20 w-full md:w-3/4 bg-[#F7F4EF]"> 
                    {/* This div is the orange line */}
                    <div className='hidden z-10 lg:absolute bg-[#FC7753] transition-all duration-700 lg:top-64 lg:left-40 lg:h-1 w-0 lg:w-3/5 lg:block'></div>

                    <article className='flex flex-col md:flex-row w-5/6 space-x-16 lg:pr-36'>
                        <div className='flex flex-col z-20 justify-center space-y-10 text-center md:text-right'>
                            <h1 className='text-6xl md:text-8xl font-bold font-oxygen text-[#293135]'>We Listen.</h1>
                            <p className='text-3xl leading-14 text-[#293135]'>People-focused recruitment working with some of the best companies in Financial Services and Property</p>
                            <div className='flex items-center justify-center space-x-4 md:justify-end'>
                                <input className='py-3 px-4 rounded-full w-[80%] md:w-1/2 border border-gray-400 focus:border-[#FC7753]' type="text" placeholder='Search for your new role...' />
                                <button className='w-12 h-12 flex items-center justify-center text-xs bg-[#FC7753] rounded-full group'>
                                    <img className='group-hover:scale-110 transition duration-300' src={search_white} alt="" />
                                </button>
                            </div>
                        </div>
                        <img className='hidden lg:block' src={architecture2} alt="" />
                    </article>
                </aside>
            </div>

            {/* architectural image positioned absolute */}
            <div className="absolute z-10 bottom-0 right-0 h-1/2 w-2/5 bg-cover bg-center bg-no-repeat hidden lg:block" style={{
            backgroundImage: `url(${architecture})`
            }}></div>

            <div className="relative z-30 flex flex-col md:flex-row md:py-6 container mx-auto justify-between">
                <div className="w-full flex flex-col p-8 text-left lg:w-1/2 lg:py-40 text-white">
                    <h2 className='text-4xl pb-8 text-white font-oxygen font-bold'>Transparent Recruitment</h2>
                    <p className='pt-7 border-white border-t-1 text-2xl lg:text-4xl leading-14'>Using the latest recruitment technology and talent attraction methods, we build long-lasting relationships with our clients and candidates to deliver a fully bespoke recruitment service. Come and see why so many companies and candidates Trust Integro Partners.</p>
                    
                        <Link className='flex flex-row space-x-6 pt-12 group' to='/'>
                            <button>About Us</button>
                            <img className='h-12 w-12 transition duration-300 group-hover:scale-105' src={arrowButton} alt="" />
                        </Link>
                </div>
            </div>

            {/* This div below is the orange arrow/message to the left - absolute to the section element */}
            <div className='hidden lg:block absolute -left-8 top-1/2'>
                <div onClick={smoothScroller} className="flex flex-col space-y-32 ">
                    <p className='-rotate-90 uppercase text-[#FC7753] tracking-widest'>start your search</p>
                    <img className='hidden lg:block h-24 rotate--180' src={downArrow} alt="" />
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Hero