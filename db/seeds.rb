# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Location.destroy_all

jack = User.create({email: 'jack@fakeemail.com', f_name: 'Jack', l_name: 'Liu',  password: 'test123'})
sam = User.create({email: 'sam@fakeemail.com', f_name: 'Sam', l_name: 'Sacco',  password: 'test123'})
justin = User.create({email: 'justin@fakeemail.com', f_name: 'Justin', l_name: 'Meyer',  password: 'test123'})

loc1 = Location.create({title: 'Demo 1 Title', description: 'first', price: 20, lat: '41.3129', lng: '74.0063', host_id: 1})
loc2 = Location.create({title: 'Demo 2 Title', description: 'second', price: 25, lat: '42.3658', lng: '71.0263', host_id: 2})
loc3 = Location.create({title: 'Demo 3 Title', description: 'third', price: 30, lat: '41.3129', lng: '74.0063', host_id: 3})
loc4 = Location.create({title: 'Demo 4 Title', description: 'fourth', price: 35, lat: '42.3658', lng: '71.0263', host_id: 2})
loc5 = Location.create({title: 'Demo 5 Title', description: 'fifth', price: 40, lat: '42.3658', lng: '71.0263', host_id: 1})

review1 = Review.create({body: "I really enjoyed the property and the host was wonderful", author_id: 2 , location_id: 1})

review2 = Review.create({body: "Jack really did a great job on the property, 10/10", author_id: 3, location_id: 1})



review3 = Review.create({body: "I really enjoyed the property and the host was wonderful", author_id: 1, location_id: 2})

review4 = Review.create({body: "Sam, you're that guy", author_id: 1, location_id: 2})

review5 = Review.create({body: "Sam, really did a great job on the property, 10/10", author_id: 3, location_id: 2})