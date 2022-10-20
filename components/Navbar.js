import Link from "next/link";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>홈 </a>
        </Link>
        <Link href="/about">
          <a>사이트에 대해서</a>
        </Link>
        <Link href="/profile">
          <a>본인 소개</a>
        </Link>
        <Link href="/coins">
          <a>코인</a>
        </Link>
        <Link href="/profile/contact">
          <a>연락</a>
        </Link>
      </div>
    </div>
  );
}
