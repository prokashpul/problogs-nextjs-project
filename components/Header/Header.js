import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { useRouter } from "next/router";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="bg-gray-300 z-50 shrink-0">
      <nav className={styles.navbar}>
        <div className="flex justify-between items-center px-4 h-[70px] md:h-auto shrink-1">
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
          className={styles.navul + ` ${open ? "left-0" : "-left-[100%]"}`}
        >
          <li
            className={`${
              router.pathname === "/" && "text-purple-500"
            } hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 `}
          >
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname === "/about" && "text-purple-500"
            } hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 `}
          >
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname === "/blogs" && "text-purple-500"
            } hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 `}
          >
            <Link href={"/blogs"}>
              <a>Blog</a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname === "/contact" && "text-purple-500"
            } hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 `}
          >
            <Link href={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname === "/faq" && "text-purple-500"
            } hover:text-purple-500 duration-700 py-2 px-4 md:px-0 md:py-0 `}
          >
            <Link href={"/faq"}>
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
