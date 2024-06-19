import Grid from "../grid"
import Title from "../../title"

function Languages() {
    return (
        <>
            {/* Languages */}
            <div className="max-md:mb-12 last:mb-0">
                {/* title */}
                <Title title="Language" description=""/>

                {/* grid logo components */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_html5_cf637791b4.png" label="HTML5"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_css3_f0cc386fa1.png" label="CSS3"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_Java_Script_logo_ec01d0577d.png" label="Javascript"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_Typescript_logo_2020_svg_13c635e95c.png" label="Typescript"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_PHP_logo_svg_7def683005.png" label="PHP"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_cpp_9bde715005.png" label="C++"/>
                </div>
            </div>
        </>
    )
}

export default Languages
