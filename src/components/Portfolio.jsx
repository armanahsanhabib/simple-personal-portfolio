import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si';

const portfolioData = [
    {
        projectName: 'Royal Real Estate 🏠',
        description: 'This is a Real Estate website. Find Your Home Sweet Home. Navigate through an Array of Listings, Customize Your Search, and Make Your Dream a Reality!',
        stack: ['react', 'tailwind'],
        img: "https://i.pinimg.com/originals/c9/63/3f/c9633fad64bfd1eb42b3a1495cb88165.jpg",
        github: '',
        live: '',
    },
    {
        projectName: 'Travel Point ✈️',
        description: 'This is a Travel Website. Your Gateway to Unforgettable Adventures! Discover and Book your Dream Destinations with Confidence, Ensuring a Memorable and Secure Journey.',
        stack: ['react', 'tailwind'],
        img: "https://i.pinimg.com/564x/07/b9/73/07b97368ba05a5c85a8a01cd64c162f2.jpg",
        github: '',
        live: '',
    },
    {
        projectName: 'Step Style 👟',
        description: 'This is an online shoe store website. Experience Shoe Shopping Redefined. Explore Online Store for the Latest Footwear Trends and Shop for Your Perfect Pair Today!',
        stack: ['react', 'tailwind'],
        img: "https://uploads-ssl.webflow.com/5f9cf30b5619ec0ea140683f/600d44e04780c3d4c50ff26b_02-Catalog-p-1080.png",
        github: '',
        live: '',
    },
];

const Portfolio = () => {
    return (
        <div className="bg-[#f9f9f9]">
            <div className='container lg:pb-[250px] lg:pt-[calc(250px-130px)] py-[80px] lg:py-[0] flex flex-col justify-center items-center max-w-[1000px] md:w-[96%] px-5 mx-auto'>
                <div id='projects' className="content w-full lg:pt-[130px] md:text-left text-center">
                    <h3 className='text-blue-500 text-xl font-bold mb-3'>PORTFOLIO</h3>
                    <h2 className='text-2xl font-bold mb-5'>Each project is a unique piece of development 🧩</h2>
                    <div className="grid gap-y-[50px] grid-cols-1 mt-10">
                        {portfolioData.map((data, i) => (
                            <PortfolioCard
                                key={i}
                                img={data.img}
                                projectName={data.projectName}
                                description={data.description}
                                github={data.github}
                                live={data.live}
                                stackIcons={data.stack.map((stack, j) => (
                                    <StackIcon
                                        key={j}
                                        stackName={stack}
                                        stackIcon={(stack == 'html') ? SiHtml5 : (stack == 'css') ? SiCss3 : (stack == 'js') ? SiJavascript : (stack == 'react') ? SiReact : (stack == 'tailwind') ? SiTailwindcss : (stack == 'bootstrap') ? SiBootstrap : (stack == 'Redux') ? SiRedux : null}
                                    />
                                ))}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PortfolioCard = (props) => {
    return (
        <div
            className={`lg:h-[25rem] h-auto bg-gray-50 rounded-2xl p-4 lg:w-full lg:max-w-full max-w-[570px] mx-auto flex justify-between items-center lg:even:flex-row-reverse lg:odd:flex-row flex-col ${props.className}`}
            style={{
                boxShadow: '0 0 10px #ccc'
            }}
        >
            <div className="image lg:w-[58%] w-[100%] lg:h-full h-[400px] overflow-hidden rounded-xl bg-gray-50 lg:mb-0 mb-5 shadow-[0_0_12px_#ddd]">
                <a href={props.live} target='blank'>
                    <img
                        src={props.img}
                        alt={props.alt}
                        className='transform translate-y-0 hover:translate-y-[calc(-100%+368px)] img-fluid transition duration-[8s] ease-in-out' />
                </a>
            </div>
            <div className="text lg:w-[40%] w-[100%] lg:h-full h-auto text-center rounded-xl bg-gray-50 flex justify-between flex-col p-8 lg:shadow-[inset_0_0_12px_#ddd]">
                <h3 className='font-semibold text-xl lg:mb-0 mb-5'>{props.projectName}</h3>
                <div className="buttons flex flex-wrap gap-y-3 justify-center items-center lg:mb-0 mb-5">
                    {props.stackIcons}
                </div>
                <p className='text-gray-500 lg:mb-0 mb-5'>
                    {props.description}
                </p>
                <div className="icons flex justify-center items-center">
                    <div className="icon flex justify-center items-center text-lg">
                        <a href={props.github} target='blank' className='flex mr-5 hover:text-blue-500 transition'>Code <FaGithub className='ml-2 text-2xl' /></a>
                        <a href={props.live} target='blank' className='flex hover:text-blue-500 transition'>Live Demo <BsBoxArrowUpRight className='ml-2 text-2xl' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StackIcon = (props) => {
    return (
        <button className='bg-gray-50 px-3 py-2 text-sm mr-3 flex items-center font-semibold cursor-text shadow-[0_0_5px_#ccc]'>
            <props.stackIcon className='mr-2' />
            {props.stackName}
        </button>
    );
};

export default Portfolio;