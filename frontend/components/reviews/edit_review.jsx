import React from 'react'

export default class EditReview extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.state.patchReview(this.state).then(this.state.closeModal)
    }

    updateInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        const { body} = this.state
        return(
            <div>
                <div className='review-edit'>
                    <h1>Edit your review</h1>
                    <form onSubmit={this.handleSubmit} className="form">
                        <textarea type="text" value = {body} onChange={this.updateInput('body')}/>
                        <br />
                        <button className="formButton" style={{width:'100%'}}>Edit review</button>
                    </form>
                </div>
            </div>
        )
    }
}