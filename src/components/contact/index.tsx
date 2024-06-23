import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../title"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faMap, faMapPin, faPenNib, faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Contact() {
    const [isHover, setIsHover] = useState({
        email: false,
        call: false,
        address: false
    })

    const handleMouseEnter = (key: string) => {
        setIsHover(prevHover => ({
            ...prevHover,
            [key]: true
        }))
    }

    const handleMouseLeave = (key: string) => {
        setIsHover(prevHover => ({
            ...prevHover,
            [key]: false
        }))
    }

    return (
        // contact
        <section id="contact">
            <div className="container max-w-6xl px-5 pb-10 mx-auto">
                {/* header */}
                <div className="text-center">
                    <Title title="contact" description="contact with me" />
                </div>

                {/* info contact */}
                <div className="flex sm:flex-row flex-col sm:justify-around justify-center max-sm:gap-10 sm:pt-5">
                    {/* email */}
                    <div className="group">
                        <a
                            className="flex flex-col items-center"
                            href="mailto:vlinh52000@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => handleMouseEnter('email')}
                            onMouseLeave={() => handleMouseLeave('email')}
                        >
                            <div className="bg-circle-contact">
                                <FontAwesomeIcon className="group-hover:text-white mb-2" icon={isHover.email ? faPenNib : faEnvelope} size="5x" />
                            </div>

                            <span className="text-lg">vlinh52000@gmail.com</span>
                        </a>
                    </div>

                    {/* call */}
                    <div className="group">
                        <a
                            className="flex flex-col items-center"
                            href="tell:+84 365 037 985"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => handleMouseEnter('call')}
                            onMouseLeave={() => handleMouseLeave('call')}
                        >
                            <div className="bg-circle-contact">
                                <FontAwesomeIcon className="group-hover:text-white mb-2" icon={isHover.call ? faPhoneVolume : faPhone} size="5x" />
                            </div>

                            <span className="text-lg">+84 365 037 985</span>
                        </a>
                    </div>

                    {/* address */}
                    <div className="group">
                        <a
                            className="flex flex-col items-center"
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => handleMouseEnter('address')}
                            onMouseLeave={() => handleMouseLeave('address')}
                        >
                            <div className="bg-circle-contact">
                                <FontAwesomeIcon className="group-hover:text-white mb-2" icon={isHover.address ? faMapPin : faMap} size="5x" />
                            </div>

                            <span className="text-lg capitalize">get map</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
