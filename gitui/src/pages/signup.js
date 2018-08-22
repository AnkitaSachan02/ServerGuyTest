import React, {Component} from "react";
// import "./App.css";
import "../../src/App.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            email: "",
            password : "",
        }
    }
    onChange = () => {
    //   const state = this.state;
      console.log("e.target.value");
    }

    render(){
        return(
            <div>
                <div id="login-box">
                    <div class="left">
                        <h1>Sign up</h1>
                        <input onChange={this.onChange} type="text" name="username" placeholder="Username" />
                        <input onChange={this.onChange} type="text" name="email" placeholder="E-mail" />
                        <input onChange={this.onChange} type="password" name="password" placeholder="Password" />
                        <input onChange={this.onChange} type="submit" name="signup_submit" value="Sign me up" />
                    </div>
                    <div class="right">
                        <span class="loginwith">Sign in with<br />social network</span>
                        <button class="social-signin facebook">Log in with facebook</button>
                        <button class="social-signin twitter">Log in with Twitter</button>
                        <button class="social-signin google">Log in with Google+</button>
                    </div>
                    <div class="or">OR</div>
                </div>
            </div>
        );
    }
}

export default SignUp;