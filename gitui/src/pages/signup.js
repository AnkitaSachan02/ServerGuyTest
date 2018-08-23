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
                <div id="login-box" style={{width: "340px"}}>
                    <div class="left">
                        <h1>Sign up</h1>
                        <input onChange={this.onChange} type="text" name="username" placeholder="Username" />
                        <input onChange={this.onChange} type="text" name="email" placeholder="E-mail" />
                        <input onChange={this.onChange} type="password" name="password" placeholder="Password" />
                        <input onChange={this.onChange} type="submit" name="signup_submit" value="Sign me up" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;