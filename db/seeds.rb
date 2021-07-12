# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.destroy_all
Location.destroy_all
Review.destroy_all
Amenity.destroy_all
Activity.destroy_all
Terrain.destroy_all
LocationAmenity.destroy_all
LocationActivity.destroy_all
LocationTerrain.destroy_all

# ActiveStorage::Attachment.all.each { |attachment| attachment.purge }
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Location.connection.execute('ALTER SEQUENCE locations_id_seq RESTART WITH 1')
Review.connection.execute('ALTER SEQUENCE reviews_id_seq RESTART WITH 1')
Amenity.connection.execute('ALTER SEQUENCE amenities_id_seq RESTART WITH 1')
Activity.connection.execute('ALTER SEQUENCE activities_id_seq RESTART WITH 1')
Terrain.connection.execute('ALTER SEQUENCE terrains_id_seq RESTART WITH 1')
LocationAmenity.connection.execute('ALTER SEQUENCE location_amenities_id_seq RESTART WITH 1')
LocationActivity.connection.execute('ALTER SEQUENCE location_activities_id_seq RESTART WITH 1')
LocationTerrain.connection.execute('ALTER SEQUENCE location_terrains_id_seq RESTART WITH 1')


#Users
jack = User.create({email: 'jack@fakeemail.com', f_name: 'Jac', l_name: 'Liu',  password: 'test123'})
sam = User.create({email: 'sam@fakeemail.com', f_name: 'Sam', l_name: 'Sacco',  password: 'test123'})
justin = User.create({email: 'justin@fakeemail.com', f_name: 'Justin', l_name: 'Meyer',  password: 'test123'})


#Locations
loc1 = Location.create({title: 'Demo 1 Title', description: 'first', price: 20, lat: '41.3129', lng: '74.0063', host_id: 1})
loc2 = Location.create({title: 'Demo 2 Title', description: 'second', price: 25, lat: '42.3658', lng: '71.0263', host_id: 2})
loc3 = Location.create({title: 'Demo 3 Title', description: 'third', price: 30, lat: '41.3129', lng: '74.0063', host_id: 3})
loc4 = Location.create({title: 'Demo 4 Title', description: 'fourth', price: 35, lat: '42.3658', lng: '71.0263', host_id: 1})

#Reviews
review1 = Review.create({body: "I really enjoyed the property and the host was wonderful", author_id: 2 , location_id: 1})
review2 = Review.create({body: "Jack really did a great job on the property, 10/10", author_id: 3, location_id: 1})
review3 = Review.create({body: "I really enjoyed the property and the host was wonderful", author_id: 1, location_id: 2})
review4 = Review.create({body: "Sam, you're that guy", author_id: 1, location_id: 2})
review5 = Review.create({body: "Sam, really did a great job on the property, 10/10", author_id: 3, location_id: 2})

#Amenities
am1 = Amenity.create({name:"Shower" , description: "Showers avaliable"})
am2 = Amenity.create({name:"Water" , description: "Portable water available"})
am3 = Amenity.create({name:"Wifi" , description: "Wifi available"})

#Activities
ac1 = Activity.create({name: "Biking", description:"We offer bike rentals"})
ac2 = Activity.create({name: "Fishing", description:"We have a stream that runs along the property that is filled with fishes"})
ac3 = Activity.create({name: "Swimming", description:"We got a pool too"})

#Location Amenities
lam1 = LocationAmenity.create({location_id: 1, amenity_id: 1})
lam2 = LocationAmenity.create({location_id: 1, amenity_id: 2})
lam3 = LocationAmenity.create({location_id: 1, amenity_id: 3})

lam4 = LocationAmenity.create({location_id: 2, amenity_id: 1})
lam5 = LocationAmenity.create({location_id: 2, amenity_id: 2})
lam6 = LocationAmenity.create({location_id: 2, amenity_id: 3})

lam7 = LocationAmenity.create({location_id: 3, amenity_id: 1})
lam8 = LocationAmenity.create({location_id: 3, amenity_id: 2})
lam9 = LocationAmenity.create({location_id: 3, amenity_id: 3})

lam10 = LocationAmenity.create({location_id: 4, amenity_id: 1})
lam11 = LocationAmenity.create({location_id: 4, amenity_id: 2})
lam12 = LocationAmenity.create({location_id: 4, amenity_id: 3})

#Location Activities

lac1 = LocationActivity.create({location_id: 1, activity_id: 1})
lac2 = LocationActivity.create({location_id: 1, activity_id: 2})
lac3 = LocationActivity.create({location_id: 1, activity_id: 3})

lac4 = LocationActivity.create({location_id: 2, activity_id: 1})
lac5 = LocationActivity.create({location_id: 2, activity_id: 2})
lac6 = LocationActivity.create({location_id: 2, activity_id: 3})

lac7 = LocationActivity.create({location_id: 3, activity_id: 1})
lac8 = LocationActivity.create({location_id: 3, activity_id: 2})
lac9 = LocationActivity.create({location_id: 3, activity_id: 3})

lac10 = LocationActivity.create({location_id: 4, activity_id: 1})
lac11 = LocationActivity.create({location_id: 4, activity_id: 2})
lac12 = LocationActivity.create({location_id: 4, activity_id: 3})

#Terrains 

t1 = Terrain.create({name: "Forest", description:"The property is filled with a lush amount of pine trees."})
t2 = Terrain.create({name: "River", description:"Nearby there is river used for fishing and swimming."})
t3 = Terrain.create({name: "Mountain", description:"There is a mountain nearby often used for hiking."})

#Location Terrains

lac1 = LocationTerrain.create({location_id: 1, terrain_id: 1})
lac2 = LocationTerrain.create({location_id: 1, terrain_id: 2})
lac3 = LocationTerrain.create({location_id: 1, terrain_id: 3})

lac4 = LocationTerrain.create({location_id: 2, terrain_id: 1})
lac5 = LocationTerrain.create({location_id: 2, terrain_id: 2})
lac6 = LocationTerrain.create({location_id: 2, terrain_id: 3})

lac7 = LocationTerrain.create({location_id: 3, terrain_id: 1})
lac8 = LocationTerrain.create({location_id: 3, terrain_id: 2})
lac9 = LocationTerrain.create({location_id: 3, terrain_id: 3})

lac10 = LocationTerrain.create({location_id: 4, terrain_id: 1})
lac11 = LocationTerrain.create({location_id: 4, terrain_id: 2})
lac12 = LocationTerrain.create({location_id: 4, terrain_id: 3})

#images
f1 = File.open('app/assets/images/s1.jpg')
f2 = File.open('app/assets/images/s2.jpg')
f3 = File.open('app/assets/images/s3.jpg')

f4 = File.open('app/assets/images/tele1.jpg')
f5 = File.open('app/assets/images/tele2.jpg')
f6 = File.open('app/assets/images/tele3.jpg')

loc1.photos.attach(io: f1, filename: 's1.jpg')
loc1.photos.attach(io: f2, filename: 's2.jpg')
loc1.photos.attach(io: f3, filename: 's3.jpg')

loc2.photos.attach(io: f4, filename: 'tele1.jpg')
loc2.photos.attach(io: f5, filename: 'tele2.jpg')
loc2.photos.attach(io: f6, filename: 'tele3.jpg')