import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <Button color="inherit">Register</Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button color="inherit">Log In</Button>
      </NavLink>
    </div>
  );
};
