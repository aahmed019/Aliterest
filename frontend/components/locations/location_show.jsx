import React from "react";

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
    this.props.fetchLocation(this.props.ownProps.match.params.locationId);
    this.scrollFunc()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.ownProps.match.params.locationId !==
      prevProps.ownProps.match.params.locationId
    ) {
      this.props.fetchLocation(this.props.ownProps.match.params.locationId);
    }
  }

  handleSubmit() {}

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

  scrollFunc(){
    window.onscroll = function () {
        if ($(window).scrollTop() >= 450 && $(window).scrollTop() <= 975) {
          $(".price-show-container").css("position", "fixed")
          $(".price-show-container").css("transform", "translateY(-175%)")
        } else {
          $(".price-show-container").css("position", "absolute")
          $(".price-show-container").css("transform", "translateY(0%)")
        }
      }
  
  }

  render() {
    
    console.log(this.state);
    if (this.props.location === undefined) return null;

    const { price } = this.props.location;
    const { start, end, guests } = this.state;
    let days = 0;
    if ((start, end)) {
      console.log(start.getTime());
      console.log(end.getTime());
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
          <div className="desc">

            <div className ="title">
                <h1>{this.props.location.title}</h1>
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
