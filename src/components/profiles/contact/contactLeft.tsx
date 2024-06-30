import { useEffect, useState } from "react"

function ContactLeft() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener("resize", handleResize)
        return() => { window.removeEventListener("resize", handleResize) }
    }, [])

    return (
        // contactLeft
        <div className="w-full dark:bg-slate-800 bg-slate-50 dark:text-gray-100 text-gray-800 rounded-lg shadow-xl mx-auto py-14 px-7">
            <h3 className="font-semibold text-3xl">
                Send Us A
                {isMobile ? " " : <br /> }
                
                <span className="text-primary">Message</span>
            </h3>

            <form className="md:w-2/3 *:flex *:flex-col *:gap-1 mt-5">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Enter your message" />
                </div>

                <button className="btn btn-filled ml-auto">Send To Us</button>
            </form>
        </div>
    )
}

export default ContactLeft
