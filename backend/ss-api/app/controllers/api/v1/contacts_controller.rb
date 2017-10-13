class Api::V1::ContactsController < ApplicationController
  skip_before_action :authorized
  def index
    @contacts = Contact.all
    render json: @contacts, status: 200
  end
end
