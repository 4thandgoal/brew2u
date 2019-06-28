# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
2.times do
# user = User.create( 
#     {
#         email: Faker::Internet.email,
#         password: "asdfsafd",
#         password_confirmation: "asdfsafd",
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         date_of_birth: Faker::Date.birthday(8, 100),
#         phone: Faker::PhoneNumber.cell_phone,
#         street_1: Faker::Address.street_address,
#         street_2: Faker::Address.secondary_address,
#         city: Faker::Address.city,
#         state: Faker::Address.state,
#         zip: Faker::Address.zip_code
#     })
    
# admin = Admin.create(
#     {   
#         email: Faker::Internet.email,
#         password: "asdfsafd",
#         password_confirmation: "asdfsafd",
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         phone: Faker::PhoneNumber.cell_phone,
#         street_1: Faker::Address.street_address,
#         street_2: Faker::Address.secondary_address,
#         city: Faker::Address.city,
#         state: Faker::Address.state,
#         zip: Faker::Address.zip_code
#     }) 
    
review = Review.create(
    {
        user_id: 1,
        establishment_id: 1,
        rating: Faker::Number.between(1, 5),
        review: Faker::Movies::HarryPotter.quote
    })   
end
     