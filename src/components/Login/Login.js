import React from 'react';
import { connect } from 'react-redux'

import { loginInputChange, passwordInputChange } from '../../actions/loginActions'


class Login extends React.Component {   

    wrondData () {        
        if (this.props.login !== this.props.loginInput) {
            document.querySelector('.login').placeholder = 'Wrong Login'
            document.querySelector('.login').style.border = '1px solid red'
        }
        if (this.props.password !== this.props.passwordInput) {
            document.querySelector('.password').placeholder = 'Wrong Password'
            document.querySelector('.password').style.border = '1px solid red'
        }
    }

    loginChecker = () => {

        if ((this.props.login === this.props.loginInput) && (this.props.password === this.props.passwordInput)) {
            return this.props.history.push('/home')
        }
        
        this.wrondData()
        
    }

    render () {
        
        return (
            <>
            <h1>LOGIN PLEASE</h1>
            <input type="text" className='login' placeholder='Login' onChange={(e) => {this.props.loginInputChange(e.target.value)}}/>
            <input type="text" className='password' placeholder='Password' onChange={(e) => {this.props.passwordInputChange(e.target.value)}} />
            <button onClick={this.loginChecker}>Submit</button>
            </>
        )
    }

}

const mapStateToProps = state => {
    const { login, password, loginInput, passwordInput } = state.checkLogin
    return {
        login,
        password,
        loginInput,
        passwordInput,
    }
}

const mapDispatchToProps = {
    loginInputChange,
    passwordInputChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)