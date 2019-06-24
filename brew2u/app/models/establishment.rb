class Establishment < ApplicationRecord
  belongs_to :admin
  has_many :reviews
  has_many :users, through: :reviews
  
  #originally geocoded_by :address
  #should we join columns to make an :address column for geocoder or can we use multiple columns in place of :address?
  # geocoded_by :street_1, :city, :state, :zip
  # after_validation :geocode
  
  validates :company_name, :coffee_or_beer, :phone, :website, :street_1, :city, :state, :zip, :hours_of_operation, :pet_friendly, :wifi, presence: true
  validates :zip, numericality: { only_integer: true }

end
