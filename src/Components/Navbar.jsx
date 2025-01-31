import './Navbar.css'
const Navbar = ({handleNav}) => {

   
    // Array with capitalized link names
    const links = ['Welcome', 'Staff', 'Students', 'Courses'];

    return (
        <div>
            <nav className="myNav">
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <a href="#" onClick={(ev) => handleNav(ev, link)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;