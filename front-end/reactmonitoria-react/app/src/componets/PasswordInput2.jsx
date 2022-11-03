import React, { Component } from 'react'

class PasswordInput2 extends Component {
  render() {
    const { password, handleChange, inputType } = this.props;
    return (
        <label>
        Senha:
        <input
          type={ inputType }
          name='password'
          placeholder="Digite seua senha"
          value={ password }
          onChange={ handleChange }
        />
    </label>
    )
  }
}

export default PasswordInput2