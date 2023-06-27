"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import SlidingMenu from "./sliding_menu";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [hideMenu, setHideMenu] = useState(true);
  return (
    <>
      <div className={clsx(styles.navBar, styles.header)}>
        <Image
          src="/nextjs-github-pages/burger_menu.png"
          alt="burger menu"
          className={styles.burgerMenuIcon}
          width={40}
          height={40}
          onClick={() => setHideMenu(!hideMenu)}
          priority
        />
        <div className={styles.vl}></div>
        <Link className={styles.personName} href="/">
          <b>
            Alex<span className={styles.middleName}> Sin Hang</span> Wu
          </b>
        </Link>
      </div>
      <SlidingMenu hidden={hideMenu} />
    </>
  );
}
