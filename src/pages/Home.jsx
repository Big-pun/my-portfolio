import Intro from '../components/Home/Intro';
import Dev from '../Images/Dev.svg';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import H1 from '../components/Home/H1';
import H2 from '../components/Home/H2';
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

function Home() {

    const scrollToTextSection = () => {
        document.getElementById('portfolioStack').scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <div className='container mx-auto p-4'>
            <section className='grid grid-cols-12 lg:min-h-screen'>
                <div className='col-span-12 md:col-span-7 md:col-start-2'>
                    <H1 />
                    <div className='relative'>
                        <div className='h-16 md:h-20'>
                            <Intro />
                        </div>
                        <H2 className='absolute top-0 left-0' />
                    </div>
                </div>

                <div className='col-span-6 col-start-4 md:col-span-3 md:col-start-9 mb-12 md:mb-0 md:mt-24'>
                    <img src={Dev} alt="Dev" />
                </div>

                <div className='col-span-12 text-center hidden lg:block -mt-36'>
                    <button
                        className='text-green-500 text-5xl md:text-9xl animate-pulse items-center'
                        aria-label="Scroll to section 2"
                        onClick={scrollToTextSection}
                    >
                        <MdOutlineKeyboardDoubleArrowDown />
                    </button>
                </div>
            </section>

            <section id='portfolioStack' className='grid grid-cols-12 md:min-h-screen pt-8 lg:-my-16'>
                <div className='col-span-12 md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3'>
                    <h2 className='text-5xl mb-8'>
                        How This <span className='text-green-500 font-bold'>Portfolio</span> Was Built
                    </h2>
                    <p className='text-xl md:text-2xl mb-8'>
                        This portfolio was built using modern web development technologies to ensure a responsive and dynamic user experience. Here are some key aspects of its construction:
                    </p>
                    <ul className='list-disc list-inside text-xl md:text-2xl mb-8'>
                        <li><span className='font-bold text-green-500'>React:</span> The entire application is built using React.</li>
                        <li><span className='font-bold text-green-500'>Tailwind CSS:</span> Tailwind CSS is used for styling, providing a utility-first approach that allows for rapid and responsive development.</li>
                        <li><span className='font-bold text-green-500'>Vite:</span> Vite is used as the build tool, offering fast development and optimized production builds.</li>
                        <li><span className='font-bold text-green-500'>React Icons:</span> Icons are provided by the React Icons library.</li>
                        <li><span className='font-bold text-green-500'>React Router:</span> React Router is used for navigation.</li>
                        <li><span className='font-bold text-green-500'>Charts:</span> Charts are created using the Chart.js library.</li>
                    </ul>

                    <p className='text-lg md:text-xl'>
                        Feel free to explore the code and reach out if you have any questions or suggestions!
                    </p>
                    <div className="flex justify-center items-center">
                        <a className='text-xl md:text-2xl mx-auto text-center bg-green-500 px-6 my-4 border-2 border-gray-300 rounded-lg text-black animate-pulse' href='https://github.com/Big-pun/my-portfolio' target='_blank'>
                            <RiGitRepositoryCommitsLine />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;