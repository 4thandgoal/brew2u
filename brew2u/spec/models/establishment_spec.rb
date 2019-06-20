require 'rails_helper'

RSpec.describe Establishment, type: :model do
   it "should validate company_name" do
       establishment = Establishment.create
       expect(establishment.errors[:company_name]).to_not be_empty
    end

   it "should validate coffee_or_beer" do
       establishment = Establishment.create
       expect(establishment.errors[:coffee_or_beer]).to_not be_empty
    end
    
    it "should validate phone" do
       establishment = Establishment.create
       expect(establishment.errors[:phone]).to_not be_empty
    end
    
    it "should validate website" do
       establishment = Establishment.create
       expect(establishment.errors[:website]).to_not be_empty
    end
    
    it "should validate street_1" do
       establishment = Establishment.create
       expect(establishment.errors[:street_1]).to_not be_empty
    end
    
    it "should validate street_2" do
       establishment = Establishment.create
       expect(Establishment.errors[:street_2]).to_not be_empty
    end
    
    it "should validate city" do
       establishment = Establishment.create
       expect(establishment.errors[:city]).to_not be_empty
    end
    
    it "should validate state" do
       establishment = Establishment.create
       expect(establishment.errors[:state]).to_not be_empty
    end
    
    it "should validate zip" do
       establishment = Establishment.create
       expect(establishment.errors[:zip]).to_not be_empty
    end
    
    it "should validate hours_of_operation" do
       establishment = Establishment.create
       expect(establishment.errors[:hours_of_operation]).to_not be_empty
    end
    
    it "should validate pet_friendly" do
       establishment = Establishment.create
       expect(establishment.errors[:pet_friendly]).to_not be_empty
    end
    
    it "should validate wifi" do
       establishment = Establishment.create
       expect(establishment.errors[:wifi]).to_not be_empty
    end
end
