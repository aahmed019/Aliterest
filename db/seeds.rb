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