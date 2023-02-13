import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import logos from "../Images/ae2.gif";
import YupPassword from 'yup-password';
import '../App.css';




const initialValues = {
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

const FormSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
});

const handleSubmit= (data) => {
    console.log(JSON.stringify(data, null, 2));
  }


const Validate = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        localStorage.setItem('dataKey', JSON.stringify(data));
      }, [data]);

   
  return (
    <div className="register-form">
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, resetForm }) => (
            <Form className="form" >
                <div className="form-group">
                    <div className='validdiv'>
                <label className='label' htmlFor="current-password"> Enter your current Password: </label>
                </div>
                <br/>
                <div style={{marginBottom:"10px"}}>
                <Field style={{height:"30px", width:"280px"}}
                  name="current-password"
                  type="current-password"
                  placeholder ="************"
                  className={
                    'form-control'
                  }
                />
               </div>
              </div>

              <div className="form-group">
              <div className='validdiv'>
                <label className='label' htmlFor="password"> Set new Password: </label>
                </div>
                <br/>
                <div style={{marginBottom:"10px"}}>
                <Field style={{height:"30px", width:"280px"} }
                  name="password"
                  type="password"
               
                  placeholder ="************                               🗸" 
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                  

                />
                </div>
                <ErrorMessage style={{color:"red", fontSize:"12px"}}
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
              <div className='validdiv'>
                <label className='label' htmlFor="confirmPassword"> Retype new Password: </label>
                </div>
                <br/>
                <div style={{marginBottom:"10px"}}>
                <Field style={{height:"30px", width:"280px"}}
                  name="confirmPassword"
                  type="password"
                  placeholder ="************                            🗸🗸"
                  className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword
                      ? ' is-invalid'
                      : '')
                  }
                />
                </div> 
                <ErrorMessage style={{color:"red", fontSize:"12px"}}
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <Button style={{height:"33px", width:"290px" ,marginTop : "15px",backgroundColor : "#7BC362", fontFamily: "sans-serif", textTransform: 'none'}}
              type="submit"
              onClick={({ target }) => setData(target.value)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              Save changes &nbsp; 
              {/* <EastIcon className='iconHov'/> */}
              <img style={{height: "25px", width:"50px"}} src={logos}/>
            </Button>
            </Form>
          )}
          
        </Formik>
      </div>
  );
};

export default Validate;

