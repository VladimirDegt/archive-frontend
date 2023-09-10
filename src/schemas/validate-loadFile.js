import * as Yup from 'yup';

export const LoadFileSchema = Yup.object().shape({
  idFile: Yup.string()
    .min(2, 'Довжина повинна бути більше двох символів')
    .required("Поле обов'язкове до заповнення"),
});
