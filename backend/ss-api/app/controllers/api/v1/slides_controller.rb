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
    byebug
    if slide_params[:topic] != nil
      @slide = Slide.new(slide_params)
      if @slide.save
        current_user = User.find(params[:user_id].to_i)
        contacts = current_user.contacts
        slides = current_user.slides
        friends = current_user.friends
        render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
      end
    else
      @slide = Slide.find(params[:id])
      new_slide.topic = @slide.topic
      new_slide.text = @slide.text
      new_slide.url = @slide.url
      new_slide.user_id = params[:user_id]
      new_slide = Slide.new(new_slide)
        if @new_slide.save
          current_user = User.find(params[:user_id].to_i)
          contacts = current_user.contacts
          slides = current_user.slides
          friends = current_user.friends
          render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
        end
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
