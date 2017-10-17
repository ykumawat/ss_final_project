class AuthController < ApplicationController
  skip_before_action :authenticate, only: [:create]

  def create
    user = User.find_by(email: auth_params[:email])
    if user && user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id.to_s})
      render json: {user: user, jwt: jwt}
    else
      render json: {message: "user not found"}, status: 400
    end
  end

  private
  def auth_params
    params.require(:auth).permit(:email, :password)
  end
end
