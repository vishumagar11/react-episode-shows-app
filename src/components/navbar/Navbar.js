import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
//showing navbar here
const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>TV Shows</h2>
      </div>
      <ul className={styles.navLinks}>
  <li className={styles.navLink}><Link to="/">Home</Link></li>
</ul>
    </nav>
  );
};

export default Navbar;
