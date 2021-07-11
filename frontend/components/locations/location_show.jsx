import React from "react";
import ReviewFormContainer from "../reviews/review_container";

export default class LocationShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: null,
            end: null,
            guests: 1,
        };
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchLocation(this.props.ownProps.match.params.locationId);
        this.scrollFunc();
    }

    componentDidUpdate(prevProps) {
        if (
        this.props.ownProps.match.params.locationId !==
        prevProps.ownProps.match.params.locationId
        ) {
        this.props.fetchLocation(this.props.ownProps.match.params.locationId);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleInput(field) {
        return (e) => {
        this.setState({
            [field]: e.target.value,
        });
        };
    }

    handleDate(field) {
        return (e) => {
        this.setState({
            [field]: new Date(e.target.value),
        });
        };
    }

    scrollFunc() {
        window.onscroll = function () {
        if ($(window).scrollTop() >= 0) {
            $(".navbar").css("position", "absolute");
        }
        if ($(window).scrollTop() >= 715 && $(window)) {
            $(".price-show-container").css("position", "fixed");
            $(".price-show-container").css("transform", "translateY(-275%)");
        } else {
            $(".price-show-container").css("position", "absolute");
            $(".price-show-container").css("transform", "translateY(0%)");
        }
        };
    }

    render() {

    if (this.props.location === undefined) return null;

    const { price } = this.props.location;
    const { start, end, guests } = this.state;
    let days = 0;
    if ((start, end)) {
        let diff_time = end.getTime() - start.getTime();
        days = diff_time / (1000 * 3600 * 24);
    }

    return (
        <div>
        <div className="showpage-img-container">
            <img
            className="showpage-img"
            src="https://picsum.photos/550"
            alt=""
            />

            <img
            className="showpage-img"
            src="https://picsum.photos/550"
            alt=""
            />

            <img
            className="showpage-img"
            src="https://picsum.photos/550"
            alt=""
            />
        </div>

        <div className="show-page-content">
            <div className="info">
                <div className="title">
                    <h1>{this.props.location.title}</h1>
                </div>

            <div className="host">
                <div className="host-info">
                    <div>
                    <img
                        src="https://picsum.photos/100"
                        style={{ borderRadius: "50%" }}
                    />
                </div>
                <div>
                    <p>Hosted by</p>
                    <h1>
                    {this.props.location.f_name} {this.props.location.l_name}
                    </h1>
                </div>
                </div>
                <div className="location-desc">
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </h1>
                </div>
            </div>
            <div className="details">
              {/* Campsite details */}
                <div className="info-card">
                    <div className="title">Campsite area</div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Activities</div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Amenities</div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                    <div className="info-element">
                    <div>icon</div>
                    <div>information</div>
                    </div>
                </div>
            </div>
            {/* END OF CAMPSITE DETAILS */}

            <div className="features">
              {/* ACTIVITY */}
                <h3>Activities</h3>
                <p>Just some things you might wanna try</p>

                <div className="details">
                    <div className="info-card">
                    <div className="title">Activity 1</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Activity 2</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Activity 3</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Activity 4</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Activity 5</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Activity 6</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    </div>
                </div>

              {/* TERRAIN */}
                <h3>Terrain</h3>
                <p>The world around you</p>
                <div className="details">
                    <div className="info-card">
                    <div className="title">Forest</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Welands</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Farm</div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                    <div className="info-element">
                        <div>icon</div>
                        <div>information</div>
                    </div>
                </div>
                </div>
              {/* END OF TERRAIN */}
            </div>
            {/* END OF ACTIVITIES */}
                <div className="reviews">
                    <h3>Reviews</h3>
                    <ReviewFormContainer locationId={this.props.ownProps.match.params.locationId}/>
                </div>
            </div>

            <div>
                <div className="price-show-container">
                <div className="price">
                    <h1> ${price}</h1>
                    <p>
                    average per night ({guests} {guests > 1 ? "guests" : "guest"})
                    </p>
                </div>
                <form onSubmit={this.handleSubmit} className="show-page-form">
                    <div id="date-form">
                    <div className="dates">
                        <div className="input-group">
                        <label className="form-label" htmlFor="checkin">
                            Check in:
                        </label>
                        <input
                            className="form-control side-by-side"
                            type="date"
                            id="checkin"
                            onChange={this.handleDate("start")}
                        />
                        </div>

                        <div className="input-group ">
                        <label className="form-label" htmlFor="checkout">
                            Check out:
                        </label>
                        <input
                            className="form-control"
                            type="date"
                            id="checkout"
                            onChange={this.handleDate("end")}
                        />
                        </div>
                    </div>
                    </div>

                    <div className="guests">
                    <label htmlFor="guests_amount">Guests: </label>
                    <select
                        className="guest-select"
                        onChange={this.handleInput("guests")}
                    >
                        <option value="1" defaultValue>
                        1 guest
                        </option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                    </select>
                    </div>

                    <div className="subtotal">
                    <p>
                        Subtotal: $
                        {days * price * guests > 0 ? days * price * guests : 0}
                    </p>
                    </div>
                    <div className="book-button">
                    <button>Book!</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        );
    }
}
