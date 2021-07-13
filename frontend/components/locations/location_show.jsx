import React from "react";
import ReviewFormContainer from "../reviews/review_container";
import ReservationFormContainer from "../reservations/reservation_container"
import Map from "./map";

export default class LocationShow extends React.Component {
    constructor(props) {
        super(props);
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

    handleInput(field) {
        return (e) => {
        this.setState({
            [field]: e.target.value,
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
    if (this.props.location === undefined || this.props.location.activities === undefined) return null;

    const activities = Object.values(this.props.location.activities).map((activity, i) => (
        <div className="info-element" key = {`activity-${i}`}>
            <div>{activity.name}</div>
        </div>
    ))

    const amenities = Object.values(this.props.location.amenities).map((amenity, i) => (
        <div className="info-element" key={`amenity-${i}`}>
            <div>{amenity.name}</div>
        </div>
    ))

    const activitiesDetails = Object.values(this.props.location.activities).map((activity, i) => (
        <div className="info-card" key={`details-${i}`}>
            <div className="title">{activity.name}</div>
            <div className="info-element">
                <div>{activity.description}</div>
            </div>
        </div>
    ))

    const terrainsDetails = Object.values(this.props.location.terrains).map((terrain, i) => (
        <div className="info-card" key={`details-${i}`}>
            <div className="title">{terrain.name}</div>
            <div className="info-element">
                <div>{terrain.description}</div>
            </div>
        </div>
    ))

    const photos = this.props.location.photos.map((photo_url, i) => {
        return <img
            key ={`photo-${i}`}
            className="showpage-img"
            src={photo_url}
            alt="location_photo"
        />
    })

    const {lat, lng} = this.props.location
    
    
    return (
        <div>
        <div className="showpage-img-container">
            {photos}
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
                    {this.props.location.description}
                </h1>
                </div>
            </div>
            <div className="details">
              {/* Campsite details */}
                <div className="info-card">
                    <div className="title">Campsite area</div>
                    <div className="info-element">
                    <div>Bring your own vehicles and camping equipment </div>
                    </div>
                    <div className="info-element">
                    <div>Up to a 1,000,000 guests</div>
                    </div>
                    <div className="info-element">
                    <div>Parking available</div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="title">Activities</div>
                    {activities}
                </div>

                <div className="info-card">
                    <div className="title">Amenities</div>
                        {amenities}
                </div>
            </div>
            {/* END OF CAMPSITE DETAILS */}

            <div className="features">
              {/* ACTIVITY */}
                <h3>Activities</h3>
                <p>Just some things you might wanna try</p>

                <div className="details">
                    {activitiesDetails}
                </div>

              {/* TERRAIN */}
                <h3>Terrain</h3>
                <p>The world around you</p>
                <div className="details">
                    {terrainsDetails}
                </div>
              {/* END OF TERRAIN */}
            </div>
            {/* END OF ACTIVITIES */}
                <div className="reviews">
                    <h3>Reviews</h3>
                    <ReviewFormContainer locationId={this.props.ownProps.match.params.locationId} currentUser={this.props.currentUser}/>
                </div>
            </div>

            <div>
                <ReservationFormContainer location={this.props.location}/>
            </div>
            </div>

            <Map lat={lat} lng ={lng}/>
        </div>
        );
    }
}
