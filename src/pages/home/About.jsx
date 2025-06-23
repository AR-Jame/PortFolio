import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    useGSAP(() => {
        const sections = gsap.utils.toArray('.containerDiv section');
        const scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".containerDiv",
                start: 'top top',
                pin: true,
                scrub: 1,
                end: "+=3000",
                //snap: 1 / (sections.length - 1),
                markers: true,
            }
        });


    }, [])
    return (
        <section className="overflow-x-hidden">
            <section className="containerDiv w-[300vw] flex">
                <section className="h-screen w-screen flex justify-center items-center">
                    <div>
                        <p className="text-6xl font-jost">Personal info</p>
                        <div className="text-2xl">
                            <p>Name: Abdur Rahman</p>
                            <p>Age: 16</p>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </section>
                <section className="h-screen w-screen flex justify-center items-center">
                    <div>
                        <p className="text-6xl font-jost">Personal info</p>
                        <p className="text-2xl font-ubuntu text-[#363636]">Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. <br /> adipisicing elit. Natus veniam quisquam sequi, obcaecati fugiat non.</p>
                    </div>
                </section>
                <section className="h-screen w-screen flex justify-center items-center">
                    <div>
                        <p className="text-6xl font-jost">Personal info</p>
                        <p className="text-2xl font-ubuntu text-[#363636]">Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. <br /> adipisicing elit. Natus veniam quisquam sequi, obcaecati fugiat non.</p>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default About;