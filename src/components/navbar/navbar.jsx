import React from "react";
import Link from "next/link";
import styles from "../../app/page.module.css";
const Navbar = () => {
  return (
    <>

      <div className={styles.navlist}>

        <ul className={styles.unorderedlist}>
          <li>
            <Link href="/about" style={{textDecoration: 'none'}}>
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/work" style={{textDecoration: 'none'}}>
              <p>Work</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" style={{textDecoration: 'none'}}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>

      </div>
      <div className={styles.navline}></div>
    </>
  );
};

export default Navbar;