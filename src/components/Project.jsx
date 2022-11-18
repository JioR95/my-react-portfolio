import React from 'react';
import RunImg from '../images/RunImg.jpg';
import WorkImg from '../images/WorkImg.jpg';
import FindMe from '../images/FindMe.jpeg';
import StarsImg from '../images/StarsImg.png';
import gameImg from '../images/gameImg.png';


const Project = () => {
    
    const Project = [
    {
        id: 1,
        src: RunImg,
        link:"https://jior95.github.io/run-buddy/"
    },
    {
        id: 2,
        src: WorkImg,
        link: "https://jior95.github.io/Horiseon-project/"
    },
    {
        id: 3,
        src: FindMe,
    },
    {
        id: 4,
        src: StarsImg,
        link: "https://jior95.github.io/Find-A-Story/"
    },
    {
        id: 5,
        src: gameImg,
        link: "https://github.com/JioR95"
    }
    ];

    return (
        <div name='Project'
        className="bg-[#ce1616] text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 justify-center items-center  border-black">
                        Projects
                        </p>
                        <p className="py-6">Check out my projects</p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
                            {Project.map(({ id, src}) => (
                                <div key="{id}" className='"shadow-md shadow-gray-600 rounded-lg '>
                                    <img
                                    src={src} 
                                    alt=""
                                    className=" duration-200 hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" 
                                    />
                                    <div className="flex items-center justify-center">
                                        <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Link to Application</button>
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 justify center">Link to Github Repo</button>
                                    </div>
                               </div>
                            ))}
                       </div>
                </div>
         </div>
    );
};
 export default Project;
