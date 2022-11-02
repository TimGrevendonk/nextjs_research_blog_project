// link is used for client side navigation, the Link tag replaces the <a> tags.
import Link from "next/link";

export default function navbar() {
    return (
      <>
      <nav className="navbar general">
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      </>
    );
}