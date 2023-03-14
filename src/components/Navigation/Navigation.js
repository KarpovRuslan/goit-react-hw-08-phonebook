import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import Button from '@mui/material/Button';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn && (
        <NavLink className={css.link} to="/">
          <Button
            color="inherit"
            size="large"
            startIcon={<MobileFriendlyIcon />}
          >
            PhoneBook
          </Button>
        </NavLink>
      )}

      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contact List
        </NavLink>
      )}
    </nav>
  );
};
