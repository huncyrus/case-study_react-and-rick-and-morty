import './Footer.css';

const Footer = () => {
    return (
        <footer
            className="footer bg-rum-swizzle-100 w-full shadow-[rgba(0,0,5,0.1)_0px_-3px_0px_0px]"
        >
            &copy; 2024 
            <a 
                href="https://www.bakonyi.info" 
                target="_blank"
                title="Györk Bakonyi personal website"
                className="no-underline hover:underline hover:underline-offset-4 hover:text-blue-500 not-italic hover:italic"
            >
                Györk Bakonyi
            </a>
        </footer>
    );
};

export default Footer;
