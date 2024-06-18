import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBorderAll, faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
    return (
        // about
        <section id="about" className="relative container grid place-items-center before:absolute before:top-0 before:dark:bg-heroDark before:bg-heroLight before:size-full before:start-1/2 before:transform before:-translate-x-1/2 before:bg-no-repeat before:z-[-1]">
            <div className="size-full max-w-6xl grid md:grid-cols-6 items-center justify-around pt-20">
                {/* info */}
                <div className="lg:col-span-2 md:col-span-3 md:text-left text-center sm:pl-2">
                    <div>
                        <h5 className="font-medium text-gray-600 dark:text-gray-200">Hi There !</h5>

                        <h1 className="relative sm:text-5xl text-4xl font-medium !leading-normal dark:text-white">
                            I'm <span className="text-primary">VyEoo</span>
                            <br />
                            Frontend Developer
                        </h1>

                        <button className="btn btn-filled mt-5">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Contact To Me
                        </button>

                        <button className="font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            See Portfolio
                        </button>
                    </div>

                    {/* desc */}
                    <div className="md:w-96 md:ml-auto flex mt-9 gap-2">
                        <FontAwesomeIcon icon={faBorderAll} />
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ab necessitatibus voluptatum nemo culpa est, veritatis ullam omnis delectus sed a qui ex? Ipsa dolorem ratione perferendis placeat, consectetur temporibus?
                        </p>
                    </div>

                    {/* socials */}
                    <div className="flex items-center md:justify-end gap-6 mt-9 text-gray-600 dark:text-gray-200">
                        <p>Follow Me</p>

                        <div className="flex justify-end items-center gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* img */}
                <div className="lg:col-span-2 md:col-span-3">
                    {/* <img src="md:w-full w-2/3 max-w-96 md:mt-0 mt-5 mx-auto" alt="" /> */}
                    {/* <p>Chua co hinh</p> */}
                </div>

                {/* info experience - project - download cv */}
                <div className="">
                    <ul className="lg:block md:flex items-center justify-between text-2xl text-center leading-[3.14rem] data-[slot=count]:*:text-3xl data-[slot=count]:*:font-bold lg:gap-10 md:gap-7 gap-10">
                        <li>
                            <li data-slot="count">12 +</li>
                            <li>Year of <span className="text-primary">Experience</span></li>
                        </li>
                        
                        <li>
                            <li data-slot="count">8 +</li>
                            <li>Completed <span className="text-primary">Project</span></li>
                        </li>

                        <li>
                            <button className="btn btn-outline">
                                <FontAwesomeIcon icon={faDownload} />
                                Download CV
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
