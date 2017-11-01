class Api::CommentsController < ApplicationController
  def create
    @recipe = Recipe.find(params[:recipe_id])
    user = self.current_user
    @rating = Rating.new(rating_params)
    @rating.recipe_id = @recipe.id
    @rating.user_id = user.id

    if @rating.save
      render "api/recipes/ratings"
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def update
    @rating = Rating.find(params[:id])

    if @rating.update_attributes(rating_params)
      @recipe = Recipe.find(comment.recipe_id)
      render "api/recipes/ratings"
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def destroy
    begin
      @rating = Rating.find(params[:id])
      @recipe = Recipe.find(@rating.recipe_id)
      @rating.destroy
      render "api/recipes/ratings"
    rescue
      render json: ["No Rating To Delete"], status: 404;
    end
  end

  private
  def rating_params
    params.require(:rating).permit(:rating)
  end
end
