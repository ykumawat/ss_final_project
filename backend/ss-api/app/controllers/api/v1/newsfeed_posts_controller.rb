class Api::V1::NewsfeedPostsController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    @posts = NewsfeedPost.all
    mapped_posts = []
    @posts.map do |e|
      if e.contact_id != nil
        contact = Contact.find(e.contact_id)
        contactLikes = [contact, e.likes]
        mapped_posts.push(contactLikes)
      else
        slide = Slide.find(e.slide_id)
        slideLikes = [slide, e.likes]
        mapped_posts.push(slideLikes)
      end
    end
    render json: {postInfo: mapped_posts}, status: 200
  end

  def show
    @post = NewsfeedPost.find(params[:id])
  end

  def create
    if post_params[:contact_id]
      @post = NewsfeedPost.create(user_id: post_params[:user_id], contact_id: post_params[:contact_id])
      @contact = Contact.find(post_params[:contact_id])
      @contact.update(shared: true)
      current_user = User.find(post_params[:user_id].to_i)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    else
      @post = NewsfeedPost.create(user_id: post_params[:user_id], slide_id: post_params[:slide_id])
      @slide = Slide.find(post_params[:slide_id])
      @slide.update(shared: true)
      current_user = User.find(post_params[:user_id].to_i)
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
