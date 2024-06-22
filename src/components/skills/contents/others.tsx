import Grid from "../grid"
import Title from "../../title"

function Others() {
    return (
        <>
            {/* Others */}
            <div className="max-md:mb-12 last:mb-0">
                {/* title */}
                <Title title="Others" description="" />

                {/* grid logo components */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
                    <Grid imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" label="VS Code"/>
                    <Grid imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/48px-Figma-logo.svg.png?20190122211436" label="Figma"/>
                    <Grid imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/64px-GitHub_Invertocat_Logo.svg.png?20230417032619" label="Github"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/gitlab_logo_500_7e39cf9a9f.svg" label="Gitlab"/>
                </div>
            </div>
        </>
    )
}

export default Others
