// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Navigation menu items
//   const navItems = [
//     { label: "Home", href: "#home" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
//       <div className="relative w-full h-20 px-4">
//         {/* Logo/Name section */}
//         <div 
//           className={`absolute left-[5%] top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
//             isScrolled 
//               ? 'opacity-0 -translate-y-8 pointer-events-none' 
//               : 'opacity-100 translate-y-0'
//           }`}
//         >
//           <div className="relative">
//             <div className="font-serif text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
//               Abdur
//             </div>
//             <div className="font-serif text-2xl md:text-3xl font-medium text-gray-900 leading-tight ml-4">
//               Rahman
//             </div>
//           </div>
//         </div>

//         {/* Navigation menu - always centered */}
//         <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div 
//             className={`transition-all duration-500 ease-in-out ${
//               isScrolled 
//                 ? 'bg-white/90 backdrop-blur-md shadow-lg' 
//                 : 'bg-white/70 backdrop-blur-sm'
//             } rounded-full px-6 py-3`}
//           >
//             <ul className="flex gap-2 md:gap-8">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={item.href}
//                     className="font-serif text-sm md:text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 px-3 py-2 rounded-full block"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Navigation menu items
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation - Original Layout */}
            <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
                <div className="relative w-full h-20 px-4">
                    {/* Logo/Name section */}
                    <div
                        className={`absolute left-[5%] top-1/4 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${isScrolled
                            ? 'opacity-0 -translate-y-8 pointer-events-none'
                            : 'opacity-100 translate-y-0'
                            }`}
                    >
                        <div className="relative">
                            <div className="font-serif text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                                Abdur
                            </div>
                            <div className="font-serif text-2xl md:text-3xl font-medium text-gray-900 leading-tight ml-4">
                                Rahman
                            </div>
                        </div>
                    </div>

                    {/* Navigation menu - always centered */}
                    <div className="absolute left-1/2 top-6/10 transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className={`transition-all duration-500 px-14 ease-in-out ${isScrolled
                                ? 'glass-bg'
                                : 'glass-bg'
                                } rounded-full px-6 py-3`}
                        >
                            <ul className="flex gap-10">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="font-serif text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 px-3 py-2 rounded-full block"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation - Stacked Layout */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
                {/* Logo section - Mobile */}
                <div
                    className={`absolute top-4 left-0 right-0 flex justify-center transition-all duration-500 ease-in-out ${isScrolled
                        ? 'opacity-0 -translate-y-8 pointer-events-none'
                        : 'opacity-100 translate-y-0'
                        }`}
                >
                    <div className="relative">
                        <div className="font-serif text-xl font-medium text-gray-900 leading-tight text-center">
                            &lt; Abdur Rahman / &gt;
                        </div>
                    </div>
                </div>

                {/* Navigation menu - Mobile */}
                <div className={`w-full flex justify-center pb-4 transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-16'
                    }`}>
                    <div
                        className={`transition-all duration-500 ease-in-out ${isScrolled
                            ? 'bg-white/90 backdrop-blur-md shadow-lg'
                            : 'bg-white/70 backdrop-blur-sm'
                            } rounded-full px-10 py-3`}
                    >
                        <ul className="flex gap-2">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="font-serif text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 px-2 py-1 rounded-full block"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;