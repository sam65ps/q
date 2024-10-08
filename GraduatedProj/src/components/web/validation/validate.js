import * as yup from "yup";

export const validationSchema = yup.object({
  userName: yup
    .string()
    .required("user name is required")
    .min(3, "userName must be at least 3 character")
    .max(30, "max is 30"),
  email: yup.string().required("email is required").email(),
  password: yup
    .string()
    .required("password is required")
    .min(3, "password must be at least 3 digits")
    .max(30, "max is 30"),
});

export const loginSchema = yup.object({
  email: yup.string().required("يجب ادخال البريد الاكتروني*").email(),
  password: yup
    .string()
    .required("يجب ادخال كلمة المرور*")
    .min(3, "يجب ادخال 3 أحرف على الاقل")
    .max(30, "يجب ادخال 30 حرف كحد أقصى"),
});
export const sendCodeSchema = yup.object({
  email: yup.string().required("email is required").email(),
});

export const forgetPasswordSchema = yup.object({
  email: yup.string().required("email is required").email(),
  password: yup
    .string()
    .required("password is required")
    .min(3, "password must be at least 3 digits")
    .max(30, "max is 30"),
  code: yup
    .string()
    .required("Code is required")
    .length(4, "Code must be 4 digits"),
});
export const CreateorderSchema = yup.object({
  couponName: yup.string(),
  address: yup.string().required("Your Address is required"),
  phone: yup.string().required("Your Phone is required"),
});
// Student Form Schema
export const studentFormSchema = yup.object({
  firstName: yup
    .string()
    .required("يجب ادخال الاسم الأول")
    .min(2, "الاسم الأول يجب أن يكون على الأقل من حرفين"),
  lastName: yup
    .string()
    .required("يجب ادخال اسم العائلة")
    .min(2, "اسم العائلة يجي أن يكون على الأقل من حرفين"),
  email: yup
    .string()
    .required("يجب ادخال البريد الالكتروني")
    .email("الرجاء إدخال بريد إلكتروني صالح"),
  birthDate: yup.date().required("يجب ادخال تاريخ الميلاد"),
  gender: yup.string().required("يجب ادخال الجنس"),
  password: yup
    .string()
    .required("يجب ادخال كلمة المرور")
    .min(8, "كلمة السر قصيرة جدا")
    .max(30, "كلمة السر طويلة جداً"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "يجب أن تتطابق كلمتا السر")
    .required("يجب أدخال تأكيد كلمة المرور"),
});

// Manager Form Schema
const PHONE_NUMBER_REGEX = /^((\+970)|(\+972)|0)?5[0-9]{8}$/;
const FILE_SIZE = 1024 * 1024 * 5; // 5 MB
const SUPPORTED_DOC_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const managerFormSchema = yup.object({
  firstName: yup
    .string()
    .required("يجب ادخال الاسم الأول")
    .min(2, "الاسم الأول يجب أن يكون على الأقل من حرفين"),
  lastName: yup
    .string()
    .required("يجب ادخال اسم العائلة")
    .min(2, "اسم العائلة يجب أن يكون على الأقل من حرفين"),
  email: yup
    .string()
    .required("يجب ادخال البريد الالكتروني")
    .email("الرجاء إدخال بريد إلكتروني صالح"),
  birthDate: yup.date().required("يجب ادخال تاريخ الميلاد"),
  phone: yup
    .string()
    .matches(PHONE_NUMBER_REGEX, "رقم الجوال غير صالح")
    .required("يجب إدخال رقم الجوال"),
  password: yup
    .string()
    .required("يجب ادخال كلمة المرور")
    .min(8, "كلمة السر قصيرة جدا")
    .max(30, "كلمة السر طويلة جداً"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "يجب أن تتطابق كلمتا السر")
    .required("يجب أدخال تأكيد كلمة المرور"),
  gender: yup.string().required("يجب ادخال الجنس"),

  resume: yup
    .mixed()
    .required("يجب رفع السيرة الذاتية")
    .test("fileSize", "حجم الملف كبير جدًا", (value) => {
      return value && value.size <= FILE_SIZE;
    })
    .test("fileFormat", "نوع الملف غير مدعوم", (value) => {
      return value && SUPPORTED_DOC_FORMATS.includes(value.type);
    }),
});

export const schoolFormSchema = yup.object().shape({
  schoolName: yup
    .string()
    .required("اسم المدرسة مطلوب")
    .min(3, "اسم المدرسة يجب أن يكون على الأقل 3 أحرف")
    .max(100, "اسم المدرسة لا يمكن أن يزيد عن 100 حرف"),

  address: yup
    .string()
    .required("العنوان مطلوب")
    .min(5, "العنوان يجب أن يكون على الأقل 5 أحرف")
    .max(200, "العنوان لا يمكن أن يزيد عن 200 حرف"),

  description: yup
    .string()
    .required("وصف المدرسة مطلوب")
    .min(10, "الوصف يجب أن يكون على الأقل 10 أحرف")
    .max(500, "الوصف لا يمكن أن يزيد عن 500 حرف"),

  logo: yup
    .mixed()
    .required("شعار المدرسة مطلوب")
    .test("fileSize", "حجم الملف كبير جدًا", (value) => {
      return value && value.size <= 1024 * 1024; 
    })
    .test("fileType", "نوع الملف غير مدعوم", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      ); 
    }),
});
