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
    @contact = Contact.find(params[:id])
    @contact.update(contact_params)
    current_user = User.find(params[:user_id].to_i)
    contacts = current_user.contacts
    slides = current_user.slides
    friends = current_user.friends
    render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
  end

  private
  def contact_params
    params.permit(:user_id, :name, :email, :phone, :notes, :company)
  end
end
