class Api::V1::NewsfeedPostsController < ApplicationController
  skip_before_action :authenticate

  def index
    @posts = NewsfeedPost.all
    render json: @posts, status: 200
  end

  def show
    @post = NewsfeedPost.find(params[:id])
  end

end
