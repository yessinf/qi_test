# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'securerandom'

user_1 = User.new(email: "user1@gmail.com", first_name: "User", last_name: "User1", password: "123456789", password_confirmation: "123456789")
user_2 = User.new(email: "user2@gmail.com", first_name: "User", last_name: "User2", password: "123456789", password_confirmation: "123456789")
user_3 = User.new(email: "user3@gmail.com", first_name: "User", last_name: "User3", password: "123456789", password_confirmation: "123456789")
user_1.skip_confirmation!
user_2.skip_confirmation!
user_3.skip_confirmation!
user_1.save!
user_2.save!
user_3.save!

Location.create(user_id: user_1.id, address: "Jakarta", latitude: "-6.175110", longitude: "106.865036")
Location.create(user_id: user_1.id, address: "Bandung", latitude: "-6.917464", longitude: "107.619125")

user_1_shared_locations = user_2.shared_locations.create(location: Location.first, link: SecureRandom.hex(3).upcase)
user_2_shared_locations = user_3.shared_locations.create(location: Location.last, link: SecureRandom.hex(3).upcase)