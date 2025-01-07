import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 bg-darkBlue opacity-60">
      <div className="flex-1">
        <a className="btn btn-ghost text-white text-xl">MoviesApp</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <a>Latest Shows</a>
          </li>
          <li>
            <a>Favorites</a>
          </li>
          <li>
            <a>Top Rated</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
