import * as Yup from 'yup'

export const loginYupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email không đúng định dạng !')
    .required('Vui lòng điền đầy đủ thông tin!')
    .max(256, 'Độ dài email không được lớn hơn 256 ký tự !'),
  password: Yup.string()
    .min(6, 'Độ dài password phải từ 6 ký tự trở lên !')
    .max(60, 'Độ dài email không được lớn hơn 60 ký tự !')
    .required('Vui lòng điền đầy đủ thông tin !'),
})

export const signupSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Tên không hợp lệ !')
    .max(50, `Độ dài tên không được quá 50 kí tự !`)
    .required('Vui lòng điền đầy đủ thông tin !'),
  lastname: Yup.string()
    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Tên không hợp lệ !')
    .max(50, `Độ dài tên không được quá 50 kí tự !`)
    .required('Vui lòng điền đầy đủ thông tin !'),
  username: Yup.string()
    .min(6, 'Độ dài username phải từ 6 ký tự trở lên !')
    .max(60, 'Độ dài username không được lớn hơn 60 ký tự !')
    .required('Vui lòng điền đầy đủ thông tin !'),
  email: Yup.string()
    .email('Email không đúng định dạng !')
    .required('Email không được trống !')
    .max(256, 'Độ dài email không được lớn hơn 256 ký tự !'),
  password: Yup.string()
    .min(6, 'Độ dài password phải từ 8 ký tự trở lên !')
    .max(60, 'Độ dài email không được lớn hơn 60 ký tự !')
    .required('Vui lòng điền đầy đủ thông tin !'),
})

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Input cannot be blank!'),
  newPassword: Yup.string().required('Input cannot be blank!'),
  confirmPassword: Yup.string()
    .required('Input cannot be blank!')
    .oneOf([Yup.ref('newPassword')], 'Password does not match'),
})

export const resetPasswordSchema = Yup.object().shape({
  verifyCode: Yup.number()
    .required('Input cannot be blank!')
    .test({
      name: 'length',
      exclusive: true,
      message: 'Please enter all 4 numbers',
      test: value => {
        if (JSON.stringify(value)?.length != 4) {
          return false
        } else {
          return true
        }
      },
    }),
  newPassword: Yup.string().required('Input cannot be blank!'),
  confirmNewPassword: Yup.string()
    .required('Input cannot be blank!')
    .oneOf([Yup.ref('newPassword')], 'Password does not match'),
})
