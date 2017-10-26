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
    @slide = Slide.create(slide_params)
    current_user = User.find(params[:user_id].to_i)
    contacts = current_user.contacts
    slides = current_user.slides
    friends = current_user.friends
    render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
  end

  def update
    @slide = Slide.find(params[:id].to_i)
    @slide.update(slide_params)
    current_user = User.find(params[:user_id].to_i)
    contacts = current_user.contacts
    slides = current_user.slides
    friends = current_user.friends
    render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
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
