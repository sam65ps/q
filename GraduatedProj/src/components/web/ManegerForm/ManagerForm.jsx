import React from 'react';
import { useFormik } from 'formik';
import { managerFormSchema } from '../validation/validate'; 
import Input from '../../pages/Input'; 
import style from './ManagerForm.module.css';
import formStyle from '../Auth.module.css'

export default function ManagerForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      phone: '',
      password: '',
      confirmPassword: '',
      gender: '',
      resume: null, 
    },
    validationSchema: managerFormSchema, 
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
    },
  });

  const inputs = [
    {
      id: 'firstName',
      type: 'text',
      name: 'firstName',
      title: 'الاسم الأول',
      value: formik.values.firstName,
    },
    {
      id: 'lastName',
      type: 'text',
      name: 'lastName',
      title: 'اسم العائلة',
      value: formik.values.lastName,
    },
    {
      id: 'email',
      type: 'email',
      name: 'email',
      title: 'البريد الإلكتروني',
      value: formik.values.email,
    },
    {
      id: 'birthDate',
      type: 'date',
      name: 'birthDate',
      title: 'تاريخ الميلاد',
      value: formik.values.birthDate,
    },
    {
      id: 'phone',
      type: 'text',
      name: 'phone',
      title: 'رقم الجوال',
      value: formik.values.phone,
    },
    {
      id: 'gender',
      type: 'select',
      name: 'gender',
      title: 'الجنس',
      value: formik.values.gender,
      options: ['ذكر', 'أنثى'], 
    },
    {
      id: 'password',
      type: 'password',
      name: 'password',
      title: 'كلمة المرور',
      value: formik.values.password,
    },
    {
      id: 'confirmPassword',
      type: 'password',
      name: 'confirmPassword',
      title: 'تأكيد كلمة المرور',
      value: formik.values.confirmPassword,
    },

    {
      id: 'resume',
      type: 'file',
      name: 'resume',
      title: 'السيرة الذاتية',
      value: formik.values.resume,
    },
  ];

  const renderInputs = inputs.map((input, index) => (
    <Input
      key={index}
      id={input.id}
      type={input.type}
      name={input.name}
      title={input.title}
      value={input.value}
      errors={formik.errors}
      onChange={input.type === 'file' ? (event) => {
        formik.setFieldValue(input.name, event.currentTarget.files ? event.currentTarget.files[0] : null);
      } : formik.handleChange}
      
      // onChange={input.type === 'file' ? (event) => {
      //   formik.setFieldValue(input.name, event.currentTarget.files[0]);
      // } : formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
      options={input.options} 
    />
  ));

  return (
    <div className={`${style.manager_form_container} `}>
    <div className={`${formStyle.formDesign} `}>
    <h2 className={`${formStyle.formTitle} text-center mt-3 mb-4`}>المعلومات الشخصية</h2>
    <form onSubmit={formik.handleSubmit} className={`${formStyle.form}`}>
    <div className="container-fluid">
      {renderInputs} 

     <div className='  mt-3'>
      <button type='submit' disabled={!formik.isValid} className={`${formStyle.button}  `}>ارسال</button> 
    </div>  
  
    </div> 
    
    </form>
    </div>
  </div>

  );
}
