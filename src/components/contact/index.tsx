import Title from "../title"
import ContactLeft from "./contactLeft"
import ContactRight from "./contactRight"

function Contact() {
    return (
        // contact
        <section id="contact" className="container relative max-w-4xl mx-auto min-h-screen flex-center px-5">
            <div className="w-2/3 pb-10">
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
