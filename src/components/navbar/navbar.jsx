import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.main} ${isScrolled ? styles.scrolled : ""}`}>
      <ul className={styles.mainUL}>
        <li>
          <Link href="/about">
            <motion.p whileHover={{ scale: 1.1 }}>About</motion.p>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <motion.p whileHover={{ scale: 1.1 }}>Work</motion.p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <motion.p whileHover={{ scale: 1.1 }}>Contact</motion.p>
          </Link>
        </li>
      </ul>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <li>
            <Link href="/about">
              <motion.p whileHover={{ scale: 1.1 }}>About</motion.p>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <motion.p whileHover={{ scale: 1.1 }}>Work</motion.p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <motion.p whileHover={{ scale: 1.1 }}>Contact</motion.p>
            </Link>
          </li>
        </ul>
      )}
      <div className={styles.burger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;