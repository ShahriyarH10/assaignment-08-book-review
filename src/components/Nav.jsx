import { Link, NavLink } from "react-router-dom";

const Nav = () => {


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}><a>Home</a></NavLink>

                            <NavLink to='/listed-books' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}><a>Listing Books</a></NavLink>

                            <NavLink to='/pages-to-read' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}><a>Pages to Read</a></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Review</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10">
                        <Link to='/'><a>Home</a></Link>
                        <Link to='/listed-books'><a>Listing Books</a></Link>
                        <Link to='/pages-to-read'><a>Pages to Read</a></Link>
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    <a className="btn bg-green-500">Sign up</a>
                    <a className="btn bg-green-500">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;