'use client';

import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; Humiba cute. All right reserved</div>
      <div className={styles.social}>
        <Image
          src='/1.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Humiba Cute'
        />
        <Image
          src='/2.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Humiba Cute'
        />
        <Image
          src='/3.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Humiba Cute'
        />
        <Image
          src='/4.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Humiba Cute'
        />
      </div>
    </div>
  );
};

export default Footer;
