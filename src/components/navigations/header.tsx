import { Link } from 'react-scroll'
import { navLinks } from '../../constants'
import logo from '../../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

function Header() {
    interface HeaderType {
        _id: number;
        title: string;
        link: string;
    }

    // interface NavLinks {
    //     logo: string
    //     header: HeaderType[]
    //     footer: any
    // }

    return (
        // Header
        <header>
            <nav>
                {/* logo */}
                <div>
                    <img src={logo} alt="" />
                </div>

                {/* desktop navigation */}
                <ul>
                    {navLinks.header.map((item: HeaderType) => (
                        <li key={item._id}>
                            <Link
                                activeClass='active'
                                to={item.link}
                                spy
                                smooth
                                offset={-50}
                                duration={700}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* dark theme icon */}
                <button>
                    <FontAwesomeIcon icon={faCircleHalfStroke} />
                </button>
            </nav>
        </header>
    )
}

export default Header
