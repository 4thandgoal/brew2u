require 'rails_helper'

require 'rails_helper'

RSpec.describe Review, type: :model do
   it "should validate rating" do
       review = Review.create
       expect(review.errors[:rating]).to_not be_empty
    end

   it "should validate review" do
       review = Review.create
       expect(review.errors[:review]).to_not be_empty
    end
end
