import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import search from '../images/search.svg'
import upArrow from '../images/upArrow.svg'
import phone from '../images/phone.svg'
import navButton from '../images/navButton.svg'
import Vlogo from '../images/Vlogo.svg'


function Navbar() {

    const [navBackground, setNavBackground] = useState(false)

    const changeNavBackground = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 66) {
            setNavBackground(true)
        } else {
            setNavBackground(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNavBackground)
    }, [])
    

    return (
    <nav className={navBackground ? 'fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-[#03363D]/60 to-white/25' : 'fixed top-0 left-0 w-full z-40'}>
        <div className="grid grid-cols-2 p-4 lg:p-10">
            <div className='flex justify-between'>
                <div className='hover:scale-105 transition duration-300'>
                    <Link className='hidden md:block' to='/'>
                        <img src={logo} alt="logo"></img>
                    </Link>
                    <Link className='md:hidden' to='/'>
                        <img src={Vlogo} alt="logo"></img>
                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-end'>
                <div className='flex flex-row space-x-6 items-center md:space-x-10'>
                        <button className='w-10 h-10 flex items-center justify-center transition duration-300 hover:scale-110 '>
                            <img className='w-6 h-6' src={search} alt="" />
                        </button>
                        <button className='w-10 h-10 flex items-center justify-center transition duration-300 hover:scale-110 '>
                            <img className='w-6 h-6' src={upArrow} alt="" />
                        </button>
                        <button className='peer group relative w-10 h-10 flex items-center justify-center transition duration-300 hover:scale-110'>
                            <img className='w-6 h-6' src={phone} alt="" />
                            <div className="absolute group w-20 h-20 rounded-full"></div>
                        </button>

                        {/* This nav element is the drop down menu when hovering the phone icon. Notice above that the absolute element is grouped with the button element on hover (adding additional invisible space to be hovered). Hidden on mobile. */}
                        <nav className="hidden absolute top-28 right-20 md:peer-hover:flex hover:flex w-auto flex-col rounded-xl bg-white drop-shadow-lg">
                            <Link to='/' className=" group px-5 py-2 text-[#F25D0E] hover:rounded-t-xl hover:bg-gray-200" href="#">
                                <p className='text-[#F25D0E] pb-1 font-bold'>Main Office</p>
                                <p className='text-[#293135]'>0123 456 789</p>
                            </Link>
                            <Link to='/' className=" group px-5 py-1 text-[#F25D0E] hover:bg-gray-200" href="#">
                                <p className='text-[#F25D0E] pb-1 font-bold'>Property Team</p>
                                <p className='text-[#293135]'>0122 333 456</p>
                            </Link>
                            <Link to='/' className=" group px-5 py-1 text-[#F25D0E] hover:rounded-b-xl hover:bg-gray-200" href="#">
                                <p className='text-[#F25D0E] pb-1 font-bold'>Finance Team</p>
                                <p className='text-[#293135]'>0133 123 456</p>
                            </Link>
                        </nav>
                        
                        
                        {/* This navbar button uses animate ping on an absolute surrounding rounded border for a nice animation effect */}
                        <button className='w-14 h-14 flex items-center justify-center '>
                            <img className='h-10 w-10 md:w-12 md:h-12 relative' src={navButton} alt="" /> 
                            <div className='absolute w-14 h-14 border border-orange-500 rounded-full hover:animate-ping'>
                            </div>
                        </button>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar