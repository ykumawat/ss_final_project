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

  def friends
    @user = User.find(params[:id])
  end

  def edit
    user = User.find(params[:id])
  end

  def update
    if @current_user
      byebug
    end
  end

  def destroy
    # something
  end

  def me
    if @current_user
      contacts = @current_user.contacts
      slides = @current_user.slides
      friends = @current_user.friends
      render json: {user: @current_user, contacts: contacts, slides: slides, friends: friends}, status: 201
    else
      render json: {message: "Error"}
    end
  end


  private

  def user_params
    params.permit(:email, :password, :name, :profile_image)
  end

end
