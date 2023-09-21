import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import { Notify } from 'notiflix';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SigninSchema } from 'schemas/validate-login';
import { addToken, getNameUser } from 'redux/users/reducer';
import { useLoginMutation } from 'utils/RTK-Query';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';

export const LoginForm = ({ handleClose, isOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const response = await login(values);
      setIsLoading(false);

      dispatch(addToken(response.data.token));
      dispatch(getNameUser(response.data.name));
      navigate('/archive', { replace: true });
    } catch (error) {
      Notify.failure('Будь ласка зареєструйтеся', {
        position: 'center-top',
        distance: '10px',
      });
    } finally {
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
      {isLoading ? (
        <SkeletonAuth totalRow={2} sx={{ minWidth: 444 }} />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
        >
          {({ errors, touched }) => (
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
                {errors.email && touched.email ? (
                  <Typography paragraph sx={{ color: red[500], minWidth: 444 }}>
                    {errors.email}
                  </Typography>
                ) : null}
                <Field
                  as={TextField}
                  margin="dense"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
                {errors.password && touched.password ? (
                  <Typography paragraph sx={{ color: red[500] }}>
                    {errors.password}
                  </Typography>
                ) : null}
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
          )}
        </Formik>
      )}
    </Dialog>
  );
};
