
const Nav = () => {
    return (
        <div>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Listed Books</a></li>
      <li><a>Pages to Read</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Nav;