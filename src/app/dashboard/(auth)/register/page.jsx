'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='name'
          className={styles.input}
          required
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className={styles.button}>Register</button>
      </form>
      <Link href='/dashboard/login' className={styles.loginDirect}>
        Login with an exist account
      </Link>
    </div>
  );
};

export default Register;
