class Api::V1::SlidesController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    @slides = Slide.all
    render json: @slides, status: 200
  end

  def show
    @slide = Slide.find(params[:id])
  end

  def create
    @slide = Slide.new(slide_params)
    if @slide.save
      current_user = User.find(params[:user_id].to_i)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    end
  end

  def update
    current_user = User.find(params[:user_id].to_i)
    @slide = Slide.find(params[:id].to_i)
    if params[:remove]
      @post = NewsfeedPost.find_by_user_id_and_slide_id(params[:user_id], params[:id])
      @post.delete
      @slide.update(shared: false)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    else
      @slide.update(slide_params)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    end
  end

  def destroy
    @slide = Slide.find(params[:id].to_i)
    @slide.delete
    current_user = User.find(params[:user_id].to_i)
    contacts = current_user.contacts
    slides = current_user.slides
    friends = current_user.friends
    render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
  end

  private
  def slide_params
    params.permit(:user_id, :topic, :text, :language, :url)
  end

end
