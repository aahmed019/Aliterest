import React from 'react'

export default class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.information
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.authAction(this.state)
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key = {`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    updateInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form">
                <h2>{this.props.formType}</h2>
                {this.renderErrors()}
                <div>

                <input type="text" className="sessionInput"
                defaultValue ={this.state.email}
                placeholder="Email address..."
                onChange = {this.updateInput('email')}
                />

                {this.props.formType === "Sign Up" ?
                    <>
                        <br /> <br />
                        <input type="text" className="sessionInput"
                        defaultValue ={this.state.f_name}
                        placeholder="First Name..."
                        onChange = {this.updateInput('f_name')}
                        />

                        <br /><br />

                        <input type="text" className="sessionInput"
                        defaultValue ={this.state.l_name}
                        placeholder="Last Name..."
                        onChange = {this.updateInput('l_name')}
                />
                    </>: ""
                }

                <br />
                <br />
                
                <input type="password" className="sessionInput"
                defaultValue ={this.state.password}
                placeholder="Password..."
                onChange = {this.updateInput('password')}
                />

                <br />
                <br />

                <button className="formButton">{this.props.formType}</button>
                <button>{this.props.altLink}</button>

                </div>
            </form>
        )
    }
}