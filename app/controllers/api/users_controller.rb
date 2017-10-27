class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def show
    @user = User.includes(:saved_recipes).find(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: {}
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :name)
  end

end
