import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';
import { LoadFileSchema } from 'schemas/validate-loadFile';
import { useGetLoadFileMutation } from 'utils/RTK-Query';
import { StyledSpan } from './FileUploadForm.styled';

const initialValues = {
  idFile: '',
};

export const FileUploadForm = ({ handleClose, isOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [getLoadFile] = useGetLoadFileMutation();

  const handleSubmit = async ({ idFile }, { resetForm }) => {
    try {
      setIsLoading(true);
      await getLoadFile(idFile);
      setIsLoading(false);

      Notify.success('Документ завантажен', {
        position: 'center-top',
        distance: '10px',
      });
    } catch (error) {
      console.log(error.message);
      Notify.failure('Помилка завантаження документу', {
        position: 'center-top',
        distance: '10px',
      });
    } finally {
      resetForm();
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="registration">
      {isLoading ? (
        <SkeletonAuth totalRow={2} sx={{ minWidth: 444 }} />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={LoadFileSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <DialogTitle
                id="registration"
                sx={{ textAlign: 'center', minWidth: 444 }}
              >
                Завантаження документа
              </DialogTitle>
              <Typography
                paragraph
                sx={{
                  textAlign: 'left',
                  fontSize: 12,
                  paddingLeft: 3,
                  paddingRight: 3,
                  margin: 0,
                }}
              >
                Виберіть ID документа з рядка, наприклад:
              </Typography>
              <Typography
                paragraph
                sx={{
                  textAlign: 'left',
                  fontSize: 10,
                  paddingLeft: 3,
                  paddingRight: 3,
                  margin: 0,
                }}
              >
                https://edo.vchasno.ua/app/documents/
                <StyledSpan>46940461-ab53-476e-b320-d7e46cfe5e85</StyledSpan>
              </Typography>
              <DialogContent>
                <Field
                  autoFocus
                  as={TextField}
                  name="idFile"
                  label="ID file"
                  type="idFile"
                  fullWidth
                />
                {errors.idFile && touched.idFile ? (
                  <Typography paragraph sx={{ color: red[500], minWidth: 444 }}>
                    {errors.idFile}
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
                <Button type="submit">Load</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      )}
    </Dialog>
  );
};
