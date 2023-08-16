import { Formik, Form, Field } from 'formik';
import { Notify } from 'notiflix';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useRegisterMutation } from 'utils/RTK-Query';

export const RegisterForm = ({ handleClose, isOpen }) => {
  const [register] = useRegisterMutation();

  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
    handleClose();

    try {
      const response = await register(values);
      if (response.data) {
        Notify.success('Registration success!', {
          position: 'center-top',
          distance: '10px',
        });
        return;
      }
      Notify.failure(`${response.error.data.message}`, {
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
    name: '',
    email: '',
    password: '',
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="registration">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <DialogTitle id="registration" sx={{ textAlign: 'center' }}>
            Registration
          </DialogTitle>
          <DialogContent>
            <Field
              autoFocus
              as={TextField}
              margin="dense"
              name="name"
              label="name"
              type="text"
              fullWidth
            />
            <Field
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
            <Button type="submit">Sign Up</Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};
