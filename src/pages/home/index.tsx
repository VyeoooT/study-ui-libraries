import { NavLink } from "react-router-dom"

function HomeIntro() {

    return (
        // root/intro select button
        <div className="h-svh flex justify-center items-center gap-5 bg-linear-custom">
            <NavLink to={'/profile-person'}>
                <button className="text-lg font-poppins font-bold text-primary min-w-12 min-h-14 px-6 bg-fourth border-2 border-fourth rounded-full hover:bg-transparent hover:text-amber-600">
                    Profile Person
                </button>
            </NavLink>

            <NavLink to={'/ui'}>
                <button className="text-lg font-poppins font-bold text-primary min-w-12 min-h-14 px-6 bg-fourth border-2 border-fourth rounded-full hover:bg-transparent hover:text-amber-600">
                    UI Library Page
                </button>
            </NavLink>
        </div>
    )
}

export default HomeIntro
