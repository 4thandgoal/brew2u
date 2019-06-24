class EstablishmentsController < ApplicationController
    # protect all establishment routes
    before_action :set_establishment, only: [:show, :edit, :update, :destroy]
    # before_action :authenticate_user!
    
    def index
        establishments = Establishment.all
        render json: establishments, status: 200
    end
    
    def create
        establishment = current_admin.establishments.new(establishment_params)
        if establishment.save
            render json: establishment, status: 201
        else 
            # A 422 status code occurs when a request is well-formed, however, due to semantic errors it is unable to be processed.
            render json: establishment.errors.full_message, status: 422
        end
    end
    
    def update
    end
    
    def destroy
    end
    
    private
    
    def establishment_params
        params.require(:establishment).permit(:company_name, :coffee_or_beer, :phone, :website, :street_1, :street_2, :city, :state, :zip, :hours_of_operation, 
        :pet_friendly, :wifi)
    end
end
