class Api::V1::ContactsController < ApplicationController
  skip_before_action :authenticate
  def index
    @contacts = Contact.all
    render json: @contacts, status: 200
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def update
    if params[:shared]
      NewsfeedPost.create(user_id: params[:user_id], contact_id: params[:id])
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    elsif
      @post = NewsfeedPost.find_by_user_id_and_contact_id(params[:user_id], params[:id])
      @post.destroy
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    else
      @contact = Contact.find(params[:id].to_i)
      @contact.update(contact_params)
      current_user = User.find(params[:user_id].to_i)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    end
  end

  def destroy
    @contact = Contact.find(params[:id].to_i)
    @contact.delete
    current_user = User.find(params[:user_id].to_i)
    contacts = current_user.contacts
    slides = current_user.slides
    friends = current_user.friends
    render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
  end

  private
  def contact_params
    params.permit(:user_id, :name, :email, :phone, :notes, :company, :shared)
  end
end
