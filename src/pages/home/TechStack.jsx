import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { techStack } from '../../constants';

const TechStack = () => {
    // useGSAP(() => {
    //     const sections = gsap.utils.toArray('.container');

    //     sections.forEach((section) => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: section,
    //                 start: 'top top',
    //                 end: '30% top',
    //                 scrub: 1.5,
    //                 pin: true,
    //                 pinSpacing: false,
    //                 // markers: true,
    //             },
    //         }).to(section, {
    //             opacity: 0,
    //             scale: .9,
    //             x: -200
    //         });
    //     });
    // }, [])
    return (
        <>
            <p className="text-center font-jost text-5xl my-20">My TECH STACKS</p>
            <div className='section'>
                {
                    techStack.map(stack => (
                        <section className="container mx-auto mt-20">
                            <div className="flex px-[5%] items-center h-full">
                                <div className='w-full'>
                                    <p className="text-4xl font-jost"> --- {stack.title}</p>
                                    <div className='flex flex-wrap justify-center lg:justify-start gap-8 lg:pl-[10%] mt-16'>
                                        {
                                            stack.elements.map(element => (
                                                <div className='soft-shadow p-8 max-w-3xs rounded-lg'>
                                                    <img src={element.img} width={44} height={44} className='w-11'/>
                                                    <p className='font-semibold text-xl font-open-sans mt-4'>{element.text}</p>
                                                    <p className='font-open-sans leading-7 text-[#7e7e7e]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam est ducimus quod quaerat adipisci excepturi rem nam aliquam unde mollitia!</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
        </>
    );
};

export default TechStack;