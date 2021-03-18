import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCar, faGoogle } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="login-page-design">
        <form className="form-design" onSubmit={handleSubmit(onSubmit)}>
            <h2 >Create An Account</h2>
            <input  className="form-item" name="username" placeholder="Enter Your Name" ref={register({ required: true })} />
            {errors.username && <span className="error-design">Name is required</span>}
           
            <input name="email" type="email" className="form-item" placeholder="Enter Your Email" ref={register({ required: true })} />
            {errors.email && <span className="error-design">Email is required</span>}
           
            <input name="password" placeholder="Enter" className="form-item" placeholder="password" type="password" ref={register({ required: true })}/>
            {errors.password && <span className="error-design">Password is required</span>}
           
            <input name="confirmpassword" className="form-item" placeholder="Confirm password" type="password" ref={register({ required: true })}/>
            {errors.confirmpassword && <span className="error-design">Confirm Password is required</span>}
           
            <input className="form-item submit" type="submit" />
            <h6>Already Have an Account? <span><Link>login</Link></span> </h6>
        </form>
            <div className="form-above-part">
                <h4>or</h4>
                <div className="login-with-facebook">
                   <div className="fb-image">

                   </div>
                    <h5>Continue With Facebook</h5>
                </div>
                <div className="login-with-google">
                    <div className="google-image">

                    </div>
                    <h5>Continue With Google</h5>
                </div>
            </div>


        </div>
    );
};

export default Login;