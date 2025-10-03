/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import aboutPhoto from '../../../public/Resources/Images/About.jpg';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div id="about" className="bg-[#101010] pt-7 pb-10 min-h-screen text-gray-50">
            <div ref={ref}>
                {inView ? (
                    <Fade delay={5} duration={1000}>
                        <h2 className="uppercase font-bold text-center font-roboto-slab text-4xl">About</h2>
                    </Fade>
                ) : (
                    <h2 className="uppercase text-center font-roboto-slab text-4xl">About</h2>
                )}
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center py-5">
                <div className="mb-4 md:mb-0 md:w-1/2 lg:w-2/5 px-10">
                    <img src={aboutPhoto} alt="About Me" className="w-full h-auto rounded-md shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-left md:text-left px-4">
                    <Fade delay={500} triggerOnce>
                        <div className="md:border-l-2 border-gray-50 px-10">
                            <p className="xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                Hey there! I'm Sai Venkatesh, a Data Engineer who loves working with big data and cloud technologies. By day, I'm
                                building scalable pipelines and optimizing systems to handle massive datasets, and by night, I’m always tinkering 
                                with new tools, exploring side projects, or diving deeper into the latest trends in data and tech.
                            </p>
                            <p className="mt-4 xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                With 3+ years of experience, I’ve worked across industries solving real-world problems whether it’s streamlining 
                                ETL processes, migrating legacy systems to the cloud, or bringing machine learning models into production. I enjoy 
                                using platforms like Databricks, Spark, Azure, Snowflake, and AWS to take complex challenges and turn them into 
                                simple, reliable, and impactful solutions.
                            </p>
                            <p className="mt-4 xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                Outside of code, I’m always up for learning something new, exploring new places, or getting lost in a 
                                good story whether that’s through movies, books, or a long walk outdoors. Curiosity fuels me, both in 
                                tech and in life, and I love connecting with people who share that same drive to build, explore, and create.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;





