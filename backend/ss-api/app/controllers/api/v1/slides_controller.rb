class Api::V1::SlidesController < ApplicationController
  skip_before_action :authenticate

  def index
    @slides = Slide.all
    render json: @slides, status: 200
  end

end
