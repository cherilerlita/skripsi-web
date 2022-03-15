import React from 'react';
import Form from '../components/form.component';
import Restaurant from '../img/restaurant_1.png';
import InputForm from '../components/inputForm.component';

function LoginForm() {
  return (
    <div>
      <div className="content-flex">
        <div className="title-container">
          <h1>Discover-U</h1>
          <img src={Restaurant} alt="restaurant" />
        </div>
        <Form
          Title=""
          formTitle=""
          buttonForm="Login"
          haveAccountOrNot="Don't have an account?"
          spanForm="Register"
          link="/regis"
        >
          <InputForm
            labelFor="fname"
            labelName="Email Address"
            inputType="text"
            inputId="fname"
            inputName="fname"
          />
          <InputForm
            labelFor="lname"
            labelName="Password"
            inputType="password"
            inputId="lname"
            inputName="lname"
          />
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
