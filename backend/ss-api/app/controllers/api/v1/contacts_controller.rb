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
  end

  private
  def contact_params
    params.permit(:user_id, :name, :email, :phone, :notes, :company)
  end
end
