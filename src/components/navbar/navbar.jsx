import React from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
      <div className={styles.main}>
        <ul className={styles.mainUL}>
          <li>
            <Link href="/about">
              <motion.p
                whileHover={{scale:1.1}}
              >
                About
              </motion.p>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <motion.p
              whileHover={{scale:1.1}}>

                Work
              </motion.p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <motion.p
                whileHover={{scale:1.1}}
              >
                Contact
              </motion.p>
            </Link>
          </li>
        </ul>
        </div>
    
  );
};

export default Navbar;