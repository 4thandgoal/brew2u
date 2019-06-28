require 'rails_helper'

describe 'Establishments' do
    it 'gets a list of Establishments' do
       Establishment.create(company_name: 'beerme', coffee_or_beer: 'beer', phone: '', website: '', street_1: '', street_2: '', city: '', state: '', zip: '', hours_of_operation: '', pet_friendly: '', wifi: '')
       
       get '/establishments'
       
       json = JSON.parse(response.body)
       
       expect(response).to be_success
       
       expect(json.length).to eq 1
    end
end