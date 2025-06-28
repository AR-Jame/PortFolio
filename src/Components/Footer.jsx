const Footer = () => {
    return (
        <div className="pt-80 pb-4 rounded-t-[70px] bg-[#fffef4] font-jost text-center px-[10%]">
            <p className="text-4xl mb-72">Thank you for giving me your time — it really means a lot to me.</p>
            <div className="flex items-center justify-center gap-5">
                <a href=""><img src='/footer/Github.svg' width={35} /></a>
                <a href=""><img src='/footer/Facebook.svg' width={35} /></a>
                <a href=""><img src='/footer/LinkedIn.svg' width={35} /></a>
            </div>
            <hr className="mb-8 mt-4" />
            <p>Designed & Developed by Abdur Rahman</p>
            <p>© 2025 All Rights Reserved.</p>
        </div>
    );
};

export default Footer;