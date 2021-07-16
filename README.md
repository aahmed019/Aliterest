# CampCentral

CampCentral is a clone of the popular outdoor/camping marketplace, [Hipcamp](https://www.hipcamp.com/en-US). Users are able to search, book, and review camping locations.

### LIVE SITE - [CampCentral](https://campcentral.herokuapp.com/)

## Technologies

* This project uses Ruby on Rails and Postgresql for the backend.
* The frontend is built with React-Redux.
* The site is hosted on Heroku using Heroku-CLI.
* Google Maps API is used to display camping locations on the map.

## Features

* Searching by amenity
    * Users can search for a specific amenity they would like
    * the matching locations are then displayed on the page as well as their corresponding lat and lng values
    
     ![alt text](https://github.com/aahmed019/CampCentral/blob/main/app/assets/images/search_by_amenity.png)
     
     ![alt text](https://github.com/aahmed019/CampCentral/blob/main/app/assets/images/search_by_shower.png)
     
* Booking a reservation
    * Users can book avaliable dates for a location
    * After a successful booking, a user is redirected to their reservations
    * Users can edit/delete their reservations.
