class Api::V1::ContactsController < ApplicationController
  skip_before_action :authenticate

  def index
    @contacts = Contact.all
    render json: @contacts, status: 200
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def create
    if contact_params[:name] != nil
      @contact = Contact.new(contact_params)
      if @contact.save
        current_user = User.find(params[:user_id].to_i)
        contacts = current_user.contacts
        slides = current_user.slides
        friends = current_user.friends
        render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
      end
    else
      @contact = Contact.find(params[:id])
      new_contact.name = @contact.name
      new_contact.email = @contact.email
      new_contact.phone = @contact.phone
      new_contact.company = @contact.company
      new_contact.url = @contact.url
      new_contact = Contact.new(new_contact)
        if @new_contact.save
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
    @contact = Contact.find(params[:id])
    if params[:remove]
      @post = NewsfeedPost.find_by_user_id_and_contact_id(params[:user_id], params[:id])
      @post.delete
      @contact.update(shared: false)
      contacts = current_user.contacts
      slides = current_user.slides
      friends = current_user.friends
      render json: {user: current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    else
      @contact.update(contact_params)
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
    params.permit(:user_id, :name, :email, :phone, :notes, :company, :shared, :url)
  end

end
