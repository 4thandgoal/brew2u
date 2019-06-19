require 'rails_helper'

RSpec.describe User, type: :model do
   it "should validate email" do
       user = User.create
       expect(user.errors[:email]).to_not be_empty
    end

   it "should validate encrypted_password" do
       user = User.create
       expect(user.errors[:encrypted_password]).to_not be_empty
    end
    
     it "should validate first_name" do
       user = User.create
       expect(user.errors[:first_name]).to_not be_empty
    end
    
    it "should validate last_name" do
       user = User.create
       expect(user.errors[:last_name]).to_not be_empty
    end
    
    it "should validate date_of_birth" do
       user = User.create
       expect(user.errors[:date_of_birth]).to_not be_empty
    end
    
    it "should validate phone" do
       user = User.create
       expect(user.errors[:phone]).to_not be_empty
    end
    
    it "should validate street_1" do
       user = User.create
       expect(user.errors[:street_1]).to_not be_empty
    end
    
    it "should validate street_2" do
       user = User.create
       expect(User.errors[:street_2]).to_not be_empty
    end
    
    it "should validate city" do
       user = User.create
       expect(user.errors[:city]).to_not be_empty
    end
    
    it "should validate state" do
       user = User.create
       expect(user.errors[:state]).to_not be_empty
    end
    
    it "should validate zip" do
       user = User.create
       expect(user.errors[:zip]).to_not be_empty
    end
end