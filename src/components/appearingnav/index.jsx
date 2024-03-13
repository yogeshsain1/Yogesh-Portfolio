import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from './styles.module.scss'

const navLinks = [
  { title: "About", href: "/about", size: 100 },
  { title: "Work", href: "/work", size: 100 },
  { title: "Contact", href: "/contact", size: 100 },
];

const ApNav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
    <div  className={styles.btns} onClick={toggleMenu}>
        <motion.div style={{ color: 'black'}} whileHover={{scale:0.8}} className={styles.navvs}>
          {open && (<p>Close</p>)}
          {!open && (<p>Menu</p>)}
        </motion.div>
      </div>
    <header className={styles.head}>
      
      <div className={styles.innerhead}>
      
        <AnimatePresence>
          {open && (
            <div className={styles.apearingelements}>
              <motion.div
                key="overlay"
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                key="menu"
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className=""
              >
                <div>

                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className=""
                  >
                    {navLinks.map((link, index) => {
                      return (
                        <div className={styles.redirectitems} key={index}>
                          <MobileNavLink
                            title={link.title}
                            href={link.href}
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
};

export default ApNav;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
    >
      <Link href={href} style={{ textDecoration: 'none', color: 'wheat' }}>
        <p style={{margin:0}}>{title}</p>
      </Link>
    </motion.div>
  );
};