class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    layout :layout_by_resource
    
    private
    
    def layout_by_resource
        if devise_controller? && resource_name == :user
            "user_layout"
        elsif devise_controller? && resource_name == :admin
            "admin_layout"
        else
            "application"
        end
    end
    
end


