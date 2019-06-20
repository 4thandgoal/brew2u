require 'rails_helper'

   RSpec.describe EstablishmentsController do
       describe "def index" do
           it "lists all of the establishments" do
               # Create a new Establishment in the Test Database
               Establishment.create(admin_id: 1, company_name: 'Puzzles', coffee_or_beer: 'Beer', phone: '619-555-1234', website: 'puzzlesbar.com', street_2: 'Suite 100', city: 'San Diego', state: 'California', zip: 92101, hours_of_operation: '8am to 5pm', pet_friendly: true, wifi: true)
               # Make a request to the API
               get :index
               # Convert the response into a Ruby Hash
               json = JSON.parse(response.body)
               # Assure that we got a successful response
               expect(response).to be_success
               # Assure that we got one result back as expected
               expect(json.length).to eq 1
           end
       end
       
       describe "def create" do
           it "creates a new instance of Establishment" do
               # Params to send with the request
               establishment_params = {
                   establishment: {
                    admin_id: 1,
                    company_name: 'Puzzles',
                    coffee_or_beer: 'Beer',
                    phone: '619-555-1234',
                    website: 'puzzlesbar.com',
                    street_1: '704 J Street',
                    street_2: 'Suite 100',
                    city: 'San Diego',
                    state: 'California',
                    zip: 92101,
                    hours_of_operation: '8am to 5pm',
                    pet_friendly: true,
                    wifi: true 
                   }
               }
               
              # Send the request to the server
              post :create, params: establishment_params
              # Assure we get a successful response
              expect(response).to be_success
              # Look up the establishment that should be created in the database
              new_establishment = Establishment.first
              # Check that the establishment has the expected information
              expect(new_establishment.name).to eq('Puzzles')
           end
           
           it "doesn't create an establishment without a name" do
               # Params to send with the request
               establishment_params = {
                   establishment: {
                    admin_id: 1,
                    coffee_or_beer: 'Beer',
                    phone: '619-555-1234',
                    website: 'puzzlesbar.com',
                    street_1: '704 J Street',
                    street_2: 'Suite 100',
                    city: 'San Diego',
                    state: 'California',
                    zip: 92101,
                    hours_of_operation: '8am to 5pm',
                    pet_friendly: true,
                    wifi: true 
                   }
               }
               # Attempt to create establishment (without a name)
               post :create, params: establishment_params
               # Test that our status is correct when the establishment can't be created
               expect(response.status).to eq 422
               # Check that the API tells us what went wrong
               json = JSON.parse(response.body)
               expect(json['name']).to_not be_empty
           end
       end
end

