import React from 'react';
import { EmailRounded, LockOpenRounded} from '@mui/icons-material';
//import imgLogin from "../images/3776804 copy 1.png";

const Signup = () => {
  return <>
      <div className="main_container">
           <div className="container">
           <div className="image_container signupC">

            <img src={process.env.PUBLIC_URL + "/images/3776804 copy 1.png"} alt="" />

            </div>
            <div className="login signupIC">
              <h1>USER SIGN-UP</h1>
              <form action="">
              <div className="input_login">
                <EmailRounded  className="email_logo"/>
                <input type="email" placeholder="Enter your name" />
                
              </div>
              <div className="input_login">
                <EmailRounded  className="email_logo"/>
                <input type="email" placeholder="Enter your mobile no" />
                
              </div>
              
              <div className="input_login">
                <EmailRounded  className="email_logo"/>
                <input type="email" placeholder="Enter your Email" />
                
              </div>

              <div className="input_login">
                <LockOpenRounded  className="email_logo"/>
                <input type="password" placeholder="Enter Password" />
                
              </div>

              <button className="submitButton" type="submit">Sign In</button>

              </form>

              <div className="login_text">
                <h3>New User? <a href="http://">Sign Up</a></h3>
                <h3><a href="http://">Forget password</a></h3>
              </div>

            </div>
            
            </div>  
      </div>    
  </>;
};

export default Signup;
