import React from "react";

const Search = props => {

    return(
        <div className="search-container">
            <div>
                <form className="search-form">
                    <input type="search" className="input-search" />
                    <div className="search-dates">
                        <div className="input-group">
                        <label className="form-label" htmlFor="checkin">
                            Check in:
                        </label>
                        <input
                            className="form-control side-by-side"
                            type="date"
                            id="checkin"
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
                        />
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Search