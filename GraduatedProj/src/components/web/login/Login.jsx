import React, { useEffect } from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema } from '../validation/validate.js'
import axios from 'axios'
import {toast} from 'react-toastify';
import style from './Login.module.css'
import formStyle from '../Auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
 

export default function Login() { 
  const navigate =useNavigate();
  
  const initialValues={//نفس اسماء متغيرات الname, اللي من الباك اند
         email:'',
         password:'',
  } //هدول القيم همي نفسهم اللي رح نوخدهم من اليوزر ونبعتهم بعدين للباك اند 

  const onSubmit= async values=>{//values ممكن تغييرها لاي اسم بدي اياه 
    const {data}= await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signin`,values);
    
    if(data.message=='success'){//الباك اند رح يرجع token 
     localStorage.setItem("userToken",data.token);
     toast.success('Done', {  
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      
      navigate('/');
    }
}
   
  const formik =useFormik({
      initialValues, 
      onSubmit,
      validationSchema:loginSchema
  });
 
   const inputs=[  
    {
      id:'Email',//lable لربط الليبل مع الانبوت 
      type:'email',
      name:'email',
      title:'البريد الالكتروني',
      value: formik.values.email,
    },
    {
      id:'Password',//lable لربط الليبل مع الانبوت 
      type:'password',
      name :'password',
      title:'كلمة المرور',
      value: formik.values.password,
    },
  ]

  const renderInputs= inputs.map((input,index)=>//array
  <Input
   id={input.id}
   type={input.type}
   name={input.name}
   title={input.title}
   value={input.value} 
   errors={formik.errors} 
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}//لتتبع الحقول التي تمت زيارتها 
   touched={formik.touched}//لتخزين الاماكن اللي قمنا بزيارتها ورح يتم اعتبارها ترو فقط لما اطلع من الانبوت 
   key={index} />
   )

  return (
    <div className={`${style.login_container} `}>
      <div className={`${formStyle.formDesign} `}>
      <h2 className={`${formStyle.formTitle} text-center mt-3 mb-4`}>تسجيل الدخول</h2>
      <form onSubmit={formik.handleSubmit} className={`${formStyle.form}`}>
      <div className="container-fluid">
        {renderInputs} 
      <div className='d-flex justify-content-end'>
        <Link className={`${formStyle.LinkForget}`} to="/sendCode">نسيت كلمة المرور؟</Link>
      </div> 
       {/*يجب تفعيل ال disabled */}
       <div className='  mt-3'>
        <button type='submit' disabled={!formik.isValid} className={`${formStyle.button}  `}>تسجيل دخول</button> 
      </div>  
    
      </div> 
      
      </form>
      </div>
    </div>
   
  )
}