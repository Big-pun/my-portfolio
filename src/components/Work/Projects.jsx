import React from 'react';
import DBZKakarot from '../../Images/DBZKakarot.png';
import TRS from '../../Images/TheRollingStoners.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background from '../Background';


function Projects() {
    const projects = [

        {
            title: 'The Rolling Stoners',
            description: '"The Rolling Stoners" is a showcase website for a Brazilian Jiu-Jitsu club. Built with HTML, CSS, JavaScript, and Tailwind CSS, it includes features like a dark mode, three forms: one for a newsletter, one for membership subscriptions, and a contact form. It also utilizes various Tailwind components such as a carousel, CTA sections, cards, and an accordion for a clean, modern design.',
            imageUrl: TRS,
            link: 'https://big-pun.github.io/TP-Final_Adrien-Thomas/'
        },
        {
            title: 'DBZ Kakarot',
            description: 'The site is built using HTML, CSS, and JavaScript, and features a database of 20 characters from the game. Initially, the idea was to use an API, but since none existed in French, I translated the data found online and created the database using JSON. Users can collect and display detailed information about each character on the website.',
            imageUrl: DBZKakarot,
            link: 'https://big-pun.github.io/TP1_ThomasAdrien/'
        },
        {
            title: 'Projet 3',
            description: 'Description de projet 3.',
            imageUrl: '/images/projet3.png',
            link: ''
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="">
            <h2 className='text-4xl mb-4'>Websites</h2>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Background>
                        <div key={index} className="flex flex-row items-center gap-4 p-12">
                            <div>
                                <img src={project.imageUrl} alt={project.title} className='max-w-60' />
                            </div>
                            <div className='flex-col space-y-6'>
                                <h2>{project.title}</h2>
                                <p className='max-w-prose'>{project.description}</p>

                                <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                            </div>
                        </div>
                    </Background>
                ))}
            </Slider>
        </div>
    );
}

export default Projects