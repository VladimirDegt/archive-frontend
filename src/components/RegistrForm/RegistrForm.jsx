import { Formik, Form, Field } from 'formik';
import { Notify } from 'notiflix';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useRegisterMutation } from 'utils/RTK-Query';
import { SignupSchema } from 'schemas/validate-register';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';

export const RegisterForm = ({ handleClose, isOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fieldStatus, setFieldStatus] = useState('');
  const [register] = useRegisterMutation();

  const handleFieldStatus = ({ target }) => {
    setFieldStatus(target.value);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const response = await register({...values, status: fieldStatus});
      setIsLoading(false);
      
      if (response.data) {
        Notify.success('Ви зареєструвалися та вхід розблоковано', {
          position: 'center-top',
          distance: '10px',
        });
        resetForm();
        handleClose();
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
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="registration" >
      {isLoading ? (
        <SkeletonAuth totalRow={3} sx={{ minWidth: 552 }}/>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {({ errors, touched }) => (
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
                  label="Name"
                  type="text"
                  fullWidth
                />
                {errors.name && touched.name ? (
                  <Typography paragraph sx={{ color: red[500], minWidth: 552 }}>
                    {errors.name}
                  </Typography>
                ) : null}
                <Field
                  as={TextField}
                  margin="dense"
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                {errors.email && touched.email ? (
                  <Typography paragraph sx={{ color: red[500] }}>
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
                <InputLabel id="status-search">Статус:</InputLabel>
            <Select
              labelId="status-search"
              value={fieldStatus}
              margin="dense"
              name="fieldStatus"
              type="text"
              fullWidth
              onChange={handleFieldStatus}
              required
            >
              <MenuItem value="moderator">Модератор</MenuItem>
              <MenuItem value="user">Користувач</MenuItem>
            </Select>
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
          )}
        </Formik>
      )}
    </Dialog>
  );
};
