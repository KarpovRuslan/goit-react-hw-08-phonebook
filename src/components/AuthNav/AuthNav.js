import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <Button color="inherit" startIcon={<SaveIcon />}>
          Register
        </Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button color="inherit" startIcon={<LoginIcon />}>
          Log In
        </Button>
      </NavLink>
    </div>
  );
};
