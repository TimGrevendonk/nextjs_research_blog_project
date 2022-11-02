import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
        <ul>
        <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
}