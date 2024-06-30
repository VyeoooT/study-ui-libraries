// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'
import { navLinks } from '../../../constants'
import assets from '../../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

function Header() {
    interface HeaderType {
        _id: number;
        title: string;
        link: string;
    }

    // toggle navigation mobile
    const [isMenu, setIsMenu] = useState(false)
    const [isIconBar, setIsIconBar] = useState(faBars)
    const [isBlur, setIsBlur] = useState(false)

    const toggleMenu = () => {
        setIsMenu(!isMenu)
        setIsBlur(!isBlur)
        isIconBar === faBars ? setIsIconBar(faXmark) : setIsIconBar(faBars)
    }

    const closeMenu = () => {
        setIsMenu(false)
        setIsBlur(false)
        setIsIconBar(faBars)
    }

    // click link & click outside close menu
    const menuRef = useRef<HTMLUListElement>(null)
    const outsideRef = useRef<HTMLButtonElement>(null)

    const outSide = (e: MouseEvent) => {
        if (outsideRef.current && !outsideRef.current.contains(e.target as Node) && 
            menuRef.current && !menuRef.current.contains(e.target as Node))
        {
            closeMenu()
        }
    }

    const itemMenu = (e: MouseEvent) => {
        const target = e.target as HTMLElement

        if (target.tagName === 'A') {
            closeMenu()
        }
    }

    useEffect(() => {
        document.addEventListener("click", outSide, true)

        if (menuRef.current) {
            menuRef.current.addEventListener("click", itemMenu, true)
        }

        return () => {
            document.removeEventListener("click", outSide, true)

            if (menuRef.current) {
                menuRef.current.removeEventListener("click", itemMenu, true)
            }
        }
    })

    // switch theme
    const [isDark, setIsDark] = useState(false)

    const switchTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        if (newTheme) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }

    useEffect(() => {
        const getTheme = localStorage.getItem("theme")

        if (getTheme === "dark") {
            document.documentElement.classList.add("dark")
            setIsDark(true)
        }

        return () => {
            document.documentElement.classList.remove("dark")
            setIsDark(false)
        }
    })

    return (
        <>
            {/* blur - background */}
            <div className={`fixed h-screen bg-black/10 backdrop-blur-sm inset-0 z-[997] ${isBlur ? "block" : "hidden"} duration-300`}></div>

            {/* desktop navigation */}
            <header className="fixed w-full lg:px-0 bg-white dark:text-white dark:bg-slate-800 shadow-lg dark:sm:bg-slate-900 px-5 py-4 z-[999]">
                {/* navigation */}
                <nav className="flex justify-between items-center max-w-6xl mx-auto px-2">
                    {/* logo */}
                    <div className="lg:w-[3%] md:w-[4%] sm:w-[4%] w-[8%]">
                        <img src={assets.logo} alt="" />
                    </div>

                    <ul className="md:flex hidden gap-10 *:cursor-pointer hover:*:text-primary *:duration-300">
                        {navLinks.header.map((item: HeaderType) => (
                            <li key={item._id}>
                                <Link
                                    // activeClass='active'
                                    to={item.link}
                                    // spy={true}
                                    // smooth={true}
                                    // offset={-50}
                                    // duration={700}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}

                        {/* dark theme icon */}
                        <button onClick={switchTheme}>
                            <FontAwesomeIcon icon={faCircleHalfStroke} />
                        </button>
                    </ul>

                    {/* icon darkmode - open menu mobile */}
                    <div className="md:hidden flex items-center gap-7">
                        <button className="size-5" onClick={switchTheme}>
                            <FontAwesomeIcon icon={faCircleHalfStroke} size="xl" />
                        </button>

                        <button ref={outsideRef} className="size-5" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isIconBar} size="xl" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* mobile - navigation */}
            <header className="md:hidden">
                <ul ref={menuRef} className={`w-full fixed bottom-0 left-0 flex-center flex-col gap-10 z-[998] text-xl text-white dark:bg-slate-800 bg-primary rounded-t-3xl py-8 overflow-hidden duration-300 ${isMenu ? "translate-y-0 opacity-100" : "translate-y-96 opacity-50"}`}>
                    {navLinks.header.map((item: HeaderType) => (
                        <li key={item._id}>
                            <Link
                                // activeClass='active'
                                to={item.link}
                                // spy
                                // smooth
                                // offset={-50}
                                // duration={700}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    )
}

export default Header
