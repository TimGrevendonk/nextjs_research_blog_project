// link is used for client side navigation, the Link tag replaces the <a> tags.
import Link from "next/link";
import ThemeSwitch from "./themeswitch";

export default function navbar() {
    return (
      <>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <ThemeSwitch />
      </nav>
      </>
    );
}