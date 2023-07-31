import * as Yup from 'yup'

export const loginYupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email không đúng định dạng !')
    .required('Vui lòng điền đầy đủ thông tin!')
    .max(256, 'Độ dài email không được lớn hơn 256 ký tự !'),
  password: Yup.string()
    .min(8, 'Độ dài password phải từ 8 ký tự trở lên !')
    .max(60, 'Độ dài email không được lớn hơn 60 ký tự !')
    .required('Vui lòng điền đầy đủ thông tin !')
    .matches(/[A-Z]/g, 'Phải có chữ in hoa')
    .matches(/[a-z]/g, 'Phải có chữ thường')
    .matches(/[0-9]/g, 'Phải có số')
    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, 'Phải có ký tự đặc biệt'),
})

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email không đúng định dạng !')
    .required('Email không được trống !')
    .max(256, 'Độ dài email không được lớn hơn 256 ký tự !'),
  password: Yup.string()
    .min(8, 'Độ dài password phải từ 8 ký tự trở lên !')
    .max(60, 'Độ dài email không được lớn hơn 60 ký tự !')
    .required('Vui lòng điền đầy đủ thông tin !')
    .matches(/[A-Z]/g, 'Phải có chữ in hoa')
    .matches(/[a-z]/g, 'Phải có chữ thường')
    .matches(/[0-9]/g, 'Phải có số')
    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, 'Phải có ký tự đặc biệt'),
  re_password: Yup.string()
    .min(8, 'Độ dài password phải từ 8 ký tự trở lên !')
    .max(60, 'Độ dài email không được lớn hơn 60 ký tự !')
    .required('Vui lòng điền đầy đủ thông tin !')
    .matches(/[A-Z]/g, 'Phải có chữ in hoa')
    .matches(/[a-z]/g, 'Phải có chữ thường')
    .matches(/[0-9]/g, 'Phải có số')
    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, 'Phải có ký tự đặc biệt'),
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
