require 'rails_helper'

   RSpec.describe ReviewsController do
       describe "def index" do
           it "lists all of the reviews" do
               # Create a new Review in the Test Database
               Review.create(user_id: 1, establishment_id: 1, rating: 5, review: 'This place rocks!')
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
           it "creates a new review" do
               # Params to send with the request
               review_params = {
                   establishment: {
                    user_id: 1,
                    establishment_id: 1,
                    rating: 5,
                    review: 'This place rocks!'
                   }
               }
               
              # Send the request to the server
              post :create, params: review_params
              # Assure we get a successful response
              expect(response).to be_success
              # Look up the review that should be created in the database
              new_review = Review.first
              # Check that the review has the expected information
              expect(new_review.rating).to eq(5)
           end
           
           it "doesn't create a review without a rating" do
               # Params to send with the request
               review_params = {
                   establishment: {
                    user_id: 1,
                    establishment_id: 1,
                    review: 'This place rocks!'
                   }
               }
               # Attempt to create review (without a rating)
               post :create, params: establishment_params
               # Test that our status is correct when the establishment can't be created
               expect(response.status).to eq 422
               # Check that the API tells us what went wrong
               json = JSON.parse(response.body)
               expect(json['rating']).to_not be_empty
           end
       end
end
