import Grid from "../grid"
import Title from "../../title"

function Frameworks() {
    return (
        <>
            {/* Frameworks */}
            <div className="max-md:mb-12 last:mb-0">
                {/* title */}
                <Title title="Frameworks" description="" />

                {/* grid logo components */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/React_icon_3fbc10a062.svg" label="React"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/Tailwind_CSS_Logo_f2f2137d87.svg" label="Tailwind CSS"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_Vue_1628d24640.png" label="Vue"/>
                </div>
            </div>
        </>
    )
}

export default Frameworks
