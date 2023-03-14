import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name === '' || email === '' || password === '') {
      alert(`Empty! Please fill all fields to Register`);
    } else {
      dispatch(
        register({
          name,
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
        <h2 className={css.title}>Create an account</h2>
        <p>
          Already have an account?
          <NavLink className={css.link} to="/login">
            <Button type="button" color="inherit" size="small">
              Login
            </Button>
          </NavLink>
        </p>
        <TextField
          label="Username"
          type="text"
          name="name"
          size="small"
          margin="dense"
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          size="small"
          margin="dense"
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          size="small"
          margin="dense"
        />
        <p>
          By creating an account, you agree to our Terms of Use and Privacy
          Policy.
        </p>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
};
