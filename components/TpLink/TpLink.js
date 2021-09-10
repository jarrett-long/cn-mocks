import Link from "next/link";
import styles from "./link.module.css";

export default function TpLink({ href, children }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
}
