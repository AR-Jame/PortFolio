import { useGSAP } from '@gsap/react';
import codeBox from '../../assets/bracket(1).png'
import bracket from '../../assets/bracket.png'
import Button from '../../Components/button/Button';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
// import room from '/room.png'
// import roomWhite from '/room white.png'
// import roomFianl from '/room final.png'
// import roomWood from '/wood edit.jpg'
const Hero = () => {

    useGSAP(() => {
        // gsap.from('.intro', {
        //     y: 40,
        //     opacity: 0,
        //     stagger: .4,
        //     ease: 'power1.out'
        // });

        // const mainHead = SplitText.create('.mainHead', { type: 'chars' })

        // gsap.from(mainHead.chars, {
        //     duration: 0.2,
        //     y: 50,       // animate from 100px below
        //     autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        //     stagger: 0.05,
        //     ease: 'expo.out' // 0.05 seconds between each
        // });


        const mainHead = new SplitText('.mainHead', { type: 'words' });
        const welcome = new SplitText('.welcome', { type: 'chars' });

        gsap.from(mainHead.words, {
            x: 60,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.3,
            autoAlpha: 0,
            opacity: 0
        })

        gsap.from(welcome.chars, {
            stagger: 0.1,
            // autoAlpha: 0,
            opacity: 0,
            delay: 1,
            ease: 'bounce.in' //TODO: change the ease method
        })

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
            className="h-screen bg-[#F5F2FF] bg-no-repeat font-jost relative xl:px-[15%] px-[5%] hero-bg"

        >
            <div className='flex justify-between items-center h-full'>
                <div className='relative'>
                    <h1 className='text-2xl intro pb-5 lg:pb-2'>hi, I am Abdur Rahman -------</h1>
                    <path stroke="#000" id='svgPath' d="M116.5 347C4.887 256.672-18.193 181.445 15 1" />
                    <img id='bracket' src={bracket} width={150} className='absolute -top-28 -left-22 -rotate-[30deg] opacity-60' alt="Code Block" />
                    <h2 className='text-7xl font-medium pb-8 intro text-[#414040] mainHead'><span className='text-[#AB9FF2]'>Full</span> Stack <br /> Web Developer</h2>
                    <div className='flex gap-4 intro'>
                        <Button>DOWNLOAD RESUME</Button>
                        <a href="https://github.com/AR-Jame" target='_blank'><Button>VIEW ON GITHUB</Button></a>

                    </div>
                </div>
                <div className='hidden lg:block codeBlock'>
                    <img src={codeBox} alt="Code Block" className='rotate-y-180 opacity-85 pb-1' />
                    <img src={codeBox} alt="Code Block" className='rotate-y-180 opacity-85 pb-1' />

                </div>
            </div>
            <p className='absolute top-[90%] right-[5%] text-2xl lg:text-4xl welcome'>Welcome to my desk ......</p>
        </section>
    );
};

export default Hero;



/**
 * 
 * <svg xmlns="http://www.w3.org/2000/svg" width="421" height="663" fill="none"><path stroke="#000" d="M390.899 633.137S70.405 795.789 7.237 343.739c-63.167-452.05 412.905-326.57 412.905-326.57"/></svg>
 * **/ 