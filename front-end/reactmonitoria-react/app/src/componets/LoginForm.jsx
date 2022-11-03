import React from "react";
import EmailInput from "./EmailInput";
// import PasswordInput from "./PasswordInput";
import PasswordInput2 from "./PasswordInput2";

class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        isButtonDisabled: true
    }

    handleChange = (ev) => {
        const { target } = ev;
        this.setState({ [target.name]: target.value }, () => {
            const { email, password } = this.state;
            const newButtonDisabled = email.length < 6 || password.length < 6;
            
            this.setState({
                isButtonDisabled: newButtonDisabled
            });
        })
    }

    render() {
        const { email, password, isButtonDisabled } = this.state;
        return (
            <section>
                <form>
                    <h2>Login</h2>

                    <EmailInput 
                      email={ email }
                      handleChange={ this.handleChange }
                    />
                    <PasswordInput2 
                      password={ password }
                      handleChange={ this.handleChange }
                    />
                    {/* <PasswordInput /> */}
                    <button disabled={ isButtonDisabled }>LOGIN</button>
                </form>
            </section>
        );
    }
}

export default LoginForm;