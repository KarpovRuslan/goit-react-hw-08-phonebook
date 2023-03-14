import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
      alert(`Empty! Please enter valid email and password to Log In`);
    } else {
      dispatch(
        logIn({
          email,
          password,
        })
      );
      form.reset();
    }
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={css.title}>Enter your details to sign in </h2>
        <TextField
          type="email"
          name="email"
          size="small"
          margin="dense"
          label="Email"
        />
        <label className={css.label}>
          <TextField
            type="password"
            name="password"
            size="small"
            margin="dense"
            label="Password"
          />
        </label>
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </form>
    </div>
  );
};
