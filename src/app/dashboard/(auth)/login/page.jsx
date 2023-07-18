'use client';

import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import styles from './page.module.css';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const session = useSession();

  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    signIn('credentials', { email, password });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='email'
          placeholder='email'
          className={styles.input}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className={styles.input}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button
        onClick={() => {
          signIn('google');
        }}
        className={styles.button + ' ' + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href='/dashboard/register'>
        Create new account
      </Link>
    </div>
  );
};

export default Login;
