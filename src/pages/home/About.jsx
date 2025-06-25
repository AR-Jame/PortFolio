import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    useGSAP(() => {
        const sections = gsap.utils.toArray('.containerDiv section');
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".containerDiv",
                start: 'top top',
                pin: true,
                scrub: 1.5,
                end: "+=3000",
                // markers: true,
            }
        });
    }, [])
    return (
        <section className="overflow-x-hidden">
            <section className="containerDiv w-[300vw] flex bg-[#faf6f1]">
                <section className="h-screen w-screen flex justify-center items-center">
                    <div>
                        <p className="text-3xl md:text-6xl font-ubuntu mb-3 border-b-4 border-[#cacaca] pb-2 inline-block">Personal info</p>
                        <div className="text-xl md:text-2xl font-jost text-[#363636]">
                            <p> --- Name: Abdur Rahman</p>
                            <p> --- Age: 16</p>
                            <p> --- Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </section>
                <section className="h-screen w-screen flex justify-center items-center">
                    <div>
                        <p className="text-3xl md:text-6xl font-ubuntu mb-3 border-b-4 border-[#cacaca] pb-2 inline-block">Education</p>
                        <div className="text-xl md:text-2xl font-jost text-[#363636]">
                            <p> --- School/Madrasah: Tamirul Millat <br className="md:hidden" /> Kamil Madrasha</p>
                            <p> --- Class: 10</p>
                            <p> --- Language: Bangla | English | Arabic</p>
                        </div>
                    </div>
                </section>
                <section className="h-screen w-screen flex justify-center items-center">
                    <div className="md:px-[10%] px-[3%]">
                        <p className="text-3xl md:text-6xl font-ubuntu mb-3 border-b-4 border-[#cacaca] pb-2 inline-block">About Me</p>
                        <div className="text-xl md:text-2xl font-jost text-[#363636] ">
                            <p>
                                I'm a 16-year-old teenager who’s curious about how things work — especially on the web. I spend a lot of time learning web development and building cool projects, but I also enjoy reading, exploring creative ideas, and imagining the future I want to build.                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default About;