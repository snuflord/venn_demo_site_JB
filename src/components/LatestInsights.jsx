import {Link} from 'react-router-dom'
import insights1 from '../images/insights1.png'
import insights2 from '../images/insights2.png'
import insights3 from '../images/insights3.png'
import arrowButton from '../images/arrowButton.svg'

function LatestInsights() {

    const blogs = [
        {
            image: insights1,
            date: '20th June',
            title: 'Want to become a self-employed Mortgage Broker?', 
            description: "Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper…",
            button: {
                text: 'Read more'
          }
        },
        {
            image: insights2,
            date: '20th June',
            title: 'Counter Offers - Should I Stay, or Should I Go?!', 
            description: "Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper…",
            button: {
                text: 'Read more'
            }
          },
          {
            image: insights3,
            date: '20th June',
            title: 'Have you ever been Jobfished?', 
            description: "Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper…",
            button: {
                text: 'Read more'
            }
          },
      ]

  return (
    <div className="bg-[#F7F4EF] py-10">
        <section className='container max-w-8xl mx-auto justify-center items-center p-4 md:p-8 lg:pb-32 lg:mt-6 text-[#17494D]'>
            <div className="flex flex-col items-start py-5 border-black border-b-1 md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
                <p className="font-oxygen font-bold justify-center text-3xl text-[#202124]">Latest Insights</p>
                <Link className='flex flex-row space-x-6 group justify-center' to='/'>
                    <button className='text-black'>All resources</button>
                    <img className='h-12 w-12 transition duration-300 group-hover:scale-105' src={arrowButton} alt="" />
                </Link>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-12 mt-20 justify-center items-center text-white'>
                {blogs.map((blog, index) => (
                    <div key={index} className="relative flex-flex-col items-center justify-center overflow-hidden group" >
                        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition duration-300' style={{backgroundImage: `url(${blog.image})`}}></div>

                        <div className="relative z-20 h-auto lg:h-[620px] hover:bg-black hover:bg-opacity-20 transition duration-300 p-10">
                            <h3 className='text-[#FC7753]' >{blog.date}</h3>
                            <h3 className='text-4xl font-oxygen font-bold leading-relaxed pb-6 pt-4'>{blog.title}</h3>
                            <p className='w-[90%] text-1xl text-2xl leading-10 xl:leading-8 2xl:leading-10 pb-20'>{blog.description}</p>
                            <div className="absolute bottom-10 left-10">
                                <Link to='/' className='flex flex-row space-x-4 group items-center'>
                                    <span className='text-white'>{blog.button.text}</span>
                                    <img className='h-12 w-12 transition duration-300 group-hover:scale-110' src={arrowButton} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>

            <h3 className='font-oxygen text-5xl lg:text-8xl pt-10 md:pt-20 lg:pt-40 pb-10 lg:pb-28 text-[#293135] border-[#293135] border-b-1'>It all starts with a conversation.</h3>
            <div className="flex flex-col lg:flex-row justify-between pt-16">
                    <p className='text-2xl lg:w-1/2 pb-6'>We know it’s not always a good time, so you can schedule a call back at a time that works for you.</p>
                    <Link to='/' className='flex flex-row space-x-4 group items-center'>
                        <span>Let's talk</span>
                        <img className='h-12 w-12 transition duration-300 group-hover:scale-110' src={arrowButton} alt=""/>
                    </Link>
            </div>
        </section>
    </div>
    
  )
}

export default LatestInsights