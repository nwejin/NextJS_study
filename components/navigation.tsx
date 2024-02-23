"use client";  // 클라이언트 컴포넌트

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "../styles/navigation.module.css"


export default function Navigation() {
    const path = usePathname(); // 현재 어떤 path(경로)에 있는지 알려주는 usePathname
    console.log(path)
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? " 🔥" : ""}
                </li>
                <li>
                     <Link href="/about-us">About Us</Link>
                      {path === "/about-us" ? " 🔥" : ""}
                     </li>
            </ul>
        </nav>
    )
}