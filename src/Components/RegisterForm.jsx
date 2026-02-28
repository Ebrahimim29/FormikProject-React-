// import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import PersonalField from "./PersonalField";
import PersonalError from "./PersonalError";

const initialValues = {
  name: "",
  email: "",
  password: "",
  bio:""
};

const onSubmit = (values) => {
  console.log(values);
};

// const validate = values => {
//   let errors = {}
//   if (!values.name) {
//     errors.name = "Please Fill Box"
//   }
//   if (!values.email) {
//     errors.email = "Please Fill Box"
//   }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
//     errors.email = "Please Fill Box : aaa@gmail.com"
//   }
//   if (!values.password) {
//     errors.password = "Please Fill Box"
//   }
//   return errors;
// }

const validationSchema = Yup.object({
  name: Yup.string().required("Please Fill Box"),
  email: Yup.string()
    .required("Please Fill Box")
    .email("example:aaa@gmail.com"),
  password: Yup.string().required("Please Fill Box").min(6, "Min 6 Character"),
});

const RegisterForm = () => {
  // const formik = useFormik({
//     initialValues,
//     onSubmit,
//     // validate,
//     validationSchema,
//   });

  // console.log(formik);
  // console.log(formik.values);

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      <div className="auth_container w-full h-full p-0 flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="auth_box w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 py-4 px-3">
            {/* <form onSubmit={formik.handleSubmit}> */}
            <Form>
              <h1 className="text-center">
                <i className="fas fa-user-plus text-blue-600"></i>
              </h1>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block mb-1 text-gray-700 text-sm font-medium">
                  نام
                </label>
                {/* <input */}
                <FastField
                  type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="name" name="name" placeholder="Please fill name:"                  
                  // value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                  // {...formik.getFieldProps("name")}
                />

                {/* {formik.errors.name && formik.touched.name ? (
                  <small className="block text-center text-red-600">
                    {formik.errors.name}
                  </small>
                ) : null} */}
                <ErrorMessage name='name'
                component={PersonalError}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block mb-1 text-gray-800 text-sm font-medium">
                  ایمیل
                </label>
                <FastField
                  type="email" className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm 
                focus:outline-none focus:ring-3 focus:ring-red-500 focus:border-red-600"
                  id="email" name="email"/>
                <ErrorMessage name='email'>
                  {error => <small className="block text-center text-amber-500">{error}</small>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-900 text-sm font-medium">رمز عبور</label>
                
                <FastField name="password">
                  {props => <PersonalField {...props}/>}
                </FastField>

              </div>
              <div className="mb-3">
                <label
                  htmlFor="bio"
                  className="block mb-1 text-gray-900 text-sm font-medium">
                  بیوگرافی
                </label>
                <FastField
                  type="text" className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm 
                focus:outline-none focus:ring-3 focus:ring-sky-500 focus:border-sky-600"
                  id="bio" name="bio" component="textarea"/>
                <ErrorMessage name='bio'/>
              </div>
              <div className="text-center w-100">
                <button type="submit" className="p-2 bg-pink-600 rounded-sm text-white">
                  ثبت نام
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};


export default RegisterForm;
