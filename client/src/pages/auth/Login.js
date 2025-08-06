import React from 'react';
import InputType from '../../components/shared/Form/InputType';

const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner1.jpg" alt="loginImage" className="img-fluid" />
        </div>
        <div className="col-md-4 form-container">
          <form>
					  <InputType labelText={'EMail' } labelFor={'forEMail'} inputType={'email'} name={'email'}/>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;