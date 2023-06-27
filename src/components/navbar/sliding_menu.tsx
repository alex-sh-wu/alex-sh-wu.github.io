import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sliding_menu.module.css";
import clsx from "clsx";

interface SlidingMenuProps {
  hidden: boolean;
}

export default function SlidingMenu({ hidden }: SlidingMenuProps) {
  const pathname = usePathname();
  const isActive = (href: String): boolean => {
    return href === pathname;
  };
  return (
    <div className={clsx(styles.slidingMenu, { [styles.hidden]: hidden })}>
      <ul className={styles.options}>
        <li>
          <Link href="/" className={clsx({ [styles.active]: isActive("/") })}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/about-me"
            className={clsx({ [styles.active]: isActive("/about-me") })}
          >
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className={clsx({ [styles.active]: isActive("/resume") })}
          >
            RESUME
          </Link>
        </li>
        <li>
          <a href="https://github.com/alex-sh-wu">GITHUB</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexshwu">LINKEDIN</a>
        </li>
        <li>
          <Link
            href="/contact"
            className={clsx({ [styles.active]: isActive("/contact") })}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
