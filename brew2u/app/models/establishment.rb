class Establishment < ApplicationRecord
  belongs_to :admin
  has_many :reviews
  has_many :users, through: :reviews
  
  
  validates :name, :company_name, :coffee_or_beer, :phone, :website, :street_1, :street_2, :city, :state, :zip, :hours_of_operation, :pet_friendly, :wifi, presence: true
  validates :zip, numericality: { only_integer: true }

end
