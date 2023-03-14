import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}!</p>
      <Button
        type="button"
        color="inherit"
        onClick={() => dispatch(logOut())}
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </div>
  );
};
