import React from 'react';
import PropTypes from 'prop-types'; // استيراد PropTypes
import style from '../web/Auth.module.css';

export default function Input({
  type = 'text',
  id,
  name,
  title,
  value,
  onChange,
  errors,
  onBlur,
  touched,
  options,
}) {
  return (
    <div className={`${style.field_holder} form-floating`}>
      {type === 'select' ? (
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="form-control"
        >
          <option value="">اختر {title}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'file' ? (
        <input
        type={type}
  name={name}
  id={id}
  onChange={(event) => {
    if (event.target.files && event.target.files.length > 0) {
      onChange(event);
    }
  }} 
  onBlur={onBlur}
  className="form-control"
     
          // type={type}
          // name={name}
          // id={id}
          // onChange={(event) => onChange(event.target.files[0])} // للتعامل مع الملفات
          // onBlur={onBlur}
          // className="form-control"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="form-control"
        />
      )}
      <label htmlFor={id}>{title}</label>
      {touched[name] && errors[name] && (
        <p className="text-danger">{errors[name]}</p>
      )}
    </div>
  );
}

// إضافة PropTypes للتحقق من الأنواع
Input.propTypes = {
  type: PropTypes.string, // التحقق من أن 'type' هو string
  id: PropTypes.string.isRequired, // 'id' مطلوب ويجب أن يكون string
  name: PropTypes.string.isRequired, // 'name' مطلوب ويجب أن يكون string
  title: PropTypes.string.isRequired, // 'title' مطلوب ويجب أن يكون string
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), // 'value' قد يكون string أو object في حالة رفع الملفات
  onChange: PropTypes.func.isRequired, // 'onChange' مطلوب ويجب أن يكون دالة
  errors: PropTypes.object.isRequired, // 'errors' يجب أن يكون كائن
  onBlur: PropTypes.func.isRequired, // 'onBlur' مطلوب ويجب أن يكون دالة
  touched: PropTypes.object.isRequired, // 'touched' يجب أن يكون كائن
  options: PropTypes.array, // 'options' يمكن أن يكون مصفوفة (اختياري)
};










// import React from 'react';
// import PropTypes from 'prop-types'; // استيراد PropTypes
// import style from '../web/Auth.module.css'

// export default function Input({
//   type = 'text',
//   id,
//   name,
//   title,
//   value,
//   onChange,
//   errors,
//   onBlur,
//   touched,
//   options,
// }) {
//   return (
//     <div className={`${style.field_holder} form-floating`}>
//       {type === 'select' ? (
//         <select
//           name={name}
//           id={id}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           className="form-control"
//         >
//           <option value="">اختر {title}</option>
//           {options.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <input
//           type={type}
//           name={name}
//           id={id}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           className="form-control"
//         />
//       )}
//       <label htmlFor={id}>{title}</label>
//       {touched[name] && errors[name] && (
//         <p className="text-danger">{errors[name]}</p>
//       )}
//     </div>
//   );
// }

// Input.propTypes = {
//   type: PropTypes.string, 
//   id: PropTypes.string.isRequired, 
//   name: PropTypes.string.isRequired, 
//   title: PropTypes.string.isRequired, 
//   value: PropTypes.string.isRequired, 
//   onChange: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   onBlur: PropTypes.func.isRequired, 
//   touched: PropTypes.object.isRequired, 
//   options: PropTypes.array, 
// };











// // import React from 'react'
// // import style from '../web/Auth.module.css'
// // export default function Input({type='text',id,name,title,value ,onChange,errors,onBlur,touched}) {//Props:destructing==> const{name,type}=props
// //  //السطر 10 يعني ازا انا كنت عاملة زيارة لهاد الانبوت ومع هيك ضل في اخطاء اظهرلي اياها 
// //   return (
// //     // <>
// //     // <div className={` mb-2 w-50 ${style.InputDesign}`}>
// //     //      <label htmlFor={id} className='mb-2' >{title}</label>
// //     //      <input placeholder={title} type={type} className="form-control rounded-5 shadow-none border-1 p-2 " name={name} id={id} value={value} onChange={onChange} onBlur={onBlur}  />
// //     //      {touched[name]&&errors[name]&&<p className='text text-danger w-100'>{errors[name]}</p>} 
// //     // </div>
// //     // </>
// //     <>
// //     <div className={` ${style.field_holder} form-floating `}>
// //          <input placeholder='' type={type} className='form-control' name={name} id={id} value={value} onChange={onChange} onBlur={onBlur}  />
// //          <label htmlFor={id} className={`${style.label} bg-none`} >{title}</label>
// //          {touched[name]&&errors[name]&&<p className={`${style.text} alert `}>{errors[name]}</p>} 
// //     </div>
// //     </>
// //   )
// // }
