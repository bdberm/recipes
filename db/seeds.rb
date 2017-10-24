# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create({email: 'ben@gmail.com', password: 'starwars'})
User.create({email: 'mike@gmail.com', password: 'starwars'})
User.create({email: 'david@gmail.com', password: 'starwars'})
User.create({email: 'drew@gmail.com', password: 'starwars'})
User.create({email: 'zach@gmail.com', password: 'starwars'})
User.create({email: 'suhan@gmail.com', password: 'starwars'})
User.create({email: 'salome@gmail.com', password: 'starwars'})
