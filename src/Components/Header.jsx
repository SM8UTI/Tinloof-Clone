import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import aboutPeople from "../assets/aboutPeople.svg";
import makeImpact from "../assets/makeImpact.svg";

import { AiTwotoneHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <header className="sticky relative top-0 left-0 border-b-2 border-black flex flex-row items-center justify-between p-2 bg-orange gap-4">
      <button
        className="sm:hidden text-3xl font-semibold"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <MdOutlineClose /> : <MdMenu />}
      </button>
      <div className={menu ? "nav-menu active relative" : "nav-menu relative"}>
        <img
          src={aboutPeople}
          className="absolute inline-block w-[80px] sm:hidden bottom-20 left-2"
        />
        <img
          src={makeImpact}
          className="absolute inline-block w-[80px] sm:hidden bottom-20 left-20 rotate-[-26deg]"
        />
        <ul className="nav sm:flex sm:flex-row items-center sm:gap-4 sm:text-xl font-primary font-semibold mb-24 sm:mb-0">
          <li>
            <Link to={"/Store"}>Shop</Link>
          </li>
          <li>
            <Link to={"/News"}>News</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="logo flex-1 flex sm:place-content-center ">
        <img
          src={logo}
          alt="logo"
          className="flex-shrink-0 max-w-[60px] sm:max-w-[120px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <ul className="nav flex flex-row items-center gap-4 text-2xl w-[200px] justify-end">
        <li>
          <Link to={"/Wishlist"}>
            <AiTwotoneHeart />
          </Link>
        </li>
        <li>
          <button>
            <FaShoppingCart />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
