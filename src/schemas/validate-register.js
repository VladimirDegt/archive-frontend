import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ']+$/, 'Name should only contain letters')
     .min(2, 'Too Short!')
     .max(30, 'Too Long!')
     .required('Required'),
  password: Yup.string()
     .min(2, 'Too Short!')
     .max(30, 'Too Long!')
     .required('Required'),
   email: Yup
   .string()
   .max(50, 'Too Long!')
   .email('Invalid email')
   .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email format')
   .required('Required'),
 });

 
