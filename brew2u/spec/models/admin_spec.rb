require 'rails_helper'

RSpec.describe Admin, type: :model do
   it "should validate email" do
       admin = Admin.create
       expect(admin.errors[:email]).to_not be_empty
    end

   it "should validate encrypted_password" do
       admin = Admin.create
       expect(admin.errors[:encrypted_password]).to_not be_empty
    end
    
    it "should validate first_name" do
       admin = Admin.create
       expect(admin.errors[:first_name]).to_not be_empty
    end
    
    it "should validate last_name" do
       admin = Admin.create
       expect(admin.errors[:last_name]).to_not be_empty
    end
    
    it "should validate phone" do
       admin = Admin.create
       expect(admin.errors[:phone]).to_not be_empty
    end
    it "should validate street_1" do
       admin = Admin.create
       expect(admin.errors[:street_1]).to_not be_empty
    end
    
    it "should validate street_2" do
       admin = Admin.create
       expect(admin.errors[:street_2]).to_not be_empty
    end
    
    it "should validate city" do
       admin = Admin.create
       expect(admin.errors[:city]).to_not be_empty
    end
    
    it "should validate state" do
       admin = Admin.create
       expect(admin.errors[:state]).to_not be_empty
    end
    
    it "should validate zip" do
       admin = Admin.create
       expect(admin.errors[:zip]).to_not be_empty
    end
end