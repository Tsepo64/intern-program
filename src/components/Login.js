import React from 'react';
import PrimaryBtn from './components/PrimaryBtn'


const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email ?.value;
        let password = e.target.elements.password ?.value;

        console.log(email, password);
    };

    return (
        <div className = 'h-screen flex bg-gray-bg1'>
            <div className = 'w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className = 'text-2xl font-medium text-primary mt-4 mb-12 text-center'>Login Form</h1>
                <form onSubmit = {handleFormSubmit}>
                    <div className >
                        <label htmlFor = 'email' >Email</label>
                        <input type = 'email' className = {`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`} id = 'email' placeholder = 'Enter your email'/>
                    </div>

                    <div>
                        <lable htmlFor = 'password'>Password</lable>
                        <input type = 'passsword' className = {`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`} id = 'password' placeholder = 'Enter your password'/>
                    </div>

                    <div className = 'flex justify-center items-center mt-6'>
                        <button className = {`bg-green py-2 px-4 text-sm text-white ronded-border border-green focus:outline-none focus:border-green-dark`}>Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
};