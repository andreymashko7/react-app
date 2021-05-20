import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Main
    </NavLink>

    <NavLink
      to="/authors"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Authors
    </NavLink>

    <NavLink
      to="/books"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Books
    </NavLink>

    <NavLink
      to="/table"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Таблица
    </NavLink>
  </nav>
);

export default Navigation;
