import Link from "next/link";
import styles from "../../styles/Header.module.css";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-gray-300 sticky top-0 z-50">
      <nav className={styles.navbar}>
        <div className="flex justify-between items-center px-4 h-[70px] md:h-auto">
          <div className={styles.logo}>
            Pro<span className="text-purple-500">Blogs</span>{" "}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden font-bold text-4xl hover:text-purple-500 duration-500"
          >
            {!open ? <IoMenu /> : <IoClose />}
          </div>
        </div>
        <ul
          onClick={() => setOpen(!open)}
          className={`flex md:flex-row flex-col md:items-center md:justify-center gap-5 font-semibold uppercase absolute md:static top-[70px] md:top-auto bg-slate-500 md:bg-transparent w-[70%] md:w-auto h-[89.6vh] duration-700 md:h-auto ${
            open ? "left-0" : "-left-[100%]"
          }`}
        >
          <lis className="hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 ">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </lis>
          <li className="hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 ">
            <Link href={"/"}>
              <a>About</a>
            </Link>
          </li>
          <li className="hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 ">
            <Link href={"/"}>
              <a>Blog</a>
            </Link>
          </li>
          <li className="hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 ">
            <Link href={"/"}>
              <a>Contact</a>
            </Link>
          </li>
          <li className="hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 ">
            <Link href={"/"}>
              <a>FAQ</a>
            </Link>
          </li>
          <li className="icon flex gap-5 items-center md:hidden py-2 px-4 md:px-0 md:py-0">
            <Link href={"/"}>
              <a className="text-2xl font-bold duration-700 hover:text-blue-600">
                <TiSocialFacebook />
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-2xl font-bold duration-700 hover:text-rose-600">
                <TiSocialYoutube />
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-2xl font-bold duration-700 hover:text-rose-500">
                <TiSocialInstagram />
              </a>
            </Link>
          </li>
        </ul>

        <div className="icon md:flex gap-5 items-center hidden">
          <Link href={"/"}>
            <a className="text-2xl font-bold duration-700 hover:text-blue-600">
              <TiSocialFacebook />
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-2xl font-bold duration-700 hover:text-rose-600">
              <TiSocialYoutube />
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-2xl font-bold duration-700 hover:text-rose-500">
              <TiSocialInstagram />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
