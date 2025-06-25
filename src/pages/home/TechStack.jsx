import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { techStack } from '../../constants';

const TechStack = () => {
    useGSAP(() => {
        const sections = gsap.utils.toArray('.container');

        sections.forEach((section) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '30% top',
                    scrub: 1.5,
                    pin: true,
                    pinSpacing: false,
                    // markers: true,
                },
            }).to(section, {
                opacity: 0,
                scale: .9,
                x: -200
            });
        });
    }, [])
    return (
        <>
            <p className="text-center font-jost text-5xl my-20">My TECH STACKS</p>
            <div className='section'>
                {
                    techStack.map(stack => (
                        <section className="container mx-auto h-[70vh]">
                            <div className="flex px-[10%] items-center h-full">
                                <div className='w-full'>
                                    <p className="text-4xl font-jost"> --- {stack.title}</p>
                                    <div className='flex flex-wrap justify-center lg:justify-start gap-8 lg:pl-[10%] mt-16'>
                                        {
                                            stack.elements.map(element => (
                                                <div className='flex flex-col items-center justify-center'>
                                                    <img src={element.img} width={90} className='w-20 md:w-[70px] lg:w-[90px]'/>
                                                    <p>{element.text}</p>
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