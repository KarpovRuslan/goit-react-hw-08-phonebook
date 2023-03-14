import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={css.title}>Create an account</h2>
        <p>Already have an account?</p>
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
