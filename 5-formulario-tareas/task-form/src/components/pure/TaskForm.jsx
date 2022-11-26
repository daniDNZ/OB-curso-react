import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function TaskForm({addTask}) {
  const formStyle = {
    width: '320px',
    position: 'relative',
    margin: '50px auto 0'
  }
  const fieldStyle = {
    display: 'block',
    marginBottom: '5px'
  }
  const errorStyle = {
    position: 'absolute',
    backgroundColor: '#ff9090',
    borderRadius: '5px',
    padding: '5px 10px',
    top: '-32px'
  }

  const SignupSchema = Yup.object().shape({
    desc: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
  });
  return (
    <div>
      <Formik
       initialValues={{
         desc: ''
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, {resetForm}) => {
         // same shape as initial values
         addTask(values);
         resetForm();
       }}
     >
       {({ errors, touched }) => (
          <Form style={formStyle}>
            <Field name="desc" style={fieldStyle} />
            {errors.desc && touched.desc ? (
             <div style={errorStyle}>{errors.desc}</div>
           ) : null}
           <button type="submit">Add task</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}