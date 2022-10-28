import React from "react";

class PasswordInput extends React.Component {

constructor() {
    super();

    this.state = {
        inputType: 'password',
        btn: 'Mostrar'
    }

    this.handleShowPasswrd = this.handleShowPasswrd.bind(this);
}

    handleShowPasswrd() {
        this.state.inputType ===  'password' ? this.setState({ inputType: 'text' }, this.setState({ btn: 'Esconder' })) : this.setState({ inputType: 'password' }, this.setState({ btn: 'Mostrar' }))
        // if(this.state.inputType ===  'password') {
        //     this.setState({
        //         inputType: 'text'
        //     }, this.setState({ btn: 'Esconder' }))
        // }
        // else {
        //     this.setState({
        //         inputType: 'password'
        //     }, this.setState({ btn: 'Mostrar' }))
        // }
    }

    render() {
        return (
            <div>
            <p>
                Teste
            </p>
            <label htmlFor="password"> Senha:
                <input type={ this.state.inputType } id= 'password' name='password'/>
            </label>
            <button  onClick={this.handleShowPasswrd}>{ this.state.btn }</button>
            </div>
        )
    }
}

export default PasswordInput;