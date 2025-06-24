import { useGSAP } from '@gsap/react';
import codeBox from '../../assets/bracket(1).png'
import bracket from '../../assets/bracket.png'
import Button from '../../Components/button/Button';
import gsap from 'gsap';
const Hero = () => {

    useGSAP(() => {
        gsap.from('.intro', {
            y: 40,
            opacity: 0,
            stagger: .4,
            ease: 'power1.out'
        });
        gsap.from('#bracket', {
            motionPath: {
                path: '#svgPath',
                start: 1,
                end: 0
            },
            duration: 1.5,
            opacity: 0,
            delay: 0.5,
            ease: 'expo.inOut'
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: 'section',
                start: '20% 20%',
                scrub: 1.5,
            }
        })
            .to('.intro', {
                y: 100,
                x: 80,
                scale: 0.9,
                opacity: 0.01,
                scrub: 1
            })
            .to('.codeBlock', {
                y: 100,
                x: -80,
                opacity: 0,
                scale: .7,
            })

    }, [])

    return (
        <section
            id='home'
            className="h-screen bg-[#F5F2FF] bg-no-repeat font-jost relative xl:px-[10%] px-[5%] hero-bg"

        >
            <div className='flex justify-between items-center h-full'>
                <div className='relative'>
                    <h1 className='text-2xl intro pb-5 lg:pb-0'>hi, I am Abdur Rahman -------</h1>
                    <path stroke="#000" id='svgPath' d="M116.5 347C4.887 256.672-18.193 181.445 15 1" />
                    <img id='bracket' src={bracket} width={150} className='absolute -top-28 -left-22 -rotate-[30deg] opacity-60' alt="Code Block" />
                    <h2 className='text-4xl pb-8 intro'><span className='text-[#AB9FF2]'>MERN</span> Stack Web Developer</h2>
                    <div className='flex gap-4 intro'>
                        <Button>DOWNLOAD RESUME</Button>
                        <Button>VIEW ON GITHUB</Button>
                    </div>
                </div>
                <div className='hidden lg:block codeBlock'>
                    <img src={codeBox} alt="Code Block" className='rotate-y-180 opacity-70 pb-1' />
                    <img src={codeBox} alt="Code Block" className='rotate-y-180 opacity-70' />

                </div>
            </div>
            <p className='absolute top-[90%] right-[5%] text-2xl'>Welcome to my desk ......</p>
        </section>
    );
};

export default Hero;



/**
 * 
 * <svg xmlns="http://www.w3.org/2000/svg" width="421" height="663" fill="none"><path stroke="#000" d="M390.899 633.137S70.405 795.789 7.237 343.739c-63.167-452.05 412.905-326.57 412.905-326.57"/></svg>
 * **/ 