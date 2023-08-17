import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Notify } from 'notiflix';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addToken, addAvatar, getNameUser } from 'redux/users/reducer';
import { useLoginMutation } from 'utils/RTK-Query';

export const LoginForm = ({ handleClose, isOpen }) => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
    handleClose();

    try {
      const response = await login(values);

      dispatch(addToken(response.data.token));
      dispatch(addAvatar(response.data.avatarURL));
      dispatch(getNameUser(response.data.name));

      Notify.success('Login success!', {
        position: 'center-top',
        distance: '10px',
      });
    } catch (error) {
      Notify.failure(`${error.message}`, {
        position: 'center-top',
        distance: '10px',
      });
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="registration">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <DialogTitle id="registration" sx={{ textAlign: 'center' }}>
            Login
          </DialogTitle>
          <DialogContent>
            <Field
              autoFocus
              as={TextField}
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
            />
            <Field
              as={TextField}
              margin="dense"
              name="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions
            sx={{
              paddingRight: 3,
              paddingLeft: 3,
              justifyContent: 'center',
            }}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Log In</Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};
