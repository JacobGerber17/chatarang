import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
    }

    handleChange = (ev) =>{
        this.setState({email: ev.target.value})
    }

    handleSubmit = () => {
        this.props.login({
            uid: '1120932',
            userName: this.state.email,
            email: this.state.email,
        })
    }
    render(){
        return(
            <div className="Login" onSubmit={this.handleSubmit}>
                <form>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login