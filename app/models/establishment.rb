class Establishment < ApplicationRecord
  belongs_to :admin
  has_many :reviews
  has_many :users, through: :reviews

  validates :company_name, :coffee_or_beer, :phone, :website, :street_1, :city, :state, :zip, :hours_of_operation, :pet_friendly, :wifi, presence: true
  validates :zip, numericality: { only_integer: true }
  
  def address
    [street_1, city, state, zip].compact.join(', ')
  end
  
  geocoded_by :address
  after_validation :geocode
  
  def average_rating
    if reviews.length > 0
      (reviews.sum(&:rating)/reviews.length).round(1)
    end
  end

end
