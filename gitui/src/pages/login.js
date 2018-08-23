import React, {Component} from "react";
// import "./App.css";
import "../../src/App.css";

class LogIn extends Component {
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
                        <h1>Sign in</h1>
                        <input onChange={this.onChange} type="text" name="username" placeholder="Username" />
                        <input onChange={this.onChange} type="text" name="email" placeholder="E-mail" />
                        <input onChange={this.onChange} type="password" name="password" placeholder="Password" />
                        <input onChange={this.onChange} type="submit" name="signin_submit" value="Sign in" />
                    </div>
                    <div class="right">
                        <span class="loginwith">Sign in with<br />social network</span>
                        <a href="http://localhost:8081/auth/facebook">
                            <button class="social-signin facebook">Log in with facebook</button>
                        </a>
                        <a href="http://localhost:8081/auth/google">
                            <button class="social-signin google">Log in with Google+</button>
                        </a>
                    </div>
                    <div class="or">OR</div>
                </div>
            </div>
        );
    }
}

export default LogIn;