import project from '../../assets/project.png'
const Projects = () => {
    return (
        <div className="px-[10%]">
            <p className="text-center font-jost text-5xl my-20">Projects</p>
            <div>
                <div className='flex flex-col justify-between items-center'>
                    <img src={project} width={'40%'} className='flex-1/2' />
                    <div className='flex-1/2 font-jost'>
                        <p className='text-4xl'>BICS</p>
                        <p className='text-xl text-[#4d4c4c]'>Designed and built a web platform for BICS Matuail Purba Thana to simplify member management and internal collaboration.</p>
                        <p className='text-2xl mt-3'>Key Features</p>
                        <ul>
                            <li>1. Role-Based Access Control,</li>
                            <li>2. Multi-Role System with Switching</li>
                            <li>3. Program Attendance Tracking</li>
                        </ul>
                        <p className='text-xl mt-3'>Tech Stack</p>
                        <p>React.js, Node.js, Express.js, MongoDB, Cloudinary, firebase, JWT, Nodemailer</p>
                        <div className='text-xl space-x-5 mt-6'>
                            <button className='bg-[#b49fee] active:bg-[#9377df] shadow-xs px-5 py-2 active:scale-95 transition-all rounded-xs text-white'>
                                <a href="https://bics-mp.web.app" target='_blank'>Live Link</a>
                            </button>
                            <button className='bg-[#f7b2b2] active:bg-[#ec8f8f] shadow-xs px-5 py-2 active:scale-95 transition-all rounded-xs text-white'>
                                <a href="https://github.com/AR-Jame/Bics-mp-client" target='_blank'>Github Link</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;