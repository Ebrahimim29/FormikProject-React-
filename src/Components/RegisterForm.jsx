import { useFormik } from "formik";

const RegisterForm = () => {

    const formik = useFormik({
        initialValues:{
            name:'Mohammad',
            email:'',
            password:''
        },
        onSubmit: values => {
            console.log(values);            
        },
        validate: values => {
          let errors = {}
          if(!values.name){
            errors.name = "لطفا این قسمت را پر کنید"
          }
          if(!values.email){
            errors.email = "لطفا این قسمت را پر کنید"
          }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
            errors.email = "لطفا قالب ایمیل را درست وارد کنید: مثل www@gmail.com"
          }
          if(!values.password){
            errors.password = "لطفا این قسمت را پر کنید"
          }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
            errors.password = "لطفا پسورد شامل حروف و عدد و علامت باشد"
          }
          return errors;
        }
    })

    console.log(formik);
    
    // console.log(formik.values);
    

  return (
    <div className="auth_container w-full h-full p-0 flex justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <div className="auth_box w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 py-4 px-3">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-center">
              <i className="fas fa-user-plus text-blue-600"></i>
            </h1>
            <div className="mb-3">
              <label htmlFor="name" className="block mb-1 text-gray-700 text-sm font-medium">نام</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="name" name="name" value={formik.values.name} 
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.name  && formik.touched.name ? 
                <small className="block text-center text-red-600">
                  {formik.errors.name}
                </small> : null}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="block mb-1 text-gray-800 text-sm font-medium">ایمیل</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm 
                focus:outline-none focus:ring-3 focus:ring-red-500 focus:border-red-600" 
                id="email" name="email" value={formik.values.email} 
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.email && formik.touched.email ? 
                <small className="block text-center text-red-600">
                  {formik.errors.email}
                </small> : null}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="block mb-1 text-gray-900 text-sm font-medium">رمز عبور</label>
                <input type="password" className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm 
                focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-green-600" 
                id="password" name="password" value={formik.values.password} 
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.password  && formik.touched.password ? 
                <small className="block text-center text-red-600">
                  {formik.errors.password}
                </small> : null}

            </div>
            <div className="text-center">
                <button className="p-2 bg-pink-600 rounded-sm text-white">ثبت نام</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
