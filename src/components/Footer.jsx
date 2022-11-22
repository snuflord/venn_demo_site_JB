import {useState} from 'react'
import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import mailIcon from '../images/mailIcon.svg'
import returnUp from '../images/returnUp.svg'

function Footer() {

    const [toggleAnimation1, setToggleAnimation1] = useState(false)
    const [toggleAnimation2, setToggleAnimation2] = useState(false)
    const [toggleAnimation3, setToggleAnimation3] = useState(false)
    const [displayContent, setDisplayContent] = useState(false)
    const [displayLinks, setDisplayLinks] = useState(false)
    const [displayIndustries, setDisplayIndustries] = useState(false)

    const showContent = (e) => {
        setToggleAnimation1(off => !off)
        setDisplayContent(off => !off)
    }
    const showLinks = (e) => {
        setToggleAnimation2(off => !off)
        setDisplayLinks(off => !off)
    }
    const showIndustries = (e) => {
        setToggleAnimation3(off => !off)
        setDisplayIndustries(off => !off)
    }

    return (
    <>

    <footer className="container max-w-8xl mx-auto justify-center items-center my-12 p-4 md:p-8 text-[#293135]">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 justify-center">
            {/* CONTACT US */}
            <div className="flex flex-col text-left">
                <span className='group cursor-pointer md:cursor-default justify-between flex pb-6' onClick={showContent}>
                    <p className='font-oxygen font-bold text-2xl'>Contact Us</p>
                    {/* This ternary operator checks the state - if the state is true, this element has a classname that enables animation, else it does not */}
                    <p className={toggleAnimation1 ? 'md:hidden text-3xl transition duration-300 font-bold group-hover:text-[#FC7753] rotate-45' : 'md:hidden text-3xl transition duration-300 font-bold group-hover:text-[#FC7753]'}>+</p>
                </span>
                {/* Normal menu (medium screens +) */}
                <div className="hidden md:block">
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Main Office: 0161 989 5670</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Property Team: 0161 989 5670</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Finance Team: 0161 989 5670</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-y-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Email: hello@integro.partners</p>
                    </a>
                </div>

                {/* Mobile menu - hidden by default, toggled by span */}
                <div className='md:hidden'>
                    {displayContent === true && (
                        <>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Main Office: 0161 989 5670</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Property Team: 0161 989 5670</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Finance Team: 0161 989 5670</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-y-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Email: hello@integro.partners</p>
                        </a>
                        </>
                    )}
                </div>
                    
                    <h4 className='font-oxygen font-bold text-2xl py-6'>Connect with Us</h4>
                    {/* Social Icons - not part of mobile drop-down menu */}
                    <div className="flex flex-row space-x-6">
                        <a href="https://google.com">
                            <img className='transition duration-300 hover:scale-110' src={linkedIn} alt="linkedin logo" />
                        </a>
                        <a href="https://google.com">
                            <img className='transition duration-300 hover:scale-110' src={twitter} alt="twitter logo" />
                        </a>
                        <a href="https://google.com">
                            <img className='transition duration-300 hover:scale-110' src={instagram} alt="instagram logo" />
                        </a>
                        <a href="https://google.com">
                            <img className='transition duration-300 hover:scale-110' src={facebook} alt="facebook logo" />
                        </a>
                    </div>
            </div>

            {/* QUICK LINKS */}             
            <div className="flex flex-col text-left">
                <span className='group cursor-pointer md:cursor-default justify-between flex pb-6' onClick={showLinks}>
                    <p className='font-oxygen font-bold text-2xl'>Quick Links</p>
                    <p className={toggleAnimation2 ? 'md:hidden text-3xl transition duration-300 font-bold group-hover:text-[#FC7753] rotate-45' : 'md:hidden text-3xl transition duration-300 font-bold group-hover:text-[#FC7753]'}>+</p>
                </span>
                {/* Normal menu (medium screens +) */}
                <div className="hidden md:block">
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Home</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>About Us</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Clients</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Candidates</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Media Hub</p>
                    </a>
                    <a className='' href="https://google.com">
                        <p className='border-black border-y-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Job Search</p>
                    </a>
                </div>

                {/* Mobile menu - hidden by default, toggled by span */}
                <div className='md:hidden'>
                    {displayLinks === true && (
                        <>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Home</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>About Us</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Clients</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Candidates</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Media Hub</p>
                        </a>
                        <a className='' href="https://google.com">
                            <p className='border-black border-y-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Job Search</p>
                        </a>
                        </>
                    )}
                </div>
            </div>

            {/* INDUSTRIES */}             
            <div className="flex flex-col text-left">
                <span className='group cursor-pointer md:cursor-default justify-between flex pb-6' onClick={showIndustries}>
                    <p className='font-oxygen font-bold text-2xl'>Industries</p>
                    <p className={toggleAnimation3 ? 'md:hidden text-3xl transition duration-300 font-bold group-hover:text-[#FC7753] rotate-45' : 'md:hidden text-3xl transition duration-300 font-bold group-hover:text-[#FC7753]'}>+</p>
                </span>
                {/* Normal menu (medium screens +) */}
                <div className="hidden md:block">
                    <a href="https://google.com">
                        <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Property</p>
                    </a>
                    <a href="https://google.com">
                        <p className='border-black border-y-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Financial Services</p>
                    </a>
                </div>

                {/* Mobile menu - hidden by default, toggled by span */}
                <div className='md:hidden'>
                    {displayIndustries === true && (
                        <>
                        <a href="https://google.com">
                            <p className='border-black border-t-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Property</p>
                        </a>
                        <a href="https://google.com">
                            <p className='border-black border-y-1 py-3 hover:bg-[#f6f4f2] transition duration-300'>Financial Services</p>
                        </a>
                        </>
                    )}
                </div>
            </div>

            {/* EMAIL NEWSLETTER */}             
            <div className="flex flex-col text-left pb-5">
                <p className='font-oxygen font-bold text-2xl pb-4'>Email Newsletter</p>
                <p>Keep up to date with opportunities and industry insights</p>
                
                <div className="flex flex-row space-x-2">
                    <input className='py-3 mt-3 px-4 rounded-full w-3/4 border items-center border-gray-400 focus:border-[#FC7753]' type="text" placeholder='Email Address' />
                    <img className='w-12 h-12 mt-3 justify-center hover:cursor-pointer hover:scale-110 transition duration-300' src={mailIcon} alt="mail icon" />
                </div>
            </div>
        </div>
        <div className="absolute right-8 bottom-255">
            <button className='w-14 h-14 flex items-center justify-center '>
                <img className='w-12 h-12 relative' src={returnUp} alt="" /> 
                <div className='absolute w-14 h-14 border border-orange-500 rounded-full hover:animate-ping'>
                </div>
            </button>
        </div>
          
                   
    </footer>

        <div className="w-full border-black border-t-1 my-10">
            <div className="flex flex-col md:flex-row container max-w-8xl mx-auto justify-between items-center text-xs px-8 pt-10 space-y-2 md:space-y-0">
                <p>Copyright Integro Partners</p>
                <p>Privacy Policy   Slavery & Human Trafficking Statement   Terms & Conditions</p>
                <p>Site by Venn</p>
            </div>
        </div>  
    </>
    
    
  )
}

export default Footer