import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import { motion } from 'framer-motion'
function Profile() {
  return (
    <motion.div
      className={styles.profs}
      initial={{ opacity: 0, x: 24, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.profileGlow} aria-hidden="true" />
      <div className={styles.profileRing} aria-hidden="true" />
      <div className={styles.profileFrame}>
        <Image
          src="/profiles.jpeg"
          alt="Profile portrait"
          fill
          priority
          sizes="(max-width: 768px) 120px, 150px"
          className={styles.profileImage}
        />
      </div>
      <motion.span
        className={styles.profileDot}
        aria-hidden="true"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default Profile