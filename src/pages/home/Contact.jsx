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
            <section className="pt-30 px-[10%]">
                <p className="text-center font-jost text-6xl my-20">Want To</p>
                <div className="flex gap-12 contact">
                    {
                        contactCards.map(card => (
                            <div
                                className={`flex gap-7 flex-1/3 items-center p-10 rounded-2xl`}
                                style={{ backgroundImage: `linear-gradient(${card.secondary}, ${card.ternary})` }}
                            >
                                <div className="font-jost">
                                    <p
                                        className="shadow-md inline-block px-9 rounded-full py-1 text-lg text-white"
                                        style={{ backgroundColor: card.primary }}
                                    >
                                        {card?.heading}
                                    </p>
                                    <p className="text-3xl font-ubuntu py-4">{card?.title}</p>
                                    <p className="text-xl text-[#474747]">{card?.body}</p>
                                </div>
                                <div>
                                    <img src={card?.image} width={500} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section >
            <section className="px-[10%] pb-52 pt-10">
                <p className="text-center font-jost text-6xl my-16 pb-10">Let's Talk together</p>
                <div className="flex justify-around">
                    <div className="font-jost">

                        {
                            contact.map(item => (
                                <div className="flex items-center gap-4">
                                    <img src={item?.image} width={50} />
                                    <p className="text-xl">{item?.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="h-24 w-0.5 bg-black" />
                    <div className="flex gap-5">
                        <img className="hover:scale-90 cursor-pointer transition-all" src='/contact/Facebook.png' width={100} />
                        <img className="hover:scale-90 cursor-pointer transition-all" src='/contact/linkedin.png' width={100} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;