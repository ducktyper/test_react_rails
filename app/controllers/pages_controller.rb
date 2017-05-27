class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def set_name
    name = params[:page][:name]

    render json: {message: "Submit #{name}"}
  end
end
