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
bear = Location.create(title: 'Demo Title', description: 'this is a demo description', price: 100, latitude: '41.3129', longitude: '74.0063', host_id: 2)
gateway = Location.create(title: 'Demo 2 Title', description: 'This is the second description', price: 95, latitude: '42.3658', longitude: '71.0263', host_id: 1)