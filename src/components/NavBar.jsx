const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current">
              <path
                d="M9.96 2.28c1.39 2.7 2.13 5.07 1.81 7.61-.35 2.71-2.34 4.8-2.35 4.8-.04.04-.06.1-.06.17 0 .09.07.17.16.17.02 0 .03 0 .05-.01 1.9-.45 3.14-1.83 3.85-3.05.8-1.37 1.09-2.61 1.26-3.6a10.8 10.8 0 0 0 .13-2.25c1.13 1.1 1.96 2.45 2.46 3.91.64 1.86.8 4.13-.12 6.27-1.06 2.44-3.42 4.12-6.05 4.2-2.02.07-3.67-.66-4.83-1.88a6.5 6.5 0 0 1-1.7-5.99c.55-2.68 3.15-5.5 5.39-10.15Z"
                fill="rgb(227, 69, 20)"
              />
            </svg>DevTinder</a>
        </div>
        <div className="flex-none gap-2">

          <div className="dropdown dropdown-end px-5">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a href="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;