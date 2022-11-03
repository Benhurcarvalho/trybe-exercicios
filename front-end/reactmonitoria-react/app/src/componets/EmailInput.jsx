import React from "react";

class EmailInput extends React.Component {
    render() {
        const { email, handleChange } = this.props;
        return (
            <label>
                Email:
                <input
                  type='email'
                  name='email'
                  placeholder="Digite seu email"
                  value={ email }
                  onChange={ handleChange }
                />
            </label>
        )
    }
}

export default EmailInput;