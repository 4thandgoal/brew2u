class Review < ApplicationRecord
  belongs_to :user
  belongs_to :establishment
  
  validates :rating, :review, presence: true 
  validates :rating, length: {minimum: 1, maximum: 5}
  validates :review, length: {maximum: 300}
  
end


