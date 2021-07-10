import React from 'react'

export default class EditReview extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const review = Object.assign({}, this.state);
        this.state.patchReview(review).then(this.state.closeModal)
    }

    updateInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        const {title, body} = this.state
        return(
            <div> 
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" value = {title} onChange={this.updateInput('title')}/>
                    <input type="text" value = {body} onChange={this.updateInput('body')}/>
                    <button>Edit Review</button>
                </form>
            </div>
        )
    }
}