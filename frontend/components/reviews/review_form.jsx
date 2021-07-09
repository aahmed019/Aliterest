import React from 'react'

export default class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.newState = Object.assign({}, this.props.information)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.locationId)
    }

    handleSubmit(e){
        e.preventDefault()
        const review = Object.assign({}, this.state);
        this.props.authAction(review)
        this.setState(this.newState)
    }

    updateInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        console.log(this.props)
        const reviews = this.props.reviews.map((review) => (
            <div>
                <h2>{review.title}</h2>
                <h4>{review.body}</h4>
                
            </div>
        ))
        return(
            <form onSubmit={this.handleSubmit} className="form">

                <div>
                    <ul>
                        {reviews}
                    </ul>
                    <input type="text" className="sessionInput"
                    value={this.state.title}
                    placeholder="Title"
                    onChange = {this.updateInput('title')}
                    />
                    <br /><br />
                    <input type="password" className="sessionInput"
                    value ={this.state.body}
                    placeholder="type out your review here..."
                    onChange = {this.updateInput('body')}
                    />

                    <br />
                    <br />

                    <button className="formButton">{this.props.formType}</button>
                    <br />
                    <br />
                </div>
            </form>
        )
    }
}