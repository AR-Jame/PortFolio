import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { contact, contactCards } from "../../constants";

const Contact = () => {
    useGSAP(() => {
        gsap.from('.contact > div', {
            scale: 0.8,
            y: 200,
            stagger: 0.2,
            opacity: .5,
            scrollTrigger: {
                trigger: '.contact',
                // scrub: 1,
                start: 'top 90%',
                end: 'top center'
            }
        })
    }, [])
    return (
        <>
            <section className="pt-30 2xl:px-[10%] px-[5%]">
                <p className="text-center font-jost text-6xl my-20">Want To</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center auto-fill gap-12 contact">
                    {
                        contactCards.map(card => (
                            <div
                                className={`flex gap-7 flex-1/3 items-center lg:p-10 p-7 rounded-2xl ${card.scaling && 'scale-105'}`}
                                style={{ backgroundImage: `linear-gradient(${card.secondary}, ${card.ternary})` }}
                            >
                                <div className="font-jost">
                                    <p
                                        className="shadow-md inline-block px-9 rounded-full py-1 text-lg text-white"
                                        style={{ backgroundColor: card.primary }}
                                    >
                                        {card?.heading}
                                    </p>
                                    <p className="lg:text-3xl text-2xl font-ubuntu py-4">{card?.title}</p>
                                    <p className="lg:text-lg text-base text-[#474747]">{card?.body}</p>
                                </div>
                                <div>
                                    <img src={card?.image} width={500} height={500} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section >
            <section className="lg:px-[10%] px-[5%] pb-52 pt-10">
                <p className="text-center font-jost lg:text-6xl text-4xl my-16 pb-10">Let's Talk together</p>
                <div className="flex flex-col gap-7 lg:flex-row justify-around items-center">
                    <div className="font-jost">

                        {
                            contact.map(item => (
                                <div className="flex items-center gap-4">
                                    <img src={item?.image} width={50} />
                                    <p className="text-base lg:text-xl">{item?.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="h-20 w-0.5 bg-black hidden lg:block" />
                    <p className="text-xl font-jost lg:hidden">Or talk via</p>
                    <div className="flex gap-10">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61552245442048"><img className="hover:scale-90 cursor-pointer transition-all w-[70px]" src='/contact/Facebook.png' width={90} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/abdur-rahman-1a3495340"><img className="hover:scale-90 cursor-pointer transition-all w-[70px]" src='/contact/linkedin.png' width={90} /></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;