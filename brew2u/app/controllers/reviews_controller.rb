class ReviewsController < ApplicationController
    # protect all establishment routes
    before_action :set_review, only: [:show, :edit, :update, :destroy]
    # before_action :authenticate_user!
    
    def index
        reviews = Review.all
        render json: reviews, status: 200
    end
    
    def show
    end
    
    def create
        review = current_user.reviews.new(review_params)
        if review.save
            render json: review, status: 201
        else 
            # A 422 status code occurs when a request is well-formed, however, due to semantic errors it is unable to be processed.
            render json: review.errors.full_message, status: 422
        end
    end
    
    def update
    end
    
    def destroy
    end
    
    private
    
    def review_params
        params.require(:review).permit(:rating.to_i, :review)
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_review

        review = Review.find(params[:id])
    end
    
    def set_rating
        rating = Rating.find[params[:id]]
    end
    
    def set_establishment
      establishment = Establishment.find(params[:establishment_id])
    end

end
