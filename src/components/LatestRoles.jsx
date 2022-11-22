import {Link} from 'react-router-dom'
import buttonArrow from '../images/buttonArrow.svg'
import arrowButton from '../images/arrowButton.svg'
import savillsIcon from '../images/savillsIcon.svg'
import thornleyGroves from '../images/thornleyGroves.svg'
import FAC from '../images/FAC.svg'



function LatestRoles() {

    

    const roles = [
        {
          name: 'Electrical Conductor Researcher',
          metaItems: [
            'Negotiable', 
          ],
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper. In sagittis felis non pharetra dapibus…",
          button: {
              text: 'View Job'
          }
        },
        {
          name: 'Electrical Conductor Researcher',
          metaItems: [
            '£31,000 + uncapped commission', 'Self-Employed'
          ],
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper. In sagittis felis non pharetra dapibus…",
          button: {
            text: 'View Job'
          }
        },
        {
            name: 'Electrical Conductor Researcher',
            metaItems: [
              '£42,000', ''
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper. In sagittis felis non pharetra dapibus…",
            button: {
              text: 'View Job'
            }
          },
          {
            name: 'Electrical Conductor Researcher',
            metaItems: [
              '£31,000 - £43,000', 'Employed'
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida odio at semper semper. In sagittis felis non pharetra dapibus…",
            button: {
              text: 'View Job'
            }
          },
      ]

  return (
    <>
    <section className="container max-w-8xl mx-auto justify-center items-center p-4 md:p-8 lg:mt-[16rem] text-[#17494D]">
    <h2 className="font-oxygen font-bold text-4xl text-left text-[#202124]">Latest Roles</h2>
    <div className="flex flex-col items-start py-5 border-black border-b-1 md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
        <p className="font-oxygen font-bold justify-center text-2xl text-[#202124]">Recent opportunities across Finance, Mortgages and Property</p>
        <Link className='flex flex-row space-x-6 group justify-center' to='/'>
            <button className='text-black'>View all roles</button>
            <img className='h-12 w-12 transition duration-300 group-hover:scale-105' src={arrowButton} alt="" />
        </Link>
    </div>

    <div className="grid grid-cols-1 pt-6 gap-2 md:grid-cols-2 xl:grid-cols-4 lg:pt-16">
        {roles.map((role, index) => (
          <div key={index} className='bg-[#F7F4EF] p-6 border-[#F7F4EF] border-1 hover:border-[#FC7753] transition-all duration-200'>
            <div className="flex flex-col justify-between ">
              <header className="lg:h-24 flex flex-col">
                <h3 className="font-oxygen font-bold text-1xl pb-4 mb-5 border-black border-b-1">{role.name}</h3>
                {role.metaItems.map((meta, metaKey) => {
                  return <p key={metaKey} className='text-sm font-bold pb-2'>{meta}</p>
                })}
              </header>
              <div className="grow flex flex-col justify-between pt-6">
                <article className="flex flex-col justify-between">
                  <p className='text-sm font-light max-w-[16rem]'>{role.description}</p>
                </article>
                <div className="flex items-end grow pt-6">
                  <Link to='/' className='flex flex-row space-x-3 group items-center'>
                    <span className='text-black text-sm'>{role.button.text}</span>
                    <img className='h-4 w-4 transition duration-300 group-hover:scale-125' src={buttonArrow} alt=""/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center py-12">
        <div className="space-x-10 flex flex-row items-center justify-center transition duration-300">
            <img className='saturate-0 rotate-180 hover:scale-110 hover:cursor-pointer' src={buttonArrow} alt="" />
            <img className='saturate-0 hover:scale-110 hover:cursor-pointer' src={buttonArrow} alt="" />
        </div>
      </div>
  </section>

    <section className='container max-w-8xl mx-auto justify-center items-center p-4 md:p-8 lg:pb-44 lg:mt-6 text-[#17494D]'>
        <h2 className="font-oxygen font-bold text-5xl text-left text-[#202124] pb-12 md:pb-24">We’re nothing like the Recruitment Agencies out there. But don’t just take our word for it…</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center items-center">
            <div className="flex-flex-col space-y-4">
                <img src={savillsIcon} alt="" />
                <h3 className='text-[#FC7753] pt-2 pb-5 border-b-1 border-[#FC7753]'>Property Sector</h3>
                <p className='w-[90%] pt-2'>“Blockquote Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua”</p>
                <p className='font-bold'>Mike Young</p>
                <p className='text-[#FC7753]'>Managing Director</p>
            </div>
            <div className="flex-flex-col space-y-4">
                <img src={thornleyGroves} alt="" />
                <h3 className='text-[#FC7753] pt-2 pb-5 border-b-1 border-[#FC7753]'>Property Sector</h3>
                <p className='w-[90%] pt-2'>“Blockquote Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua”</p>
                <p className='font-bold'>Mike Young</p>
                <p className='text-[#FC7753]'>Managing Director</p>
            </div>
            <div className="flex-flex-col space-y-4">
                <img src={FAC} alt="" />
                <h3 className='text-[#FC7753] pt-2 pb-5 border-b-1 border-[#FC7753]'>Finance Sector</h3>
                <p className='w-[90%] pt-2'>“Blockquote Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua”</p>
                <p className='font-bold'>Mike Young</p>
                <p className='text-[#FC7753]'>Managing Director</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default LatestRoles