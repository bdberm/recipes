class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.includes(:author)
  end

  def show
    @recipe = Recipe.includes(:author, :ingredients, :steps).order('ingredients.ord, steps.ord').find(params[:id])
  end

  def save
    @user = self.current_user
    recipe_save = RecipeSave.new({recipe_id: params[:recipe_id], user_id: @user.id})

    if recipe_save.save
      render "api/users/saved_recipes"
    else
      render json: recipe_save.errors.full_messages, status: 422
    end


  end

  def unsave
    @user = self.current_user
    recipe_save= RecipeSave.find_by({recipe_id: params[:recipe_id], user_id: @user.id})

    if recipe_save
      recipe_save.destroy
      render "api/users/saved_recipes"
    else
      render json: ['No Save Record To Delete'], status: 422
    end
  end
end
