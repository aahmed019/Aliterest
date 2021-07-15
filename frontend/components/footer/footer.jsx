import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-header">
                    <h1>CampCentral</h1>
                </div>

                <div className="footer-body">
                    <div className="footer-body-info">
                        <div className="about-me">
                            <h1>About me</h1>
                            <ul>
                                <li>Smart</li>
                                <li>Handsome</li>
                                <li>Talented</li>
                                <li>Literally built diff</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-body-desc">
                        <div>
                            <strong>CampCentral is the most comprehensive clone of Hipcamp(jk).</strong>
                        </div>

                        <div>
                            Discover all the nearest fast food locations near my area, because who needs camping when you have unhealthy food.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer