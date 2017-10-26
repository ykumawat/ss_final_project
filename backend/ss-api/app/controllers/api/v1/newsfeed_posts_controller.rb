class Api::V1::NewsfeedPostsController < ApplicationController
  skip_before_action :authenticate

  def index
    @posts = NewsfeedPost.all
    render json: @posts, status: 200
  end

  def show
    @post = NewsfeedPost.find(params[:id])
  end

  def create
    if params[:contact_id]
      @post = NewsfeedPost.create(user_id: params[:user_id], contact_id: params[:contact_id])
      @contact = Contact.find(params[:id])
      @contact.update(shared: true)
      current_user = User.find(params[:user_id].to_i)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    else
      @post = NewsfeedPost.create(user_id: params[:user_id], slide_id: params[:slide_id])
      @slide = Slide.find(params[:slide_id])
      @slide.update(shared: true)
      current_user = User.find(params[:user_id].to_i)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    end
  end

  def update
  end

  private
  def post_params
    params.permit(:user_id, :contact_id, :slide_id, :likes)
  end

end
