import Title from "../title"
import ContactLeft from "./contactLeft"
import ContactRight from "./contactRight"

function Contact() {
    return (
        // contact
        <section id="contact" className="relative  flex-center">
            <div className="container md:w-2/3 w-full max-w-6xl px-5 pb-10 mx-auto">
                {/* header */}
                <div className="text-center">
                    <Title title="contact" description="contact with me" />
                </div>

                {/* info contact */}
                <div className="md:relative flex flex-col gap-5 sm:max-w-full max-w-xs mt-12 mx-auto">
                    <ContactLeft />
                    <ContactRight />
                </div>
            </div>
        </section>
    )
}

export default Contact
