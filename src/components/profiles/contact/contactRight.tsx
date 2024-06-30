import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactRight() {
    return (
        // contactRight
        <div className=" md:absolute lg:-right-52 right-28 top-28 md:w-2/3 w-full h-5/6 dark:bg-gray-700 bg-white rounded-xl shadow-xl py-12 px-7 mx-auto">
            {/* header */}
            <h3 className="font-semibold text-2xl border-b pb-4 border-gray-600">
                Drop In Our
                <br />

                Office <span className="text-primary">.</span>
            </h3>

            <div className="py-4">
                {/* desc info */}
                <p className="text-xs text-gray-400 leading-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sit asperiores dignissimos numquam necessitatibus nobis inventore.
                </p>

                {/* address */}
                <ul className="*:flex *:items-center *:gap-4 *:mt-4">
                    <li>
                        <FontAwesomeIcon icon={faLocationDot} />

                        <div>
                            <h2>Ho Chi Mini City</h2>
                            <address>Go Vap</address>
                        </div>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>vlinh52000@gmail.com</p>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+123 456 7890</p>
                    </li>
                </ul>

                {/* follow us */}
                <div className="flex items-center md:justify-end justify-center mt-9 gap-6 dark:text-gray-200 text-gray-600">
                    <p>Follow Us</p>

                    <div className="flex justify-end gap-3">
                        <a className="social-icon" href="#">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="social-icon" href="#">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="social-icon" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactRight
