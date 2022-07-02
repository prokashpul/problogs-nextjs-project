import Link from "next/link";
import styles from "../../styles/Header.module.css";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

const Header = () => {
  return (
    <header className="bg-gray-300">
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          Pro<span className="text-purple-500">Blogs</span>{" "}
        </div>
        <ul className="flex items-center justify-center gap-5 font-semibold uppercase">
          <li className="hover:text-purple-500 duration-700">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="hover:text-purple-500 duration-700">
            <Link href={"/"}>
              <a>About</a>
            </Link>
          </li>
          <li className="hover:text-purple-500 duration-700">
            <Link href={"/"}>
              <a>Blog</a>
            </Link>
          </li>
          <li className="hover:text-purple-500 duration-700">
            <Link href={"/"}>
              <a>Contact</a>
            </Link>
          </li>
          <li className="hover:text-purple-500 duration-700">
            <Link href={"/"}>
              <a>FAQ</a>
            </Link>
          </li>
        </ul>

        <div className="icon flex gap-5 items-center">
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
