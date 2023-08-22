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
import { addToken, getNameUser } from 'redux/users/reducer';
import { useLoginMutation } from 'utils/RTK-Query';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ handleClose, isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleSubmit = async (values, { resetForm }) => {

    try {
      const response = await login(values);

      dispatch(addToken(response.data.token));
      dispatch(getNameUser(response.data.name));

      navigate("/archive", { replace: true });
    } catch (error) {
      Notify.failure('Login not success!', {
        position: 'center-top',
        distance: '10px',
      });
    }
    finally {
      resetForm();
      handleClose();
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
