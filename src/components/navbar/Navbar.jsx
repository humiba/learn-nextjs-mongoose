'use client';

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';

import { links } from '@/utils/links';
import { DarkModeToggle } from '..';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={'/'}>
        Humibacute
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />

        {/* Render single link in links array */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
