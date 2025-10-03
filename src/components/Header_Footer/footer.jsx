import instagram from '../../../public/Resources/Logo/contact/instagram.svg';
import gmail from '../../../public/Resources/Logo/contact/gmail.svg';
import linkedin from '../../../public/Resources/Logo/contact/linkedin.svg';
import github from '../../../public/Resources/Logo/contact/github.svg';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <footer className="bg-[url('../public/Resources/Images/footer-bg.png')] text-white p-5">
            <Fade delay={200}>
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className="text-xl font-poppins font-semibold">Sai Venkatesh Aravapalli</h2>
                    <h4 className="text-md mb-4 font-roboto-slab">Data Engineer</h4>
                    <div className='flex flex-row justify-center items-center space-x-6 mb-4'>
                        <a href="https://www.instagram.com/s_venkatesh_a?igsh=MXA2OWltdGo2dmhuag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className='h-8 w-8' />
                        </a>
                        <a href="www.linkedin.com/in/sai-venkatesh-aravapalli-15b253190" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className='h-8 w-8' />
                        </a>
                        <a href="https://github.com/SAIVENKATESH1409" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className='h-8 w-8' />
                        </a>
                        <a href="mailto:sai.venkatesh1409@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={gmail} alt="Gmail" className='h-8 w-8' />
                        </a>
                    </div>
                    <div className="text-sm">
                        © {new Date().getFullYear()} Sai Venkatesh Aravapalli. All Rights Reserved.
                    </div>
                </div>
            </Fade>
        </footer>
    );
}

export default Footer;


