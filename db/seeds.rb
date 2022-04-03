# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# this is commented out because it has already been seeded. Please uncomment if reseeding.
# AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

Alert.destroy_all
User.destroy_all

# I am aware that this is not DRY

ada = User.new(email: 'ada@email.com', password: 'password')
ada.save!

buffy = User.new(email: 'buffy@email.com', password: 'password')
buffy.save!

5.times do 
  alert = Alert.new(level: rand(0..10), user_id: ada.id)
  alert.save!
end

5.times do
  alert = Alert.new(level: rand(0..10), user_id: buffy.id)
  alert.save!
end

#Fabricator(:user) do 
#  email { Faker::Internet.email }
#  password { "password" }
#end

#5.times { Fabricate(:user) }


User.all.each do | user |
  p "email: #{user.email}"
  p "alerts: #{user.alerts.count}" 
end

p "Created #{User.count} users and #{Alert.count} alerts"

