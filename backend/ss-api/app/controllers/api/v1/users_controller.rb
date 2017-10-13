class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]

  def index
    @users = User.all
    render json: @users, status: 200
  end


  def new
    @user = User.find_or_create_by(user_params)
  end

  def create
    user = User.new(user_params)
    if user.save
      token = encode_token({user_id: user.id})
      render json: {user: user, jwt: token}, status: 201
    end
  end


  def edit
    user = User.find(params[:id])
  end

  def update
    if @user
      # something
    end
  end

  def destroy
    # something
  end

  def me
    if @user
      contacts = @user.contacts
      slides = @user.slides
      render json: {user: @user, contacts: contacts, slides: slides}, status: 201
    else
      render json: {message: "Error"}
    end
  end


  private

  def user_params
    params.permit(:email, :password)
  end

end
