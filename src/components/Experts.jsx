import {Link} from 'react-router-dom'
import architecture1_experts from '../images/experts_architecture1.png'
import architecture2_experts from '../images/experts_architecture2.png'
import phoneSymbol from '../images/phone_symbol.svg'
// Overflow of background on second column

function Experts() {
  return (
    <section className="container max-w-8xl mx-auto justify-center items-center p-4 md:p-8">
        <h2 className='font-oxygen text-4xl font-bold mb-8 lg:mt-16'>Experts in our industries</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-col bg-[#F7F4EF] max-w-auto">
                <img className='w-full' src={architecture1_experts} alt="" />
                <div className='p-6'>
                    <h3 className='font-oxygen text-3xl font-bold pb-6'>Financial Services</h3>
                    <p className='pb-6'>Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper. In sagittis felis non pharetra dapibus. Maecenas in laoreet justo, at maximus nibh. </p>
                        <Link className='flex flex-row space-x-6 items-center pb-5 group' to='/'>
                            <button className='text-[#F25D0E]'>Call our Financial Team</button>
                            <img className='h-12 w-12 transition duration-300 group-hover:scale-105' src={phoneSymbol} alt="" />
                        </Link>
                </div>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 1</p>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 2</p>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 3</p>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 4</p>
            </div>
            <div className="flex-col bg-[#F7F4EF] max-w-auto">
                <img className='w-full' src={architecture2_experts} alt="" />
                <div className='p-6'>
                    <h3 className='font-oxygen text-3xl font-bold pb-6'>Property</h3>
                    <p className='pb-6'>Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper. In sagittis felis non pharetra dapibus. Maecenas in laoreet justo, at maximus nibh. </p>
                        <Link className='flex flex-row space-x-6 items-center pb-5 group' to='/'>
                            <button className='text-[#F25D0E]'>Call our Financial Team</button>
                            <img className='h-12 w-12 transition duration-300 group-hover:scale-105' src={phoneSymbol} alt="" />
                        </Link>
                </div>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 1</p>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 2</p>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 3</p>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 4</p>
                <p className='border-gray-400 border-t-1 p-5 transition-all duration-300 hover:text-[#F25D0E] hover:bg-[#ebe6dd]'>Sub-Specialism 5</p>
            </div>
        </div>
    </section>
  )
}

export default Experts