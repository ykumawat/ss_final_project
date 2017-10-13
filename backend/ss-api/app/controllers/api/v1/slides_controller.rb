class Api::V1::SlidesController < ApplicationController
  skip_before_action :authorized

  def index
    @slides = Slide.all
    render json: @slides, status: 200
  end
  
end
